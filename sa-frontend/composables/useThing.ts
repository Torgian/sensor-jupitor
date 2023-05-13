export type ThingType = {
    "@iot.id": number
    "@iot.selfLink": string
    "name": string
    "description": string
    "properties": null | {[key: string]: any}
    "Datastreams@iot.navigationLink": string
    "Locations@iot.navigationLink": string
    "HistoricalLocations@iot.navigationLink": string
}

export type ThingUpdateType = {
    "name": string
    "description": string
    "properties": null | {[key: string]: any}
}