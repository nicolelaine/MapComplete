import {OsmConnection} from "./Logic/Osm/OsmConnection";
import Combine from "./UI/Base/Combine";
import {Button} from "./UI/Base/Button";
import {TextField} from "./UI/Input/TextField";
import {FixedUiElement} from "./UI/Base/FixedUiElement";
import {UIEventSource} from "./Logic/UIEventSource";
import {Utils} from "./Utils";
import {SubtleButton} from "./UI/Base/SubtleButton";
import LZString from "lz-string";
import BaseUIElement from "./UI/BaseUIElement";
import Table from "./UI/Base/Table";
import {LayoutConfigJson} from "./Models/ThemeConfig/Json/LayoutConfigJson";
import {Changes} from "./Logic/Osm/Changes";
import {ElementStorage} from "./Logic/ElementStorage";


const connection = new OsmConnection({
    osmConfiguration: 'osm',
    changes: new Changes(),
    layoutName: '',
    allElements: new ElementStorage()
});


let rendered = false;

function salvageThemes(preferences: any) {
    const knownThemeNames = new Set<string>();
    const correctThemeNames = []
    for (const key in preferences) {
            try{
        if (!(typeof key === "string")) {
            continue;
        }
        const prefix = "mapcomplete-installed-theme-";
        // mapcomplete-installed-theme-arbres_llefia-combined-11
        //mapcomplete-installed-theme-1roadAlllanes-combined-length
        if (!key.startsWith(prefix)) {
            continue;
        }
        const theme = key.substring(prefix.length, key.indexOf("-combined-"))

        if (key.endsWith("-length")) {
            correctThemeNames.push(theme)
        } else {
            knownThemeNames.add(theme);
        }
    }catch(e){console.error(e)}}

    for (const correctThemeName of correctThemeNames) {
        knownThemeNames.delete(correctThemeName);
    }

    const missingValues = Array.from(knownThemeNames).map(failedTheme => {

        let i = 0;
        let foundValue = undefined
        let combined = ""
        do {
            const prefix = "mapcomplete-installed-theme-";
            const key = prefix + failedTheme + "-combined-" + i;
            foundValue = preferences[key]
            console.log(key, "-->", foundValue)
            i++;
            combined += foundValue ?? ""
        } while (foundValue !== undefined);

        if (combined === "") {
            return null;
        }

        console.log("COmbined value is", combined)
        let jsonObject;
        try {
            jsonObject = JSON.parse(atob(combined));
        } catch (e) {
            try{
                
            // We try to decode with lz-string
            jsonObject = JSON.parse(Utils.UnMinify(LZString.decompressFromBase64(combined))) as LayoutConfigJson;
            }catch(e0){
                console.log("Could not salvage theme. Initial parsing failed due to:", e,"\nWith LZ failed due ", e0)
            }

        }

        return {
            themeName: failedTheme,
            contents: JSON.stringify(jsonObject, null, "  ")
        }
    })
    return Utils.NoNull(missingValues);
}

function clearAll(preferences) {
    for (const key in preferences) {
        const pref = connection.GetPreference(key, "");
        if (key.startsWith("mapcomplete")) {
            pref.setData("")
        }
    }
}

function SalvageButton(theme: { themeName: string, contents: string }) {
    return new SubtleButton("./assets/svg/bug.svg", "Download broken theme " + theme.themeName).onClick(
        () => {
            Utils.offerContentsAsDownloadableFile(theme.contents, theme.themeName + ".json")
        }
    )
}

function createTable(preferences: any) {
    if (rendered) {
        return;
    }
    rendered = true;
    const prefs: (BaseUIElement | string)[][] = [];
    for (const key in preferences) {
        if (!preferences.hasOwnProperty(key)) {
            continue;
        }
        const pref = connection.GetPreference(key, "");

        let value: BaseUIElement = new FixedUiElement(pref.data);
        if (connection.userDetails.data.csCount > 500 &&
            (key.startsWith("mapcomplete") || connection.userDetails.data.csCount > 2500)) {
            value = new TextField({
                value: pref
            });
        }

        const row = [
            key,
            new Button("delete", () => pref.setData(null)),
            value
        ];
        prefs.push(row);
    }

    new Combine(
        [
            ...salvageThemes(preferences).map(theme => SalvageButton(theme)),
            new Table(
                ["Key", "", "Value"],
                prefs
            ),
            new SubtleButton("./assets/svg/delete_icon.svg", "Delete all mapcomplete preferences (mangrove identies are preserved)").onClick(() => clearAll(preferences))]
    ).AttachTo("maindiv");
}

connection.preferencesHandler.preferences.addCallback((prefs) => createTable(prefs))

