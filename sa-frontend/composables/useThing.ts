import { LocationEntityUpdateType } from "./useLocation"

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
    "@iot.id"?: number
    name: string
    description: string
    properties: null | {[key: string]: any}
    Locations?: LocationEntityUpdateType[]
}