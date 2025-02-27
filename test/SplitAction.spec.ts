import T from "./TestHelper";
import {Changes} from "../Logic/Osm/Changes";
import SplitAction from "../Logic/Osm/Actions/SplitAction";
import {equal} from "assert";
import {Utils} from "../Utils";

export default class SplitActionSpec extends T {


    private static async split(): Promise<void> {

        Utils.injectJsonDownloadForTests(
            "https://www.openstreetmap.org/api/0.6/way/295132739/full",
            {
                "version": "0.6",
                "generator": "CGImap 0.8.5 (3138407 spike-07.openstreetmap.org)",
                "copyright": "OpenStreetMap and contributors",
                "attribution": "http://www.openstreetmap.org/copyright",
                "license": "http://opendatacommons.org/licenses/odbl/1-0/",
                "elements": [{
                    "type": "node",
                    "id": 170497153,
                    "lat": 51.1825167,
                    "lon": 3.2487885,
                    "timestamp": "2011-11-18T16:33:43Z",
                    "version": 5,
                    "changeset": 9865255,
                    "user": "TripleBee",
                    "uid": 497177
                }, {
                    "type": "node",
                    "id": 170497155,
                    "lat": 51.1817632,
                    "lon": 3.2472706,
                    "timestamp": "2011-11-18T16:33:43Z",
                    "version": 5,
                    "changeset": 9865255,
                    "user": "TripleBee",
                    "uid": 497177
                }, {
                    "type": "node",
                    "id": 170497157,
                    "lat": 51.1815203,
                    "lon": 3.2465569,
                    "timestamp": "2011-11-18T16:33:43Z",
                    "version": 5,
                    "changeset": 9865255,
                    "user": "TripleBee",
                    "uid": 497177
                }, {
                    "type": "node",
                    "id": 170497158,
                    "lat": 51.1812261,
                    "lon": 3.2454261,
                    "timestamp": "2011-11-18T16:33:43Z",
                    "version": 5,
                    "changeset": 9865255,
                    "user": "TripleBee",
                    "uid": 497177
                }, {
                    "type": "node",
                    "id": 170497160,
                    "lat": 51.1810957,
                    "lon": 3.2443030,
                    "timestamp": "2011-11-18T16:33:43Z",
                    "version": 5,
                    "changeset": 9865255,
                    "user": "TripleBee",
                    "uid": 497177
                }, {
                    "type": "node",
                    "id": 1507524573,
                    "lat": 51.1810778,
                    "lon": 3.2437148,
                    "timestamp": "2011-11-18T16:33:36Z",
                    "version": 1,
                    "changeset": 9865255,
                    "user": "TripleBee",
                    "uid": 497177
                }, {
                    "type": "node",
                    "id": 1507524582,
                    "lat": 51.1821130,
                    "lon": 3.2481284,
                    "timestamp": "2011-11-18T16:33:37Z",
                    "version": 1,
                    "changeset": 9865255,
                    "user": "TripleBee",
                    "uid": 497177
                }, {
                    "type": "node",
                    "id": 1507524610,
                    "lat": 51.1811645,
                    "lon": 3.2450828,
                    "timestamp": "2011-11-18T16:33:38Z",
                    "version": 1,
                    "changeset": 9865255,
                    "user": "TripleBee",
                    "uid": 497177
                }, {
                    "type": "node",
                    "id": 1575932830,
                    "lat": 51.1811153,
                    "lon": 3.2431503,
                    "timestamp": "2019-05-04T22:44:13Z",
                    "version": 2,
                    "changeset": 69891295,
                    "user": "Pieter Vander Vennet",
                    "uid": 3818858
                }, {
                    "type": "node",
                    "id": 3208166178,
                    "lat": 51.1810837,
                    "lon": 3.2439090,
                    "timestamp": "2014-11-27T20:23:10Z",
                    "version": 1,
                    "changeset": 27076816,
                    "user": "JanFi",
                    "uid": 672253
                }, {
                    "type": "node",
                    "id": 3208166179,
                    "lat": 51.1812062,
                    "lon": 3.2453151,
                    "timestamp": "2014-11-27T20:23:10Z",
                    "version": 1,
                    "changeset": 27076816,
                    "user": "JanFi",
                    "uid": 672253
                }, {
                    "type": "node",
                    "id": 4524321710,
                    "lat": 51.1820656,
                    "lon": 3.2480253,
                    "timestamp": "2017-12-09T18:56:37Z",
                    "version": 2,
                    "changeset": 54493928,
                    "user": "CacherB",
                    "uid": 1999108
                }, {
                    "type": "node",
                    "id": 5273988967,
                    "lat": 51.1826590,
                    "lon": 3.2490040,
                    "timestamp": "2017-12-09T18:40:21Z",
                    "version": 1,
                    "changeset": 54493533,
                    "user": "CacherB",
                    "uid": 1999108
                }, {
                    "type": "node",
                    "id": 6448669326,
                    "lat": 51.1811346,
                    "lon": 3.2428910,
                    "timestamp": "2019-05-04T22:44:12Z",
                    "version": 1,
                    "changeset": 69891295,
                    "user": "Pieter Vander Vennet",
                    "uid": 3818858,
                    "tags": {"barrier": "bollard"}
                }, {
                    "type": "way",
                    "id": 295132739,
                    "timestamp": "2021-07-29T21:14:53Z",
                    "version": 17,
                    "changeset": 108847202,
                    "user": "kaart_fietser",
                    "uid": 11022240,
                    "nodes": [5273988967, 170497153, 1507524582, 4524321710, 170497155, 170497157, 170497158, 3208166179, 1507524610, 170497160, 3208166178, 1507524573, 1575932830, 6448669326],
                    "tags": {
                        "highway": "cycleway",
                        "name": "Abdijenroute",
                        "railway": "abandoned",
                        "surface": "compacted"
                    }
                }]
            })
        Utils.injectJsonDownloadForTests(
            "https://www.openstreetmap.org/api/0.6/way/295132739/relations",
            // Mimick that there are no relations relation is missing
            {
                "version": "0.6",
                "generator": "CGImap 0.8.5 (2935793 spike-07.openstreetmap.org)",
                "copyright": "OpenStreetMap and contributors",
                "attribution": "http://www.openstreetmap.org/copyright",
                "license": "http://opendatacommons.org/licenses/odbl/1-0/",
                "elements": []
            }
        )

        // Lets split road https://www.openstreetmap.org/way/295132739
        const id = "way/295132739"
        const splitPoint: [number, number] = [3.246733546257019, 51.181710380278176]
        const splitter = new SplitAction(id, [splitPoint], {
            theme: "test"
        })
        const changeDescription = await splitter.CreateChangeDescriptions(new Changes())

        equal(changeDescription[0].type, "node")
        equal(changeDescription[0].id, -1)
        equal(changeDescription[0].changes["lat"], 51.181710380278176)
        equal(changeDescription[0].changes["lon"], 3.246733546257019)

        equal(changeDescription[1].type, "way")
        equal(changeDescription[1].id, -2)
        equal(changeDescription[1].changes["coordinates"].length, 6)
        equal(changeDescription[1].changes["coordinates"][5][0], splitPoint[0])
        equal(changeDescription[1].changes["coordinates"][5][1], splitPoint[1])

        equal(changeDescription[2].type, "way")
        equal(changeDescription[2].id, 295132739)
        equal(changeDescription[2].changes["coordinates"].length, 10)
        equal(changeDescription[2].changes["coordinates"][0][0], splitPoint[0])
        equal(changeDescription[2].changes["coordinates"][0][1], splitPoint[1])
    }


    private static async SplitHoutkaai(): Promise<void> {

        Utils.injectJsonDownloadForTests(
            "https://www.openstreetmap.org/api/0.6/way/61435323/full",
            {
                "version": "0.6",
                "generator": "CGImap 0.8.5 (53092 spike-08.openstreetmap.org)",
                "copyright": "OpenStreetMap and contributors",
                "attribution": "http://www.openstreetmap.org/copyright",
                "license": "http://opendatacommons.org/licenses/odbl/1-0/",
                "elements": [{
                    "type": "node",
                    "id": 766990983,
                    "lat": 51.2170219,
                    "lon": 3.2022337,
                    "timestamp": "2021-04-26T15:48:22Z",
                    "version": 6,
                    "changeset": 103647857,
                    "user": "M!dgard",
                    "uid": 763799
                }, {
                    "type": "node",
                    "id": 766990985,
                    "lat": 51.2169574,
                    "lon": 3.2017548,
                    "timestamp": "2016-07-05T22:41:12Z",
                    "version": 6,
                    "changeset": 40511250,
                    "user": "M!dgard",
                    "uid": 763799
                }, {
                    "type": "node",
                    "id": 8669018379,
                    "lat": 51.2169592,
                    "lon": 3.2017683,
                    "timestamp": "2021-04-26T15:48:22Z",
                    "version": 1,
                    "changeset": 103647857,
                    "user": "M!dgard",
                    "uid": 763799
                }, {
                    "type": "way",
                    "id": 61435323,
                    "timestamp": "2021-08-21T12:24:13Z",
                    "version": 7,
                    "changeset": 110026637,
                    "user": "Thibault Rommel",
                    "uid": 5846458,
                    "nodes": [766990983, 8669018379, 766990985],
                    "tags": {
                        "bicycle": "yes",
                        "bridge": "yes",
                        "cycleway": "shared_lane",
                        "highway": "unclassified",
                        "layer": "1",
                        "maxspeed": "50",
                        "name": "Houtkaai",
                        "surface": "asphalt",
                        "zone:traffic": "BE-VLG:urban"
                    }
                }]
            }
        )
        Utils.injectJsonDownloadForTests(
            "https://www.openstreetmap.org/api/0.6/way/61435323/relations",
            {
                "version": "0.6",
                "generator": "CGImap 0.8.5 (3622541 spike-06.openstreetmap.org)",
                "copyright": "OpenStreetMap and contributors",
                "attribution": "http://www.openstreetmap.org/copyright",
                "license": "http://opendatacommons.org/licenses/odbl/1-0/",
                "elements": [{
                    "type": "relation",
                    "id": 1723870,
                    "timestamp": "2021-09-18T06:29:31Z",
                    "version": 183,
                    "changeset": 111362343,
                    "user": "emvee",
                    "uid": 5211,
                    "members": [{"type": "way", "ref": 261428947, "role": ""}, {
                        "type": "way",
                        "ref": 162774622,
                        "role": ""
                    }, {"type": "way", "ref": 317060244, "role": ""}, {
                        "type": "way",
                        "ref": 81155378,
                        "role": ""
                    }, {"type": "way", "ref": 99749583, "role": ""}, {
                        "type": "way",
                        "ref": 131332113,
                        "role": ""
                    }, {"type": "way", "ref": 949518831, "role": ""}, {
                        "type": "way",
                        "ref": 99749584,
                        "role": ""
                    }, {"type": "way", "ref": 129133519, "role": ""}, {
                        "type": "way",
                        "ref": 73241312,
                        "role": ""
                    }, {"type": "way", "ref": 785514256, "role": ""}, {
                        "type": "way",
                        "ref": 58509643,
                        "role": ""
                    }, {"type": "way", "ref": 73241332, "role": ""}, {
                        "type": "way",
                        "ref": 58509653,
                        "role": ""
                    }, {"type": "way", "ref": 100044097, "role": ""}, {
                        "type": "way",
                        "ref": 946999067,
                        "role": ""
                    }, {"type": "way", "ref": 73241327, "role": ""}, {
                        "type": "way",
                        "ref": 58509617,
                        "role": ""
                    }, {"type": "way", "ref": 58509627, "role": ""}, {
                        "type": "way",
                        "ref": 69990655,
                        "role": ""
                    }, {"type": "way", "ref": 73241311, "role": ""}, {
                        "type": "way",
                        "ref": 123142336,
                        "role": ""
                    }, {"type": "way", "ref": 249671053, "role": ""}, {
                        "type": "way",
                        "ref": 73241324,
                        "role": ""
                    }, {"type": "way", "ref": 66706953, "role": ""}, {
                        "type": "way",
                        "ref": 112679357,
                        "role": ""
                    }, {"type": "way", "ref": 112679358, "role": ""}, {
                        "type": "way",
                        "ref": 53105113,
                        "role": ""
                    }, {"type": "way", "ref": 66706952, "role": ""}, {
                        "type": "way",
                        "ref": 64083661,
                        "role": ""
                    }, {"type": "way", "ref": 53105162, "role": ""}, {
                        "type": "way",
                        "ref": 249671070,
                        "role": ""
                    }, {"type": "way", "ref": 249671064, "role": ""}, {
                        "type": "way",
                        "ref": 101498587,
                        "role": ""
                    }, {"type": "way", "ref": 69001236, "role": ""}, {
                        "type": "way",
                        "ref": 101498585,
                        "role": ""
                    }, {"type": "way", "ref": 70909444, "role": ""}, {
                        "type": "way",
                        "ref": 73241314,
                        "role": ""
                    }, {"type": "way", "ref": 69001235, "role": ""}, {
                        "type": "way",
                        "ref": 113150200,
                        "role": ""
                    }, {"type": "way", "ref": 137305843, "role": ""}, {
                        "type": "way",
                        "ref": 936827687,
                        "role": ""
                    }, {"type": "way", "ref": 936827688, "role": ""}, {
                        "type": "way",
                        "ref": 112952373,
                        "role": ""
                    }, {"type": "way", "ref": 930798379, "role": ""}, {
                        "type": "way",
                        "ref": 930798378,
                        "role": ""
                    }, {"type": "way", "ref": 112951439, "role": ""}, {
                        "type": "way",
                        "ref": 445541591,
                        "role": ""
                    }, {"type": "way", "ref": 103843896, "role": ""}, {
                        "type": "way",
                        "ref": 23734118,
                        "role": ""
                    }, {"type": "way", "ref": 103840557, "role": ""}, {
                        "type": "way",
                        "ref": 433852210,
                        "role": ""
                    }, {"type": "way", "ref": 313604670, "role": ""}, {
                        "type": "way",
                        "ref": 103839402,
                        "role": ""
                    }, {"type": "way", "ref": 23736061, "role": ""}, {
                        "type": "way",
                        "ref": 73241328,
                        "role": ""
                    }, {"type": "way", "ref": 295392689, "role": ""}, {
                        "type": "way",
                        "ref": 297168171,
                        "role": ""
                    }, {"type": "way", "ref": 297168170, "role": ""}, {
                        "type": "way",
                        "ref": 433852205,
                        "role": ""
                    }, {"type": "way", "ref": 295392695, "role": ""}, {
                        "type": "way",
                        "ref": 663268954,
                        "role": ""
                    }, {"type": "way", "ref": 663267598, "role": ""}, {
                        "type": "way",
                        "ref": 292478843,
                        "role": ""
                    }, {"type": "way", "ref": 981853853, "role": ""}, {
                        "type": "way",
                        "ref": 663270140,
                        "role": ""
                    }, {"type": "way", "ref": 981853854, "role": ""}, {
                        "type": "way",
                        "ref": 295392703,
                        "role": ""
                    }, {"type": "way", "ref": 663304916, "role": ""}, {
                        "type": "way",
                        "ref": 297169116,
                        "role": ""
                    }, {"type": "way", "ref": 295400810, "role": ""}, {
                        "type": "way",
                        "ref": 981853855,
                        "role": ""
                    }, {"type": "way", "ref": 663304806, "role": ""}, {
                        "type": "way",
                        "ref": 516452870,
                        "role": ""
                    }, {"type": "way", "ref": 66459239, "role": ""}, {
                        "type": "way",
                        "ref": 791430504,
                        "role": ""
                    }, {"type": "way", "ref": 178926037, "role": ""}, {
                        "type": "way",
                        "ref": 864799431,
                        "role": ""
                    }, {"type": "way", "ref": 178926107, "role": ""}, {
                        "type": "way",
                        "ref": 663320459,
                        "role": ""
                    }, {"type": "way", "ref": 62033993, "role": ""}, {
                        "type": "way",
                        "ref": 62283023,
                        "role": ""
                    }, {"type": "way", "ref": 62283057, "role": ""}, {
                        "type": "way",
                        "ref": 62283032,
                        "role": ""
                    }, {"type": "way", "ref": 490551085, "role": ""}, {
                        "type": "way",
                        "ref": 435318979,
                        "role": ""
                    }, {"type": "way", "ref": 371750677, "role": ""}, {
                        "type": "way",
                        "ref": 371750670,
                        "role": ""
                    }, {"type": "way", "ref": 371750673, "role": ""}, {
                        "type": "way",
                        "ref": 371750675,
                        "role": ""
                    }, {"type": "way", "ref": 459885691, "role": ""}, {
                        "type": "way",
                        "ref": 371750669,
                        "role": ""
                    }, {"type": "way", "ref": 371750668, "role": ""}, {
                        "type": "way",
                        "ref": 371750667,
                        "role": ""
                    }, {"type": "way", "ref": 428848639, "role": ""}, {
                        "type": "way",
                        "ref": 371750666,
                        "role": ""
                    }, {"type": "way", "ref": 371750665, "role": ""}, {
                        "type": "way",
                        "ref": 825496473,
                        "role": ""
                    }, {"type": "way", "ref": 371750664, "role": ""}, {
                        "type": "way",
                        "ref": 371750662,
                        "role": ""
                    }, {"type": "way", "ref": 371750663, "role": ""}, {
                        "type": "way",
                        "ref": 371750660,
                        "role": ""
                    }, {"type": "way", "ref": 371750658, "role": ""}, {
                        "type": "way",
                        "ref": 40507374,
                        "role": ""
                    }, {"type": "way", "ref": 165878356, "role": ""}, {
                        "type": "way",
                        "ref": 165878355,
                        "role": ""
                    }, {"type": "way", "ref": 8494219, "role": ""}, {
                        "type": "way",
                        "ref": 5023947,
                        "role": ""
                    }, {"type": "way", "ref": 5023939, "role": ""}, {
                        "type": "way",
                        "ref": 26718843,
                        "role": ""
                    }, {"type": "way", "ref": 79437029, "role": ""}, {
                        "type": "way",
                        "ref": 87522151,
                        "role": ""
                    }, {"type": "way", "ref": 26718848, "role": ""}, {
                        "type": "way",
                        "ref": 233169831,
                        "role": ""
                    }, {"type": "way", "ref": 85934460, "role": ""}, {
                        "type": "way",
                        "ref": 145892210,
                        "role": ""
                    }, {"type": "way", "ref": 79434764, "role": ""}, {
                        "type": "way",
                        "ref": 127079185,
                        "role": ""
                    }, {"type": "way", "ref": 67794715, "role": ""}, {
                        "type": "way",
                        "ref": 85934250,
                        "role": ""
                    }, {"type": "way", "ref": 421566302, "role": ""}, {
                        "type": "way",
                        "ref": 123445537,
                        "role": ""
                    }, {"type": "way", "ref": 308077683, "role": ""}, {
                        "type": "way",
                        "ref": 308077684,
                        "role": ""
                    }, {"type": "way", "ref": 972955357, "role": ""}, {
                        "type": "way",
                        "ref": 308077682,
                        "role": ""
                    }, {"type": "way", "ref": 659880052, "role": ""}, {
                        "type": "way",
                        "ref": 308077681,
                        "role": ""
                    }, {"type": "way", "ref": 66364130, "role": ""}, {
                        "type": "way",
                        "ref": 51086959,
                        "role": ""
                    }, {"type": "way", "ref": 51086961, "role": ""}, {
                        "type": "way",
                        "ref": 102154586,
                        "role": ""
                    }, {"type": "way", "ref": 102154589, "role": ""}, {
                        "type": "way",
                        "ref": 703008376,
                        "role": ""
                    }, {"type": "way", "ref": 703008375, "role": ""}, {
                        "type": "way",
                        "ref": 54435150,
                        "role": ""
                    }, {"type": "way", "ref": 115913100, "role": ""}, {
                        "type": "way",
                        "ref": 79433785,
                        "role": ""
                    }, {"type": "way", "ref": 51204355, "role": ""}, {
                        "type": "way",
                        "ref": 422395066,
                        "role": ""
                    }, {"type": "way", "ref": 116628138, "role": ""}, {
                        "type": "way",
                        "ref": 690189323,
                        "role": ""
                    }, {"type": "way", "ref": 132068368, "role": ""}, {
                        "type": "way",
                        "ref": 690220771,
                        "role": ""
                    }, {"type": "way", "ref": 690220772, "role": ""}, {
                        "type": "way",
                        "ref": 690226744,
                        "role": ""
                    }, {"type": "way", "ref": 690226745, "role": ""}, {
                        "type": "way",
                        "ref": 60253953,
                        "role": ""
                    }, {"type": "way", "ref": 690195774, "role": ""}, {
                        "type": "way",
                        "ref": 688104939,
                        "role": ""
                    }, {"type": "way", "ref": 422395064, "role": "forward"}, {
                        "type": "way",
                        "ref": 422309497,
                        "role": "forward"
                    }, {"type": "way", "ref": 25677204, "role": "forward"}, {
                        "type": "way",
                        "ref": 51570941,
                        "role": ""
                    }, {"type": "way", "ref": 807329786, "role": ""}, {
                        "type": "way",
                        "ref": 165500495,
                        "role": ""
                    }, {"type": "way", "ref": 689494106, "role": ""}, {
                        "type": "way",
                        "ref": 131476435,
                        "role": ""
                    }, {"type": "way", "ref": 689493508, "role": ""}, {
                        "type": "way",
                        "ref": 12126873,
                        "role": ""
                    }, {"type": "way", "ref": 32789519, "role": ""}, {
                        "type": "way",
                        "ref": 27288122,
                        "role": ""
                    }, {"type": "way", "ref": 116717060, "role": ""}, {
                        "type": "way",
                        "ref": 176380249,
                        "role": ""
                    }, {"type": "way", "ref": 116717052, "role": ""}, {
                        "type": "way",
                        "ref": 176380250,
                        "role": ""
                    }, {"type": "way", "ref": 421998791, "role": ""}, {
                        "type": "way",
                        "ref": 34562745,
                        "role": ""
                    }, {"type": "way", "ref": 130473931, "role": ""}, {
                        "type": "way",
                        "ref": 136487196,
                        "role": ""
                    }, {"type": "way", "ref": 23792223, "role": ""}, {
                        "type": "way",
                        "ref": 23775021,
                        "role": ""
                    }, {"type": "way", "ref": 560506339, "role": ""}, {
                        "type": "way",
                        "ref": 337945886,
                        "role": ""
                    }, {"type": "way", "ref": 61435332, "role": ""}, {
                        "type": "way",
                        "ref": 61435323,
                        "role": ""
                    }, {"type": "way", "ref": 509668834, "role": ""}, {
                        "type": "way",
                        "ref": 130473917,
                        "role": ""
                    }, {"type": "way", "ref": 369929894, "role": ""}, {
                        "type": "way",
                        "ref": 805247467,
                        "role": "forward"
                    }, {"type": "way", "ref": 840210016, "role": "forward"}, {
                        "type": "way",
                        "ref": 539026983,
                        "role": "forward"
                    }, {"type": "way", "ref": 539037793, "role": "forward"}, {
                        "type": "way",
                        "ref": 244428576,
                        "role": "forward"
                    }, {"type": "way", "ref": 243333119, "role": "forward"}, {
                        "type": "way",
                        "ref": 243333108,
                        "role": "forward"
                    }, {"type": "way", "ref": 243333106, "role": "forward"}, {
                        "type": "way",
                        "ref": 243333110,
                        "role": "forward"
                    }, {"type": "way", "ref": 230511503, "role": "forward"}, {
                        "type": "way",
                        "ref": 510520445,
                        "role": "forward"
                    }, {"type": "way", "ref": 688103605, "role": "forward"}, {
                        "type": "way",
                        "ref": 668577053,
                        "role": "forward"
                    }, {"type": "way", "ref": 4332489, "role": "forward"}, {
                        "type": "way",
                        "ref": 668577051,
                        "role": "forward"
                    }, {"type": "way", "ref": 185476761, "role": "forward"}, {
                        "type": "way",
                        "ref": 100774483,
                        "role": "forward"
                    }, {"type": "way", "ref": 668672434, "role": "backward"}, {
                        "type": "way",
                        "ref": 488558133,
                        "role": "backward"
                    }, {"type": "way", "ref": 13943237, "role": "forward"}, {
                        "type": "way",
                        "ref": 840241791,
                        "role": "forward"
                    }, {"type": "way", "ref": 805247468, "role": "forward"}, {
                        "type": "way",
                        "ref": 539040946,
                        "role": "forward"
                    }, {"type": "way", "ref": 539026103, "role": "forward"}, {
                        "type": "way",
                        "ref": 539037781,
                        "role": "forward"
                    }, {"type": "way", "ref": 28942112, "role": "forward"}, {
                        "type": "way",
                        "ref": 699841535,
                        "role": "forward"
                    }, {"type": "way", "ref": 635374201, "role": "forward"}, {
                        "type": "way",
                        "ref": 28942118,
                        "role": "forward"
                    }, {"type": "way", "ref": 185476755, "role": "forward"}, {
                        "type": "way",
                        "ref": 78794903,
                        "role": "forward"
                    }, {"type": "way", "ref": 688103599, "role": "forward"}, {
                        "type": "way",
                        "ref": 688103600,
                        "role": "backward"
                    }, {"type": "way", "ref": 32699077, "role": "backward"}, {
                        "type": "way",
                        "ref": 249092420,
                        "role": "backward"
                    }, {"type": "way", "ref": 540048295, "role": ""}, {
                        "type": "way",
                        "ref": 13942938,
                        "role": ""
                    }, {"type": "way", "ref": 827705395, "role": ""}, {
                        "type": "way",
                        "ref": 72492953,
                        "role": ""
                    }, {"type": "way", "ref": 61435342, "role": ""}, {
                        "type": "way",
                        "ref": 95106180,
                        "role": ""
                    }, {"type": "way", "ref": 182691326, "role": ""}, {
                        "type": "way",
                        "ref": 180915274,
                        "role": ""
                    }, {"type": "way", "ref": 61435340, "role": ""}, {
                        "type": "way",
                        "ref": 95506626,
                        "role": ""
                    }, {"type": "way", "ref": 183330864, "role": ""}, {
                        "type": "way",
                        "ref": 318631002,
                        "role": ""
                    }, {"type": "way", "ref": 4332470, "role": ""}, {
                        "type": "way",
                        "ref": 318631014,
                        "role": ""
                    }, {"type": "way", "ref": 337969633, "role": ""}, {
                        "type": "way",
                        "ref": 668566903,
                        "role": ""
                    }, {"type": "way", "ref": 668566904, "role": ""}, {
                        "type": "way",
                        "ref": 248228679,
                        "role": ""
                    }, {"type": "way", "ref": 419296358, "role": ""}, {
                        "type": "way",
                        "ref": 601005356,
                        "role": ""
                    }, {"type": "way", "ref": 497802656, "role": ""}, {
                        "type": "way",
                        "ref": 948484806,
                        "role": ""
                    }, {"type": "way", "ref": 756223825, "role": ""}, {
                        "type": "way",
                        "ref": 23206884,
                        "role": ""
                    }, {"type": "way", "ref": 157436856, "role": ""}, {
                        "type": "way",
                        "ref": 829398288,
                        "role": ""
                    }, {"type": "way", "ref": 829398289, "role": ""}, {
                        "type": "way",
                        "ref": 674490354,
                        "role": ""
                    }, {"type": "way", "ref": 131704173, "role": ""}, {
                        "type": "way",
                        "ref": 120976014,
                        "role": ""
                    }, {"type": "way", "ref": 38864144, "role": ""}, {
                        "type": "way",
                        "ref": 38864143,
                        "role": ""
                    }, {"type": "way", "ref": 32147475, "role": ""}, {
                        "type": "way",
                        "ref": 962256846,
                        "role": ""
                    }, {"type": "way", "ref": 32147479, "role": ""}, {
                        "type": "way",
                        "ref": 32147481,
                        "role": ""
                    }, {"type": "way", "ref": 49486734, "role": ""}, {
                        "type": "way",
                        "ref": 829394351,
                        "role": ""
                    }, {"type": "way", "ref": 829394349, "role": ""}, {
                        "type": "way",
                        "ref": 235193261,
                        "role": ""
                    }, {"type": "way", "ref": 130495866, "role": ""}, {
                        "type": "way",
                        "ref": 978366962,
                        "role": ""
                    }, {"type": "way", "ref": 39588752, "role": ""}, {
                        "type": "way",
                        "ref": 436528651,
                        "role": ""
                    }, {"type": "way", "ref": 27370335, "role": ""}, {
                        "type": "way",
                        "ref": 157558803,
                        "role": ""
                    }, {"type": "way", "ref": 39590466, "role": ""}, {
                        "type": "way",
                        "ref": 157558804,
                        "role": ""
                    }, {"type": "way", "ref": 27370165, "role": ""}, {"type": "way", "ref": 970841665, "role": ""}],
                    "tags": {
                        "name": "Euroroute R1 - part Belgium",
                        "name:de": "Europaradweg R1 - Abschnitt Belgien",
                        "name:nl": "Euroroute R1 - deel België",
                        "network": "icn",
                        "ref": "R1",
                        "route": "bicycle",
                        "type": "route"
                    }
                }, {
                    "type": "relation",
                    "id": 1757007,
                    "timestamp": "2020-10-13T01:31:44Z",
                    "version": 10,
                    "changeset": 92380204,
                    "user": "Diabolix",
                    "uid": 2123963,
                    "members": [{"type": "way", "ref": 509668834, "role": ""}, {
                        "type": "way",
                        "ref": 61435323,
                        "role": ""
                    }, {"type": "way", "ref": 61435332, "role": ""}, {
                        "type": "way",
                        "ref": 337945886,
                        "role": ""
                    }, {"type": "way", "ref": 560506339, "role": ""}, {
                        "type": "way",
                        "ref": 23775021,
                        "role": ""
                    }, {"type": "way", "ref": 23792223, "role": ""}],
                    "tags": {
                        "network": "rcn",
                        "network:type": "node_network",
                        "ref": "4-36",
                        "route": "bicycle",
                        "type": "route"
                    }
                }, {
                    "type": "relation",
                    "id": 5150189,
                    "timestamp": "2021-09-09T20:15:58Z",
                    "version": 44,
                    "changeset": 110993632,
                    "user": "JosV",
                    "uid": 170722,
                    "members": [{"type": "way", "ref": 13943237, "role": ""}, {
                        "type": "way",
                        "ref": 488558133,
                        "role": ""
                    }, {"type": "way", "ref": 369929894, "role": ""}, {
                        "type": "way",
                        "ref": 130473917,
                        "role": ""
                    }, {"type": "way", "ref": 509668834, "role": ""}, {
                        "type": "way",
                        "ref": 61435323,
                        "role": ""
                    }, {"type": "way", "ref": 61435332, "role": ""}, {
                        "type": "way",
                        "ref": 337945886,
                        "role": ""
                    }, {"type": "way", "ref": 560506339, "role": ""}, {
                        "type": "way",
                        "ref": 23775021,
                        "role": ""
                    }, {"type": "way", "ref": 23792223, "role": ""}, {
                        "type": "way",
                        "ref": 136487196,
                        "role": ""
                    }, {"type": "way", "ref": 130473931, "role": ""}, {
                        "type": "way",
                        "ref": 34562745,
                        "role": ""
                    }, {"type": "way", "ref": 421998791, "role": ""}, {
                        "type": "way",
                        "ref": 126996864,
                        "role": ""
                    }, {"type": "way", "ref": 126996861, "role": ""}, {
                        "type": "way",
                        "ref": 170989337,
                        "role": ""
                    }, {"type": "way", "ref": 72482534, "role": ""}, {
                        "type": "way",
                        "ref": 58913500,
                        "role": ""
                    }, {"type": "way", "ref": 72482539, "role": ""}, {
                        "type": "way",
                        "ref": 246969243,
                        "role": ""
                    }, {"type": "way", "ref": 153150902, "role": ""}, {
                        "type": "way",
                        "ref": 116748588,
                        "role": ""
                    }, {"type": "way", "ref": 72482544, "role": ""}, {
                        "type": "way",
                        "ref": 72482542,
                        "role": ""
                    }, {"type": "way", "ref": 337013552, "role": ""}, {
                        "type": "way",
                        "ref": 132790401,
                        "role": ""
                    }, {"type": "way", "ref": 105166767, "role": ""}, {
                        "type": "way",
                        "ref": 720356345,
                        "role": ""
                    }, {"type": "way", "ref": 197829999, "role": ""}, {
                        "type": "way",
                        "ref": 105166552,
                        "role": ""
                    }, {"type": "way", "ref": 61979075, "role": ""}, {
                        "type": "way",
                        "ref": 197830184,
                        "role": ""
                    }, {"type": "way", "ref": 61979070, "role": ""}, {
                        "type": "way",
                        "ref": 948826013,
                        "role": ""
                    }, {"type": "way", "ref": 197830182, "role": ""}, {
                        "type": "way",
                        "ref": 672535497,
                        "role": ""
                    }, {"type": "way", "ref": 672535498, "role": ""}, {
                        "type": "way",
                        "ref": 948826015,
                        "role": ""
                    }, {"type": "way", "ref": 11378674, "role": ""}, {
                        "type": "way",
                        "ref": 672535496,
                        "role": ""
                    }, {"type": "way", "ref": 70023921, "role": ""}, {
                        "type": "way",
                        "ref": 948826017,
                        "role": ""
                    }, {"type": "way", "ref": 197830260, "role": ""}, {
                        "type": "way",
                        "ref": 152210843,
                        "role": ""
                    }, {"type": "way", "ref": 33748055, "role": ""}, {
                        "type": "way",
                        "ref": 344701437,
                        "role": ""
                    }, {"type": "way", "ref": 422150672, "role": ""}, {
                        "type": "way",
                        "ref": 156228338,
                        "role": ""
                    }, {"type": "way", "ref": 422150674, "role": ""}, {
                        "type": "way",
                        "ref": 223674432,
                        "role": ""
                    }, {"type": "way", "ref": 223674437, "role": ""}, {
                        "type": "way",
                        "ref": 156228327,
                        "role": ""
                    }, {"type": "way", "ref": 223674372, "role": ""}, {
                        "type": "way",
                        "ref": 592937889,
                        "role": ""
                    }, {"type": "way", "ref": 592937890, "role": ""}, {
                        "type": "way",
                        "ref": 422099666,
                        "role": ""
                    }, {"type": "way", "ref": 422100304, "role": ""}, {
                        "type": "way",
                        "ref": 948826022,
                        "role": ""
                    }, {"type": "way", "ref": 15092930, "role": ""}, {
                        "type": "way",
                        "ref": 948826024,
                        "role": ""
                    }, {"type": "way", "ref": 105182226, "role": ""}, {
                        "type": "way",
                        "ref": 133606215,
                        "role": ""
                    }, {"type": "way", "ref": 533395656, "role": ""}, {
                        "type": "way",
                        "ref": 187115987,
                        "role": ""
                    }, {"type": "way", "ref": 105182230, "role": ""}, {
                        "type": "way",
                        "ref": 105182232,
                        "role": ""
                    }, {"type": "way", "ref": 196011634, "role": ""}, {
                        "type": "way",
                        "ref": 153273480,
                        "role": ""
                    }, {"type": "way", "ref": 153273481, "role": ""}, {
                        "type": "way",
                        "ref": 881767783,
                        "role": ""
                    }, {"type": "way", "ref": 153273479, "role": ""}, {
                        "type": "way",
                        "ref": 13462242,
                        "role": ""
                    }, {"type": "way", "ref": 498093425, "role": ""}, {
                        "type": "way",
                        "ref": 70009137,
                        "role": ""
                    }, {"type": "way", "ref": 12086805, "role": ""}, {
                        "type": "way",
                        "ref": 52523332,
                        "role": ""
                    }, {"type": "way", "ref": 70009138, "role": ""}, {
                        "type": "way",
                        "ref": 592937884,
                        "role": ""
                    }, {"type": "way", "ref": 15071942, "role": ""}, {
                        "type": "way",
                        "ref": 180798233,
                        "role": ""
                    }, {"type": "way", "ref": 70010670, "role": ""}, {
                        "type": "way",
                        "ref": 15802818,
                        "role": ""
                    }, {"type": "way", "ref": 15802809, "role": ""}, {
                        "type": "way",
                        "ref": 70011254,
                        "role": ""
                    }, {"type": "way", "ref": 671368756, "role": ""}, {
                        "type": "way",
                        "ref": 840241791,
                        "role": ""
                    }, {"type": "way", "ref": 369929367, "role": ""}, {
                        "type": "way",
                        "ref": 539038988,
                        "role": ""
                    }, {"type": "way", "ref": 80130513, "role": ""}, {
                        "type": "way",
                        "ref": 540214122,
                        "role": ""
                    }, {"type": "way", "ref": 765795083, "role": ""}, {
                        "type": "way",
                        "ref": 13943005,
                        "role": ""
                    }, {"type": "way", "ref": 72492950, "role": ""}, {
                        "type": "way",
                        "ref": 183330864,
                        "role": ""
                    }, {"type": "way", "ref": 318631002, "role": ""}, {
                        "type": "way",
                        "ref": 4332470,
                        "role": ""
                    }, {"type": "way", "ref": 318631014, "role": ""}, {
                        "type": "way",
                        "ref": 337969633,
                        "role": ""
                    }, {"type": "way", "ref": 668566903, "role": ""}, {
                        "type": "way",
                        "ref": 668566904,
                        "role": ""
                    }, {"type": "way", "ref": 248228679, "role": ""}, {
                        "type": "way",
                        "ref": 419296358,
                        "role": ""
                    }, {"type": "way", "ref": 601005356, "role": ""}, {
                        "type": "way",
                        "ref": 497802656,
                        "role": ""
                    }, {"type": "way", "ref": 948484806, "role": ""}, {
                        "type": "way",
                        "ref": 100323579,
                        "role": ""
                    }, {"type": "way", "ref": 100708215, "role": ""}, {
                        "type": "way",
                        "ref": 124559834,
                        "role": ""
                    }, {"type": "way", "ref": 124559835, "role": ""}, {
                        "type": "way",
                        "ref": 239484694,
                        "role": ""
                    }, {"type": "way", "ref": 972646812, "role": ""}, {
                        "type": "way",
                        "ref": 124559832,
                        "role": ""
                    }, {"type": "way", "ref": 361686157, "role": ""}, {
                        "type": "way",
                        "ref": 361686155,
                        "role": ""
                    }, {"type": "way", "ref": 239484693, "role": ""}, {
                        "type": "way",
                        "ref": 19861731,
                        "role": ""
                    }, {"type": "way", "ref": 967906429, "role": ""}, {
                        "type": "way",
                        "ref": 126402539,
                        "role": ""
                    }, {"type": "way", "ref": 94427058, "role": ""}, {
                        "type": "way",
                        "ref": 126402541,
                        "role": ""
                    }, {"type": "way", "ref": 313693839, "role": ""}, {
                        "type": "way",
                        "ref": 313693838,
                        "role": ""
                    }, {"type": "way", "ref": 970740536, "role": ""}, {
                        "type": "way",
                        "ref": 361719175,
                        "role": ""
                    }, {"type": "way", "ref": 663186012, "role": ""}, {
                        "type": "way",
                        "ref": 744625794,
                        "role": ""
                    }, {"type": "way", "ref": 94569877, "role": ""}, {
                        "type": "way",
                        "ref": 188973964,
                        "role": ""
                    }, {"type": "way", "ref": 948484822, "role": ""}, {
                        "type": "way",
                        "ref": 28857260,
                        "role": ""
                    }, {"type": "way", "ref": 948484821, "role": ""}, {
                        "type": "way",
                        "ref": 219185860,
                        "role": ""
                    }, {"type": "way", "ref": 948484818, "role": ""}, {
                        "type": "way",
                        "ref": 219185861,
                        "role": ""
                    }, {"type": "way", "ref": 229885580, "role": ""}, {
                        "type": "way",
                        "ref": 28857247,
                        "role": ""
                    }, {"type": "way", "ref": 128813937, "role": ""}, {
                        "type": "way",
                        "ref": 32148201,
                        "role": ""
                    }, {"type": "way", "ref": 829398290, "role": ""}, {
                        "type": "way",
                        "ref": 829398288,
                        "role": ""
                    }, {"type": "way", "ref": 157436856, "role": ""}, {
                        "type": "way",
                        "ref": 23206887,
                        "role": ""
                    }, {"type": "way", "ref": 657081380, "role": ""}, {
                        "type": "way",
                        "ref": 948484817,
                        "role": ""
                    }, {"type": "way", "ref": 657081379, "role": ""}, {
                        "type": "way",
                        "ref": 657083379,
                        "role": ""
                    }, {"type": "way", "ref": 657083378, "role": ""}, {
                        "type": "way",
                        "ref": 72492956,
                        "role": ""
                    }, {"type": "way", "ref": 183763716, "role": ""}, {
                        "type": "way",
                        "ref": 497802654,
                        "role": ""
                    }, {"type": "way", "ref": 497802655, "role": ""}, {
                        "type": "way",
                        "ref": 348402994,
                        "role": ""
                    }, {"type": "way", "ref": 497802653, "role": ""}, {
                        "type": "way",
                        "ref": 948484813,
                        "role": ""
                    }, {"type": "way", "ref": 272353449, "role": "forward"}, {
                        "type": "way",
                        "ref": 497802652,
                        "role": "forward"
                    }, {"type": "way", "ref": 948484811, "role": ""}, {
                        "type": "way",
                        "ref": 948484810,
                        "role": ""
                    }, {"type": "way", "ref": 136564089, "role": ""}, {
                        "type": "way",
                        "ref": 970740538,
                        "role": ""
                    }, {"type": "way", "ref": 970740539, "role": ""}, {
                        "type": "way",
                        "ref": 433455263,
                        "role": ""
                    }, {"type": "way", "ref": 23206893, "role": ""}, {
                        "type": "way",
                        "ref": 95506626,
                        "role": ""
                    }, {"type": "way", "ref": 61435340, "role": ""}, {
                        "type": "way",
                        "ref": 180915274,
                        "role": ""
                    }, {"type": "way", "ref": 182691326, "role": ""}, {
                        "type": "way",
                        "ref": 95106180,
                        "role": ""
                    }, {"type": "way", "ref": 61435342, "role": ""}, {
                        "type": "way",
                        "ref": 72492953,
                        "role": ""
                    }, {"type": "way", "ref": 827705395, "role": ""}, {
                        "type": "way",
                        "ref": 13942938,
                        "role": ""
                    }, {"type": "way", "ref": 540048295, "role": ""}, {
                        "type": "way",
                        "ref": 249092420,
                        "role": ""
                    }, {"type": "way", "ref": 32699077, "role": ""}, {
                        "type": "way",
                        "ref": 688103600,
                        "role": ""
                    }, {"type": "way", "ref": 654338684, "role": "forward"}, {
                        "type": "way",
                        "ref": 11018710,
                        "role": "forward"
                    }, {"type": "way", "ref": 510825612, "role": "forward"}, {
                        "type": "way",
                        "ref": 70011248,
                        "role": "forward"
                    }, {"type": "way", "ref": 654338685, "role": "forward"}, {
                        "type": "way",
                        "ref": 14626290,
                        "role": ""
                    }, {"type": "way", "ref": 70011250, "role": ""}, {
                        "type": "way",
                        "ref": 12295471,
                        "role": ""
                    }, {"type": "way", "ref": 397097504, "role": ""}, {
                        "type": "way",
                        "ref": 12295484,
                        "role": ""
                    }, {"type": "way", "ref": 41990436, "role": ""}, {
                        "type": "way",
                        "ref": 70011252,
                        "role": ""
                    }, {"type": "way", "ref": 61503690, "role": ""}, {
                        "type": "way",
                        "ref": 182978284,
                        "role": ""
                    }, {"type": "way", "ref": 790820260, "role": "forward"}, {
                        "type": "way",
                        "ref": 592937894,
                        "role": "forward"
                    }, {"type": "way", "ref": 926028042, "role": "forward"}, {
                        "type": "way",
                        "ref": 592937902,
                        "role": "forward"
                    }, {"type": "way", "ref": 592937901, "role": "forward"}, {
                        "type": "way",
                        "ref": 182978255,
                        "role": "forward"
                    }, {"type": "way", "ref": 592937903, "role": "forward"}, {
                        "type": "way",
                        "ref": 12123659,
                        "role": "forward"
                    }, {"type": "way", "ref": 666877213, "role": "forward"}, {
                        "type": "way",
                        "ref": 790820259,
                        "role": "forward"
                    }, {"type": "way", "ref": 510825618, "role": ""}, {
                        "type": "way",
                        "ref": 13496412,
                        "role": ""
                    }, {"type": "way", "ref": 654338689, "role": ""}, {
                        "type": "way",
                        "ref": 740935312,
                        "role": ""
                    }, {"type": "way", "ref": 52288671, "role": ""}, {
                        "type": "way",
                        "ref": 52288667,
                        "role": ""
                    }, {"type": "way", "ref": 12123458, "role": ""}, {
                        "type": "way",
                        "ref": 508681905,
                        "role": ""
                    }, {"type": "way", "ref": 15071314, "role": ""}, {
                        "type": "way",
                        "ref": 61503700,
                        "role": ""
                    }, {"type": "way", "ref": 41989874, "role": ""}, {
                        "type": "way",
                        "ref": 328002077,
                        "role": ""
                    }, {"type": "way", "ref": 396377151, "role": ""}, {
                        "type": "way",
                        "ref": 396377150,
                        "role": ""
                    }, {"type": "way", "ref": 396377125, "role": ""}, {
                        "type": "way",
                        "ref": 328985990,
                        "role": ""
                    }, {"type": "way", "ref": 328985992, "role": ""}, {
                        "type": "way",
                        "ref": 328985993,
                        "role": ""
                    }, {"type": "way", "ref": 328985991, "role": ""}, {
                        "type": "way",
                        "ref": 632506298,
                        "role": ""
                    }, {"type": "way", "ref": 101191104, "role": ""}, {
                        "type": "way",
                        "ref": 499129522,
                        "role": ""
                    }, {"type": "way", "ref": 15071174, "role": ""}, {
                        "type": "way",
                        "ref": 297023609,
                        "role": ""
                    }, {"type": "way", "ref": 297023610, "role": ""}, {
                        "type": "way",
                        "ref": 297023608,
                        "role": ""
                    }, {"type": "way", "ref": 112695115, "role": ""}, {
                        "type": "way",
                        "ref": 584024902,
                        "role": ""
                    }, {"type": "way", "ref": 243543197, "role": ""}, {
                        "type": "way",
                        "ref": 101191119,
                        "role": "forward"
                    }, {"type": "way", "ref": 173530022, "role": "forward"}, {
                        "type": "way",
                        "ref": 265137637,
                        "role": "forward"
                    }, {"type": "way", "ref": 160627684, "role": "forward"}, {
                        "type": "way",
                        "ref": 657163351,
                        "role": "forward"
                    }, {"type": "way", "ref": 160627682, "role": "forward"}, {
                        "type": "way",
                        "ref": 160632906,
                        "role": "forward"
                    }, {"type": "way", "ref": 176870850, "role": "forward"}, {
                        "type": "way",
                        "ref": 173662701,
                        "role": "forward"
                    }, {"type": "way", "ref": 173662702, "role": ""}, {
                        "type": "way",
                        "ref": 467606230,
                        "role": ""
                    }, {"type": "way", "ref": 126267167, "role": ""}, {
                        "type": "way",
                        "ref": 301897426,
                        "role": ""
                    }, {"type": "way", "ref": 687866206, "role": ""}, {
                        "type": "way",
                        "ref": 295132739,
                        "role": ""
                    }, {"type": "way", "ref": 690497698, "role": ""}, {
                        "type": "way",
                        "ref": 627893684,
                        "role": ""
                    }, {"type": "way", "ref": 295132741, "role": ""}, {
                        "type": "way",
                        "ref": 301903120,
                        "role": ""
                    }, {"type": "way", "ref": 672541156, "role": ""}, {
                        "type": "way",
                        "ref": 126264330,
                        "role": ""
                    }, {"type": "way", "ref": 280440853, "role": ""}, {
                        "type": "way",
                        "ref": 838499667,
                        "role": ""
                    }, {"type": "way", "ref": 838499663, "role": ""}, {
                        "type": "way",
                        "ref": 690497623,
                        "role": ""
                    }, {"type": "way", "ref": 301902946, "role": ""}, {
                        "type": "way",
                        "ref": 280460715,
                        "role": ""
                    }, {"type": "way", "ref": 972534369, "role": ""}, {
                        "type": "way",
                        "ref": 588764361,
                        "role": ""
                    }, {"type": "way", "ref": 981365419, "role": ""}, {
                        "type": "way",
                        "ref": 188979882,
                        "role": ""
                    }, {"type": "way", "ref": 578030518, "role": ""}, {
                        "type": "way",
                        "ref": 124559857,
                        "role": ""
                    }, {"type": "way", "ref": 284568605, "role": ""}, {
                        "type": "way",
                        "ref": 126405025,
                        "role": ""
                    }, {"type": "way", "ref": 188978777, "role": ""}, {
                        "type": "way",
                        "ref": 272353445,
                        "role": "forward"
                    }, {"type": "way", "ref": 221443952, "role": "forward"}, {
                        "type": "way",
                        "ref": 172708119,
                        "role": "forward"
                    }, {"type": "way", "ref": 173061662, "role": "forward"}, {
                        "type": "way",
                        "ref": 441663456,
                        "role": "forward"
                    }, {"type": "way", "ref": 160627680, "role": "forward"}, {
                        "type": "way",
                        "ref": 176870852,
                        "role": "forward"
                    }, {"type": "way", "ref": 39588762, "role": "forward"}, {
                        "type": "way",
                        "ref": 172709466,
                        "role": "forward"
                    }, {"type": "way", "ref": 598459103, "role": "forward"}, {
                        "type": "way",
                        "ref": 688054392,
                        "role": "forward"
                    }, {"type": "way", "ref": 155986859, "role": "forward"}],
                    "tags": {
                        "name": "Groene Gordel Brugge",
                        "network": "lcn",
                        "ref": "GGB",
                        "route": "bicycle",
                        "type": "route"
                    }
                }, {
                    "type": "relation",
                    "id": 8369765,
                    "timestamp": "2021-08-23T14:22:45Z",
                    "version": 19,
                    "changeset": 110120188,
                    "user": "Pieter Vander Vennet",
                    "uid": 3818858,
                    "members": [{"type": "way", "ref": 539038988, "role": ""}, {
                        "type": "way",
                        "ref": 369929367,
                        "role": ""
                    }, {"type": "way", "ref": 840241791, "role": ""}, {
                        "type": "way",
                        "ref": 488558133,
                        "role": ""
                    }, {"type": "way", "ref": 369929894, "role": ""}, {
                        "type": "way",
                        "ref": 130473917,
                        "role": ""
                    }, {"type": "way", "ref": 509668834, "role": ""}, {
                        "type": "way",
                        "ref": 61435323,
                        "role": ""
                    }, {"type": "way", "ref": 61435332, "role": ""}, {
                        "type": "way",
                        "ref": 337945886,
                        "role": ""
                    }, {"type": "way", "ref": 560506339, "role": ""}, {
                        "type": "way",
                        "ref": 23775021,
                        "role": ""
                    }, {"type": "way", "ref": 23792223, "role": ""}, {
                        "type": "way",
                        "ref": 136487196,
                        "role": ""
                    }, {"type": "way", "ref": 130473931, "role": ""}, {
                        "type": "way",
                        "ref": 34562745,
                        "role": ""
                    }, {"type": "way", "ref": 421998791, "role": ""}, {
                        "type": "way",
                        "ref": 176380250,
                        "role": ""
                    }, {"type": "way", "ref": 116717052, "role": ""}, {
                        "type": "way",
                        "ref": 176380249,
                        "role": ""
                    }, {"type": "way", "ref": 116717060, "role": ""}, {
                        "type": "way",
                        "ref": 27288122,
                        "role": ""
                    }, {"type": "way", "ref": 32789519, "role": ""}, {
                        "type": "way",
                        "ref": 12126873,
                        "role": ""
                    }, {"type": "way", "ref": 689493508, "role": ""}, {
                        "type": "way",
                        "ref": 131476435,
                        "role": ""
                    }, {"type": "way", "ref": 689494106, "role": ""}, {
                        "type": "way",
                        "ref": 165500495,
                        "role": ""
                    }, {"type": "way", "ref": 807329786, "role": ""}, {
                        "type": "way",
                        "ref": 51570941,
                        "role": ""
                    }, {"type": "way", "ref": 422309497, "role": ""}, {
                        "type": "way",
                        "ref": 240869981,
                        "role": ""
                    }, {"type": "way", "ref": 240869873, "role": ""}, {
                        "type": "way",
                        "ref": 240869980,
                        "role": ""
                    }, {"type": "way", "ref": 165503767, "role": ""}, {
                        "type": "way",
                        "ref": 165503764,
                        "role": ""
                    }, {"type": "way", "ref": 421566315, "role": ""}, {
                        "type": "way",
                        "ref": 165503768,
                        "role": ""
                    }, {"type": "way", "ref": 245236630, "role": ""}, {
                        "type": "way",
                        "ref": 658500046,
                        "role": "forward"
                    }, {"type": "way", "ref": 646903393, "role": "forward"}, {
                        "type": "way",
                        "ref": 245236632,
                        "role": "forward"
                    }, {"type": "way", "ref": 245236633, "role": "forward"}, {
                        "type": "way",
                        "ref": 90485426,
                        "role": ""
                    }, {"type": "way", "ref": 596073878, "role": ""}, {
                        "type": "way",
                        "ref": 10898401,
                        "role": "backward"
                    }, {"type": "way", "ref": 658500044, "role": "forward"}, {
                        "type": "way",
                        "ref": 474253371,
                        "role": "forward"
                    }, {"type": "way", "ref": 474253369, "role": "forward"}, {
                        "type": "way",
                        "ref": 474253376,
                        "role": "forward"
                    }, {"type": "way", "ref": 165845350, "role": "backward"}, {
                        "type": "way",
                        "ref": 130697218,
                        "role": ""
                    }, {"type": "way", "ref": 61565721, "role": ""}, {
                        "type": "way",
                        "ref": 497202210,
                        "role": ""
                    }, {"type": "way", "ref": 130697226, "role": ""}, {
                        "type": "way",
                        "ref": 227617858,
                        "role": ""
                    }, {"type": "way", "ref": 227617857, "role": ""}, {
                        "type": "way",
                        "ref": 681804956,
                        "role": ""
                    }, {"type": "way", "ref": 165881675, "role": ""}, {
                        "type": "way",
                        "ref": 806146504,
                        "role": ""
                    }, {"type": "way", "ref": 806146505, "role": ""}, {"type": "way", "ref": 659762284, "role": ""}],
                    "tags": {
                        "alt_name": "Fietssnelweg F30 Brugge - Oostende",
                        "bicycle:type": "utility",
                        "cycle_highway": "yes",
                        "cycle_network": "BE-VLG:cycle_highway",
                        "name": "F30 Fietssnelweg Brugge - Oostende",
                        "network": "ncn",
                        "operator": "Provincie West-Vlaanderen",
                        "ref": "F30",
                        "route": "bicycle",
                        "state": "proposed",
                        "type": "route",
                        "website": "https://fietssnelwegen.be/f30",
                        "wikidata": "Q107485732"
                    }
                }, {
                    "type": "relation",
                    "id": 13060733,
                    "timestamp": "2021-09-19T18:08:57Z",
                    "version": 5,
                    "changeset": 111419581,
                    "user": "L'imaginaire",
                    "uid": 654234,
                    "members": [{"type": "way", "ref": 23792223, "role": ""}, {
                        "type": "way",
                        "ref": 23775021,
                        "role": ""
                    }, {"type": "way", "ref": 560506339, "role": ""}, {
                        "type": "way",
                        "ref": 337945886,
                        "role": ""
                    }, {"type": "way", "ref": 61435332, "role": ""}, {
                        "type": "way",
                        "ref": 61435323,
                        "role": ""
                    }, {"type": "way", "ref": 509668834, "role": ""}, {
                        "type": "way",
                        "ref": 839596136,
                        "role": ""
                    }, {"type": "way", "ref": 840488274, "role": ""}, {
                        "type": "way",
                        "ref": 839596137,
                        "role": ""
                    }, {"type": "way", "ref": 146172188, "role": ""}, {
                        "type": "way",
                        "ref": 749212030,
                        "role": ""
                    }, {"type": "way", "ref": 799479035, "role": ""}, {
                        "type": "way",
                        "ref": 130473928,
                        "role": ""
                    }, {"type": "way", "ref": 61414103, "role": ""}, {
                        "type": "way",
                        "ref": 539672618,
                        "role": ""
                    }, {"type": "way", "ref": 799479034, "role": ""}, {
                        "type": "way",
                        "ref": 539672617,
                        "role": ""
                    }, {"type": "way", "ref": 539672616, "role": ""}, {
                        "type": "way",
                        "ref": 539671786,
                        "role": ""
                    }, {"type": "way", "ref": 172317285, "role": ""}, {
                        "type": "way",
                        "ref": 35328157,
                        "role": ""
                    }, {"type": "way", "ref": 249119335, "role": ""}, {
                        "type": "way",
                        "ref": 584214875,
                        "role": ""
                    }, {"type": "way", "ref": 584217798, "role": ""}, {
                        "type": "way",
                        "ref": 676801473,
                        "role": ""
                    }, {"type": "way", "ref": 456588356, "role": ""}, {
                        "type": "way",
                        "ref": 456589109,
                        "role": ""
                    }, {"type": "way", "ref": 456588496, "role": ""}, {
                        "type": "way",
                        "ref": 487199906,
                        "role": ""
                    }, {"type": "way", "ref": 299450868, "role": ""}, {
                        "type": "way",
                        "ref": 165548222,
                        "role": ""
                    }, {"type": "way", "ref": 4329135, "role": ""}, {
                        "type": "way",
                        "ref": 4329771,
                        "role": ""
                    }, {"type": "way", "ref": 155149803, "role": ""}, {
                        "type": "way",
                        "ref": 305625031,
                        "role": ""
                    }, {"type": "way", "ref": 100842624, "role": ""}, {
                        "type": "way",
                        "ref": 18102445,
                        "role": ""
                    }, {"type": "way", "ref": 541116658, "role": ""}, {
                        "type": "way",
                        "ref": 591094005,
                        "role": ""
                    }, {"type": "way", "ref": 591094004, "role": ""}, {
                        "type": "way",
                        "ref": 184684947,
                        "role": ""
                    }, {"type": "way", "ref": 34945088, "role": ""}, {
                        "type": "way",
                        "ref": 235195315,
                        "role": ""
                    }, {"type": "way", "ref": 497849660, "role": ""}],
                    "tags": {
                        "colour": "#e40613",
                        "cycle_network": "BE-VLG:icoonroutes",
                        "description": "segment 2 van de Kunststedenroute",
                        "fixme": "incomplete",
                        "from": "Oostende",
                        "name": "Kunststedenroute - 02 - Oostende - Brugge",
                        "network": "ncn",
                        "operator": "Toerisme Vlaanderen",
                        "ref": "Kunst",
                        "route": "bicycle",
                        "to": "Brugge",
                        "type": "route",
                        "website": "https://www.vlaanderenmetdefiets.be/routes/kunststeden.html",
                        "wikidata": "Q106529274",
                        "wikipedia": "nl:LF Kunststedenroute"
                    }
                }]
            }
        )
        Utils.injectJsonDownloadForTests(
            "https://www.openstreetmap.org/api/0.6/way/61435332/full",
            {
                "version": "0.6",
                "generator": "CGImap 0.8.5 (3819319 spike-06.openstreetmap.org)",
                "copyright": "OpenStreetMap and contributors",
                "attribution": "http://www.openstreetmap.org/copyright",
                "license": "http://opendatacommons.org/licenses/odbl/1-0/",
                "elements": [{
                    "type": "node",
                    "id": 766990985,
                    "lat": 51.2169574,
                    "lon": 3.2017548,
                    "timestamp": "2016-07-05T22:41:12Z",
                    "version": 6,
                    "changeset": 40511250,
                    "user": "M!dgard",
                    "uid": 763799
                }, {
                    "type": "node",
                    "id": 3450208876,
                    "lat": 51.2169482,
                    "lon": 3.2016802,
                    "timestamp": "2016-07-05T22:41:11Z",
                    "version": 2,
                    "changeset": 40511250,
                    "user": "M!dgard",
                    "uid": 763799
                }, {
                    "type": "way",
                    "id": 61435332,
                    "timestamp": "2021-08-21T12:24:13Z",
                    "version": 8,
                    "changeset": 110026637,
                    "user": "Thibault Rommel",
                    "uid": 5846458,
                    "nodes": [766990985, 3450208876],
                    "tags": {
                        "bicycle": "yes",
                        "cycleway": "shared_lane",
                        "highway": "unclassified",
                        "maxspeed": "50",
                        "name": "Houtkaai",
                        "surface": "asphalt",
                        "zone:traffic": "BE-VLG:urban"
                    }
                }]
            }
        )
        Utils.injectJsonDownloadForTests(
            "https://www.openstreetmap.org/api/0.6/way/509668834/full",
            {
                "version": "0.6",
                "generator": "CGImap 0.8.5 (3735280 spike-06.openstreetmap.org)",
                "copyright": "OpenStreetMap and contributors",
                "attribution": "http://www.openstreetmap.org/copyright",
                "license": "http://opendatacommons.org/licenses/odbl/1-0/",
                "elements": [{
                    "type": "node",
                    "id": 131917824,
                    "lat": 51.2170327,
                    "lon": 3.2023577,
                    "timestamp": "2019-09-16T09:48:28Z",
                    "version": 17,
                    "changeset": 74521581,
                    "user": "Peter Elderson",
                    "uid": 7103674,
                    "tags": {"network:type": "node_network", "rcn_ref": "4", "rcn_region": "Brugse Ommeland"}
                }, {
                    "type": "node",
                    "id": 766990983,
                    "lat": 51.2170219,
                    "lon": 3.2022337,
                    "timestamp": "2021-04-26T15:48:22Z",
                    "version": 6,
                    "changeset": 103647857,
                    "user": "M!dgard",
                    "uid": 763799
                }, {
                    "type": "way",
                    "id": 509668834,
                    "timestamp": "2021-08-21T12:24:13Z",
                    "version": 5,
                    "changeset": 110026637,
                    "user": "Thibault Rommel",
                    "uid": 5846458,
                    "nodes": [131917824, 766990983],
                    "tags": {
                        "bicycle": "yes",
                        "cycleway": "shared_lane",
                        "highway": "residential",
                        "lit": "yes",
                        "maxspeed": "30",
                        "name": "Houtkaai",
                        "sidewalk": "both",
                        "surface": "paving_stones",
                        "zone:maxspeed": "BE:30",
                        "zone:traffic": "BE-VLG:urban"
                    }
                }]
            }
        )


        const id = "way/61435323"
        const splitPoint: [number, number] = [3.2021324336528774, 51.2170001600597]
        const splitter = new SplitAction(id, [splitPoint], {
            theme: "test"
        })
        const changeDescription = await splitter.CreateChangeDescriptions(new Changes())

        // Should be a new node
        equal(changeDescription[0].type, "node")
        equal(changeDescription[3].type, "relation")
    }

    private static async splitWithPointReuse(): Promise<void> {
        // Lets split road near an already existing point https://www.openstreetmap.org/way/295132739
        const id = "way/295132739"
        const splitPoint: [number, number] = [3.2451081275939937, 51.18116898253599]
        const splitter = new SplitAction(id, [splitPoint], {
            theme: "test"
        })
        const changeDescription = await splitter.CreateChangeDescriptions(new Changes())

        equal(2, changeDescription.length)
        const ch0 = changeDescription[0]
        const ch1 = changeDescription[1]
        const nodes0: number[] = ch0.changes["nodes"]
        const nodes1: number[] = ch1.changes["nodes"]
        equal(ch0.type, "way")
        equal(ch1.type, "way")
        equal(nodes0[nodes0.length - 1], nodes1[0])
        equal(1507524610, nodes1[0])
    }

    constructor() {
        super("splitaction", [
            ["split 295132739",
                () => SplitActionSpec.split().then(_ => console.log("OK"))],
            ["split 295132739 on already existing node",
                () => SplitActionSpec.splitWithPointReuse().then(_ => console.log("OK"))],
            ["split 61435323 on already existing node",
                () => SplitActionSpec.SplitHoutkaai().then(_ => console.log("OK"))],
            ["Split test line",
                async () => {

                    Utils.injectJsonDownloadForTests(
                        "https://www.openstreetmap.org/api/0.6/way/941079939/full",
                        {
                            "version": "0.6",
                            "generator": "CGImap 0.8.5 (957273 spike-08.openstreetmap.org)",
                            "copyright": "OpenStreetMap and contributors",
                            "attribution": "http://www.openstreetmap.org/copyright",
                            "license": "http://opendatacommons.org/licenses/odbl/1-0/",
                            "elements": [{
                                "type": "node",
                                "id": 6490126559,
                                "lat": 51.2332219,
                                "lon": 3.1429387,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 2,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"highway": "street_lamp", "power": "pole", "support": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440363,
                                "lat": 51.2324011,
                                "lon": 3.1367377,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"fixme": "continue"}
                            }, {
                                "type": "node",
                                "id": 8715440364,
                                "lat": 51.232455,
                                "lon": 3.1368759,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"power": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440365,
                                "lat": 51.2325883,
                                "lon": 3.1373986,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"power": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440366,
                                "lat": 51.232688,
                                "lon": 3.1379837,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"power": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440367,
                                "lat": 51.2327354,
                                "lon": 3.1385649,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"power": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440368,
                                "lat": 51.2327042,
                                "lon": 3.1392187,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"highway": "street_lamp", "power": "pole", "support": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440369,
                                "lat": 51.2323902,
                                "lon": 3.139353,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"power": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440370,
                                "lat": 51.2321027,
                                "lon": 3.139601,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"highway": "street_lamp", "power": "pole", "ref": "242", "support": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440371,
                                "lat": 51.2322614,
                                "lon": 3.1401564,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"power": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440372,
                                "lat": 51.232378,
                                "lon": 3.1407909,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"power": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440373,
                                "lat": 51.2325532,
                                "lon": 3.1413659,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"power": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440374,
                                "lat": 51.2327611,
                                "lon": 3.1418877,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"power": "pole"}
                            }, {
                                "type": "node",
                                "id": 8715440375,
                                "lat": 51.2330037,
                                "lon": 3.142418,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "tags": {"power": "pole"}
                            }, {
                                "type": "way",
                                "id": 941079939,
                                "timestamp": "2021-05-09T19:04:53Z",
                                "version": 1,
                                "changeset": 104407928,
                                "user": "M!dgard",
                                "uid": 763799,
                                "nodes": [6490126559, 8715440375, 8715440374, 8715440373, 8715440372, 8715440371, 8715440370, 8715440369, 8715440368, 8715440367, 8715440366, 8715440365, 8715440364, 8715440363],
                                "tags": {"power": "minor_line"}
                            }]
                        }
                    )

                    Utils.injectJsonDownloadForTests(
                        "https://www.openstreetmap.org/api/0.6/way/941079939/relations",
                        {
                            "version": "0.6",
                            "generator": "CGImap 0.8.5 (2419440 spike-07.openstreetmap.org)",
                            "copyright": "OpenStreetMap and contributors",
                            "attribution": "http://www.openstreetmap.org/copyright",
                            "license": "http://opendatacommons.org/licenses/odbl/1-0/",
                            "elements": []
                        }
                    )

                    // Split points are lon,lat
                    const splitPointAroundP3: [number, number] = [3.1392198801040645, 51.232701022376745]
                    const splitAction = new SplitAction("way/941079939", [splitPointAroundP3], {theme: "test"})
                    const changes = await splitAction.Perform(new Changes())
                    console.log(changes)
                    // 8715440368 is the expected point of the split

                    /* Nodes are
                        6490126559 (part of ways 941079941 and 941079940)
                        8715440375
                        8715440374
                        8715440373
                        8715440372
                        8715440371
                        8715440370
                        8715440369
                        8715440368 <--- split here
                        8715440367
                        8715440366
                        8715440365
                        8715440364
                        8715440363
                     */

                    const nodeList0 = [6490126559,
                        8715440375,
                        8715440374,
                        8715440373,
                        8715440372,
                        8715440371,
                        8715440370,
                        8715440369,
                        8715440368]

                    const nodeList1 = [
                        8715440368,
                        8715440367,
                        8715440366,
                        8715440365,
                        8715440364,
                        8715440363
                    ]

                    T.listIdentical(nodeList0, changes[0].changes["nodes"])
                    T.listIdentical(nodeList1, changes[1].changes["nodes"])
                }
            ],
            ["Split minor powerline halfway", async () => {


                const splitPointHalfway: [number, number] = [3.1392842531204224, 51.23255322710106]
                const splitAction = new SplitAction("way/941079939", [splitPointHalfway], {theme: "test"}, 1)
                const changes = await splitAction.Perform(new Changes())

                const nodeList0 = [6490126559,
                    8715440375,
                    8715440374,
                    8715440373,
                    8715440372,
                    8715440371,
                    8715440370,
                    8715440369,
                    -1]

                const nodeList1 = [
                    -1,
                    8715440368,
                    8715440367,
                    8715440366,
                    8715440365,
                    8715440364,
                    8715440363
                ]
                // THe first change is the creation of the new node
                T.equals("node", changes[0].type)
                T.equals(-1, changes[0].id)

                T.listIdentical(nodeList0, changes[1].changes["nodes"])
                T.listIdentical(nodeList1, changes[2].changes["nodes"])

            }
            ]
        ]);
    }
}