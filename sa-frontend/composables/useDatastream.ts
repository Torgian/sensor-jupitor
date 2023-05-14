import { SensorUpdatePayload } from "./useSensors"
import { ObservedPropertyUpdateType } from "./useObservedProperty"
import { ThingUpdateType } from "./useThing"
import { ObservedAreaType } from "./useObservedArea"
/**
 * A Datastream PUT request seems to require, at the very least, a Sensor. Will need to test.
 * Below is an example PUT request. 
 * 
 * We can use pre-determined Sensors, ObservedProperties, and Things by including the iot.id for each in the payload.
 * "Thing" does not seem to require a "location"
 */
// "Datastream": {
//     "name": "Air Temperature DS",
//     "description": "Datastream for recording temperature",
//     "observationType": "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement",
//     "unitOfMeasurement": {
//         "name": "Degree Celsius",
//         "symbol": "degC",
//         "definition": "http://www.qudt.org/qudt/owl/1.0.0/unit/Instances.html#DegreeCelsius"
//     },
//     "ObservedProperty": {
//         "name": "Area Temperature",
//         "description": "The degree or intensity of heat present in the area",
//         "definition": "http://www.qudt.org/qudt/owl/1.0.0/quantity/Instances.html#AreaTemperature"
//     },
//     "Sensor": {
//         "name": "DHT22",
//         "description": "DHT22 temperature sensor",
//         "encodingType": "application/pdf",
//         "metadata": "https://cdn-shop.adafruit.com/datasheets/DHT22.pdf"
//     },
//     "Thing": {
//         "name": "Temperature Monitoring System",
//         "description": "Sensor system monitoring area temperature",
//         "properties": {
//             "Deployment Condition": "Deployed in a third floor balcony",
//             "Case Used": "Radiation shield"
//         },
//         "Locations": [
//             {
//                 "name": "UofC CCIT",
//                 "description": "University of Calgary, CCIT building",
//                 "encodingType": "application/vnd.geo+json",
//                 "location": {
//                     "type": "Point",
//                     "coordinates": [-114.133, 51.08]
//                 }
//             }
//         ]
//     }
// },

// OBSERVATION_TYPES = (
//     (
//     "http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CategoryObservation", "OM Category Observation (URI)"),
//     ("http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CountObservation", "OM Count Observation (Integer)"),
//     ("http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement", "OM Measurement (Double)"),
//     ("http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Observation", "OM Observation (Any)"),
//     ("http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_TruthObservation", "OM Truth Observation (Boolean)")
// )
/**
 * ObservationType can be one of five types.
 * Thing can have an option Locations array.
 * This type is used for both POST and PUT requests
 */
export type DataStreamType = {
    "@iot.id"?: number
    name: string
    description: string
    observationType: string
    unitOfMeasurement: UnitOfMeasurementType
    observedArea: ObservedAreaType | null
    phenomenonTime: Date | null
    resultTime: Date | null
    ObservedProperty: ObservedPropertyUpdateType
    Sensor: SensorUpdatePayload
    Thing: ThingUpdateType
}

export type UnitOfMeasurementType = {
    name: string
    symbol: string
    definition: string
}

