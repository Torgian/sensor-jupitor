export type FeatureOfInterestType = {
    "@iot.id": number
    "@iot.selfLink": string
    "Observations@iot.navigationLink": string
    name: string
    description: string
    encodingType: string
    feature: FeatureType
}

// May update this to include enumerable types for geometry
export type FeatureType = {
    type: string
    coordinates: number[]
}

export type FeatureOfInterestUpdateType = {
    "@iot.id"?: number
    name: string
    description: string
    encodingType: string
    feature: FeatureType
}
