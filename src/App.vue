<template>
  <div class="container mx-auto">
    <header>
      <h1>計算成本</h1>
    </header>

    <div>
      <button
        class="w-1/2 rounded bg-green-600 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        @click="addIngredient"
      >
        新增材料
      </button>

      <div class="header grid grid-cols-6 mb-2">
        <div class="w-full px-4 font-bold">材料</div>
        <div class="w-full px-4 font-bold">每包 (顆 / 克)</div>
        <div class="w-full px-4 font-bold">售價</div>
        <div class="w-full px-4 font-bold">需要份量</div>
        <div class="w-full px-4 font-bold">單顆所需成本</div>
        <div class="w-full px-4 font-bold"></div>
      </div>

      <div v-for="(ingredient, idx) in ingredients" :key="idx">
        <ingredient-input
          :ingredient="ingredient"
          @delete-ingredient="deleteIngredient(idx)"
        ></ingredient-input>
      </div>

      <div
        v-show="ingredients.length"
        class="footer grid grid-cols-6 mb-2 border-dashed border-t-2"
      >
        <div class="w-full px-4"></div>
        <div class="w-full px-4"></div>
        <div class="w-full px-4"></div>
        <div class="w-full px-4 text-right">小計：</div>
        <div class="w-full text-right">{{ calcTotal }}</div>
        <div class="w-full px-4"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import IngredientInput from './components/IngredientInput.vue';

interface Ingredient {
  name: string;
  totalAmount: number;
  price: number;
  need: number;
  unit: number;
}
const ingredients = ref<Ingredient[]>([]);

const calcTotal = computed(() => {
  return `NT$ ${ingredients.value
    .reduce((accumulator, current) => {
      return accumulator + current.unit;
    }, 0)
    .toFixed(2)}`;
});

const addIngredient = () => {
  ingredients.value.push({
    name: '',
    totalAmount: 0,
    price: 0,
    need: 0,
    unit: 0,
  });
};

const deleteIngredient = (idx: number) => {
  ingredients.value.splice(idx, 1);
};

const calcUnit = () => {
  ingredients.value.forEach((item) => {
    if (item.price && item.totalAmount && item.need) {
      item.unit = parseFloat(
        ((item.price / item.totalAmount) * item.need).toFixed(2)
      );
    }
  });
};

watch(ingredients, () => {
  calcUnit();
});

onMounted(() => {
  console.log('start');
});
</script>

<style></style>
