import { defineStore } from 'pinia'
import { Sensors } from '~/composables/useSensors'

export const useSensorStore = defineStore('sensorsStore', () => {
    const sensorList = ref<Sensors>({
        "@iot.count": 0,
        "value": []
    })

    const getSensors = async() => {
        const sensorData:Sensors = await $fetch('http://localhost:8000/api/v1.0/Sensors')
        console.log('sensor datas', sensorData)

        sensorList.value["@iot.count"] = sensorData["@iot.count"]
        sensorList.value.value.push(...sensorData.value)

    }

    return { getSensors, sensorList }
})
