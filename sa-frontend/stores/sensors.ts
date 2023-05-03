import { defineStore } from 'pinia'
import { useAPIFetch } from '~/composables/useAPIFetch'
import { Sensors } from '~/composables/useSensors'

export const useSensorStore = defineStore('sensorsStore', () => {
    const sensorList = ref<Sensors>({
        "@iot.count": 0,
        "value": []
    })

    const getSensors = async() => {
        const sensorData: Sensors[]|null = (await useAPIFetch<Sensors[]>('/Sensors').data.value)
        console.log('sensor datas', sensorData)
        // if (sensorData) {
        //     sensorList.value["@iot.count"] = sensorData["@iot.count"]
        //     sensorList.value.value.push(...sensorData.value)
        // }
    }

    return { getSensors, sensorList }
})
