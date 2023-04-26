<template lang="pug">
.sensor-list 
    h2 List of Sensors
    div(v-if="sensors.value.length") 
        h4 Sensor Count: {{  sensors.value['@iot.count'] }}
        v-row(v-for="sensor of sensors.value" :key="sensor['@iot.id']")
            span {{ sensor }}
    div(v-else)
        span No Sensors Available 

</template>
<script lang="ts">
import { useSensorStore } from '~/stores/sensors'

import { Sensors } from '@/composables/useSensors'

export default defineComponent({
    name: "Sensors",

    setup() {
        const sensorsStore = useSensorStore()

        useAsyncData(async() => await sensorsStore.getSensors())

        const sensors = ref<Sensors>(sensorsStore.sensorList)
        console.log(sensors)

        return {
            sensors
        }
    }
})
</script>