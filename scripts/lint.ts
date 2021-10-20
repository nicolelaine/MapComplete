/*
 * This script reads all theme and layer files and reformats them inplace
 * Use with caution, make a commit beforehand!
 */


import ScriptUtils from "./ScriptUtils";
import {writeFileSync} from "fs";
import {LayerConfigJson} from "../Models/ThemeConfig/Json/LayerConfigJson";
import LineRenderingConfig from "../Models/ThemeConfig/LineRenderingConfig";
import LineRenderingConfigJson from "../Models/ThemeConfig/Json/LineRenderingConfigJson";

/**
 * In place fix
 */
function fixLayerConfig(config: LayerConfigJson): void {
    if (config.tagRenderings !== undefined) {
        for (const tagRendering of config.tagRenderings) {
            if (tagRendering["#"] !== undefined) {
                tagRendering["id"] = tagRendering["#"]
                delete tagRendering["#"]
            }
            if (tagRendering["id"] === undefined) {
                if (tagRendering["freeform"]?.key !== undefined) {
                    tagRendering["id"] = config.id + "-" + tagRendering["freeform"]["key"]
                }
            }
        }
    }
    
    if(config.mapRendering === undefined || true){
        // This is a legacy format, lets create a pointRendering
        let location: ("point"|"centroid")[] = ["point"]
        let wayHandling: number = config.wayHandling
        if(wayHandling === 2){
            location = ["point", "centroid"]
        }
        config.mapRendering = [
            {
                icon: config["icon"],
                iconOverlays: config["iconOverlays"],
                label: config["label"],
                iconSize: config["iconSize"],
                location,
                rotation: config["rotation"]
            }
        ]
        
        if(wayHandling !== 1){
            const lineRenderConfig = <LineRenderingConfigJson>{
                color: config["color"],
                width: config["width"],
                dashArray: config["dashArray"]
            }
            if(Object.keys(lineRenderConfig).length > 0){
                config.mapRendering.push(lineRenderConfig)
            }
        }
        /*delete config["color"]
        delete config["width"]
        delete config["dashArray"]

        delete config["icon"]
        delete config["iconOverlays"]
        delete config["label"]
        delete config["iconSize"]
        delete config["rotation"]
        */
        
        
    }
    
}

const layerFiles = ScriptUtils.getLayerFiles();
for (const layerFile of layerFiles) {
    fixLayerConfig(layerFile.parsed)
    writeFileSync(layerFile.path, JSON.stringify(layerFile.parsed, null, "    "))
}

const themeFiles = ScriptUtils.getThemeFiles()
for (const themeFile of themeFiles) {
    for (const layerConfig of themeFile.parsed.layers ?? []) {
        if (typeof layerConfig === "string" || layerConfig["builtin"] !== undefined) {
            continue
        }
        // @ts-ignore
        fixLayerConfig(layerConfig)
    }
    
    if(themeFile.parsed["roamingRenderings"] !== undefined && themeFile.parsed["roamingRenderings"].length == 0){
        delete themeFile.parsed["roamingRenderings"]
    }
    
    writeFileSync(themeFile.path, JSON.stringify(themeFile.parsed, null, "  "))
}
//*/
