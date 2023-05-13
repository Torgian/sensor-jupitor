<template lang="pug">
.sensor-list
    h2 List of Sensors
    div(v-if="sensors.value.length") 
        v-data-table(
            :headers="tableHeaders"
            :items="sensors.value"
            fixed-header
            fixed-footer
            hover
            class="elevation-1"
        )
    div(v-else)
        span No Sensors Available 

</template>
<script lang="ts">
import { useSensorStore } from '~/stores/sensors'

import { Sensors } from '@/composables/useSensors'

// VDataTable is still in development. 
// TODO: Remove when VDataTable is stable
import { VDataTable } from 'vuetify/labs/VDataTable'

export default defineComponent({
    name: "Sensors",

    components: { VDataTable },

    setup() {
        const sensorsStore = useSensorStore()

        useAsyncData(async() => await sensorsStore.getSensors())

        const sensors = ref<Sensors>(sensorsStore.sensorList)

        const tableHeaders = [
            {title: 'Name', key: 'name'},
            {title: 'Desc', key: 'description'},
            {title: 'Link', key: 'Datastreams@iot.navigationLink'},
        ]
        return {
            sensors,
            tableHeaders,
        }
    }
})
</script>