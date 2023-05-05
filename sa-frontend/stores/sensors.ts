
import { defineStore } from 'pinia'

import { Sensors } from '~/composables/useSensors'

export const useSensorStore = defineStore('sensorsStore', () => {
    const sensorList = ref<Sensors>({
        "@iot.count": 0,
        "value": []
    })

    const { $apiURL } = useNuxtApp()
    const getSensors = async() => {
        const url = `${$apiURL}/Sensors`

        sensorList.value["@iot.count"] = 0
        sensorList.value.value = []

        const sensorData: Sensors|null = await $fetch(url)

        if (sensorData) {
            sensorList.value["@iot.count"] = sensorData["@iot.count"]
            sensorList.value.value.push(...sensorData.value)
        }
    }

    return { getSensors, sensorList }
})
