export type ObservedPropertyType = {
    "@iot.id": number
    "@iot.selfLink": string
    "Datastreams@iot.navigationLink": string
    description: string
    name: string
    definition: string
}

export type ObservedPropertyUpdateType = {
    "@iot.id"?: number
    description: string
    name: string
    definition: string
}
