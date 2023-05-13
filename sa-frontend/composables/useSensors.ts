export type Sensors = {
    "@iot.count": number
    "value": SensorType[]
}

export type SensorType = {
    "@iot.id": number
    "@iot.selfLink": string
    "name": string
    "description": string
    "encodingType": string
    "metadata": string
    "Datastreams@iot.navigationLink": string
}

export type SensorUpdatePayload = {
    name: string
    description: string
    encodingType: string
    metadata: string
}
