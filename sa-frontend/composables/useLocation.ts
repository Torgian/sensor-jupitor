// Location requires application/geo+json for encoding types
export type LocationEntityType = {
    "@iot.id": number
    "@iot.selfLink": string
    "Things@iot.navigationLink": string
    "HistoricalLocations@iot.navigationLink": string
    name: string
    description: string
    encodingType: string
    location: LocationType
}

// May update the 'type' type later. Point, Polygon, etc
export type LocationType = {
    type: string
    geometry: {
        type: string
        coordinates: number[]
    }
}

export type LocationEntityUpdateType = {
    name: string
    description: string
    encodingType: string
    location: LocationType
}