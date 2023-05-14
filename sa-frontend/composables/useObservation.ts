// When updating or creating an observation, a Feature ID must be included in the URL
export type ObservationType = {
    "@iot.id": number
    "@iot.selfLink": string
    "FeatureOfInterest@iot.navigationLink": string
    "Datastream@iot.navigationLink": string
    phenomenonTime: Date
    resultTime: Date
    result: number
}

export type ObservationUpdateType = {
    "@iot.id"?: number
    phenomenonTime: Date
    resultTime: Date
    result: number
}
