<template>
  <div class="container mx-auto">
    <header class="">
      <h1>蛋黃酥</h1>
    </header>

    <section class="">
      <div class="header grid grid-cols-5 mb-2">
        <div class="w-full px-4">材料</div>
        <div class="w-full px-4">每包 (顆 / 克)</div>
        <div class="w-full px-4">售價</div>
        <div class="w-full px-4">需要份量</div>
        <div class="w-full px-4">單顆蛋黃酥需要花費</div>
      </div>

      <div class="grid grid-cols-5 egg-row mb-2">
        <div class="w-full px-4 my-auto">蛋黃</div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="egg.totalAmount"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="egg.price"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="egg.need"
            required
          />
        </div>
        <div class="w-full px-4 text-right my-auto">
          {{ calcEgg }}
        </div>
      </div>

      <div class="grid grid-cols-5 redbean-row mb-2">
        <div class="w-full px-4 my-auto">烏豆沙</div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="redbean.totalAmount"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="redbean.price"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="redbean.need"
            required
          />
        </div>
        <div class="w-full px-4 text-right my-auto">
          {{ calcRedbean }}
        </div>
      </div>

      <div class="grid grid-cols-5 flour-row mb-2">
        <div class="w-full px-4 my-auto">中筋麵粉</div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="flour.totalAmount"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="flour.price"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="flour.need"
            required
          />
        </div>
        <div class="w-full px-4 text-right my-auto">
          {{ calcFlour }}
        </div>
      </div>

      <div class="grid grid-cols-5 cakeflour-row mb-2">
        <div class="w-full px-4 my-auto">低筋麵粉</div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="cakeflour.totalAmount"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="cakeflour.price"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="cakeflour.need"
            required
          />
        </div>
        <div class="w-full px-4 text-right my-auto">
          {{ calcCakeFlour }}
        </div>
      </div>

      <div class="grid grid-cols-5 sugar-row mb-2">
        <div class="w-full px-4 my-auto">糖粉</div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="sugar.totalAmount"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="sugar.price"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="sugar.need"
            required
          />
        </div>
        <div class="w-full px-4 text-right my-auto">
          {{ calcSugar }}
        </div>
      </div>

      <div class="grid grid-cols-5 butter-row mb-2">
        <div class="w-full px-4 my-auto">酥油</div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="butter.totalAmount"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="butter.price"
            required
          />
        </div>
        <div class="w-full px-4">
          <input
            type="number"
            class="block w-full rounded-lg border-2 text-xl p-2"
            v-model="butter.need"
            required
          />
        </div>
        <div class="w-full px-4 text-right my-auto">
          {{ calcButter }}
        </div>
      </div>

      <div class="footer grid grid-cols-5 mb-2 border-dashed border-t-2">
        <div class="w-full px-4"></div>
        <div class="w-full px-4"></div>
        <div class="w-full px-4"></div>
        <div class="w-full px-4 text-right">小計：</div>
        <div class="w-full px-4">{{ calcTotal }}</div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';
const egg = reactive({
  totalAmount: 0,
  price: 0,
  need: 0,
  unit: 0,
});
const redbean = reactive({
  totalAmount: 0,
  price: 0,
  need: 0,
  unit: 0,
});
const flour = reactive({
  totalAmount: 0,
  price: 0,
  need: 0,
  unit: 0,
});
const cakeflour = reactive({
  totalAmount: 0,
  price: 0,
  need: 0,
  unit: 0,
});
const sugar = reactive({
  totalAmount: 0,
  price: 0,
  need: 0,
  unit: 0,
});
const butter = reactive({
  totalAmount: 0,
  price: 0,
  need: 0,
  unit: 0,
});

const calcEgg = computed(() => {
  if (egg.totalAmount && egg.price && egg.need) {
    egg.unit = Math.floor((egg.price / egg.totalAmount) * egg.need * 100) / 100;
    return `NT$ ${egg.unit}`;
  }
  return '';
});
const calcRedbean = computed(() => {
  if (redbean.totalAmount && redbean.price && redbean.need) {
    redbean.unit =
      Math.floor((redbean.price / redbean.totalAmount) * redbean.need * 100) /
      100;
    return `NT$ ${redbean.unit}`;
  }
  return '';
});
const calcFlour = computed(() => {
  if (flour.totalAmount && flour.price && flour.need) {
    flour.unit =
      Math.floor((flour.price / flour.totalAmount) * flour.need * 100) / 100;
    return `NT$ ${flour.unit}`;
  }
  return '';
});
const calcCakeFlour = computed(() => {
  if (cakeflour.totalAmount && cakeflour.price && cakeflour.need) {
    cakeflour.unit =
      Math.floor(
        (cakeflour.price / cakeflour.totalAmount) * cakeflour.need * 100
      ) / 100;
    return `NT$ ${cakeflour.unit}`;
  }
  return '';
});
const calcSugar = computed(() => {
  if (sugar.totalAmount && sugar.price && sugar.need) {
    sugar.unit =
      Math.floor((sugar.price / sugar.totalAmount) * sugar.need * 100) / 100;
    return `NT$ ${sugar.unit}`;
  }
  return '';
});
const calcButter = computed(() => {
  if (butter.totalAmount && butter.price && butter.need) {
    butter.unit =
      Math.floor((butter.price / butter.totalAmount) * butter.need * 100) / 100;
    return `NT$ ${butter.unit}`;
  }
  return '';
});
const calcTotal = computed(() => {
  if (
    egg.unit &&
    redbean.unit &&
    flour.unit &&
    cakeflour.unit &&
    sugar.unit &&
    butter.unit
  ) {
    const total =
      Math.floor(
        (egg.unit +
          redbean.unit +
          flour.unit +
          cakeflour.unit +
          sugar.unit +
          butter.unit) *
          100
      ) / 100;
    return `NT$ ${total}`;
  }
  return '';
});

onMounted(() => {
  console.log('start');
});
</script>

<style></style>
