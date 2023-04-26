<template>
  <div>
    {{ filtersList }}
    <input v-model="inputVal" />
    <button @click="addValueToFilterList(inputVal)">+</button>
  </div>
</template>
<script setup>
import { useFiltersStore } from '~/store/filters'
import { storeToRefs } from 'pinia'

const inputVal = ref('')

const filtersStore = useFiltersStore()
const { addValueToFilterList } = filtersStore
const { filtersList } = storeToRefs(filtersStore)
</script>
