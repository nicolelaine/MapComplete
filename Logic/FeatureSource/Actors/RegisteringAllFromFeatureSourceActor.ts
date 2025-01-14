import FeatureSource from "../FeatureSource";
import {UIEventSource} from "../../UIEventSource";
import State from "../../../State";

export default class RegisteringAllFromFeatureSourceActor {
    public readonly features: UIEventSource<{ feature: any; freshness: Date }[]>;
    public readonly name;

    constructor(source: FeatureSource) {
        this.features = source.features;
        this.name = "RegisteringSource of " + source.name;
        this.features.addCallbackAndRunD(features => {
            for (const feature of features) {
                State.state.allElements.addOrGetElement(feature.feature)
            }
        })
    }

}