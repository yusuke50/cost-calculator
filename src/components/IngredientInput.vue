<template>
  <div class="grid grid-cols-6 my-1">
    <input
      type="text"
      v-model="ingredient.name"
      placeholder="請輸入材料名稱"
      class="block w-full rounded-lg border-2 text-xl p-2"
    />
    <input
      type="number"
      class="block w-full rounded-lg border-2 text-xl p-2"
      v-model="ingredient.totalAmount"
      @keyup.enter="unitCost"
      required
    />
    <input
      type="number"
      class="block w-full rounded-lg border-2 text-xl p-2"
      v-model="ingredient.price"
      @keyup.enter="unitCost"
      required
    />
    <input
      type="number"
      class="block w-full rounded-lg border-2 text-xl p-2"
      v-model="ingredient.need"
      @keyup.enter="unitCost"
      required
    />
    <div class="text-right my-auto">
      {{ ingredient.unit.toFixed(2) }}
    </div>
    <div class="rounded-r-lg basis-1/4 m-auto">
      <span class="text-pink-600" @click="remove"
        ><font-awesome-icon
          :icon="['regular', 'circle-xmark']"
          size="lg"
        ></font-awesome-icon
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps(['ingredient']);
const ingredientData = ref(props.ingredient);

const unitCost = () => {
  if (
    ingredientData.value.price &&
    ingredientData.value.totalAmount &&
    ingredientData.value.need
  ) {
    ingredientData.value.unit =
      (ingredientData.value.price / ingredientData.value.totalAmount) *
      ingredientData.value.need;
  }
};

const emits = defineEmits();

const remove = () => {
  emits('deleteIngredient', ingredientData);
};
</script>
