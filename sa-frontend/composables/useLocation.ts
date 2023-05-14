// Location requires "encodingType": "application/vnd.geo+json"
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
    coordinates: number[]
}

export type LocationEntityUpdateType = {
    "@iot.id"?: number
    name: string
    description: string
    encodingType: string
    location: LocationType
}

// Example
// {
//     "name": "Location One",
//     "description": "Descript",
//     "encodingType": "application/vnd.geo+json",
//     "location": {
//           "type": "Point",
//           "coordinates": [-114.06,51.05]
//     }
// }