<script setup lang="ts">
import { ref } from 'vue';
import IconLoading from '@/core/assets/svg/DotsScale.svg'

const url = import.meta.env.VITE_QUOTE_URL

const quoteID = ref(0)
const quote = ref('')

const loading = ref(true)

const loadNewQuote = () => {
  if (!loading.value) loading.value = true
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        quoteID.value = data.slip.id
        quote.value = data.slip.advice
        loading.value = false
      }, 1000);
    })
}

loadNewQuote()
</script>

<template>
  <div class="quote-generator">
    <Transition name="bounce">
      <div class="new-quote-wrapper" v-if="!loading">
        <button class="new-quote" @click="loadNewQuote">+</button>
      </div>
    </Transition>
    <Transition name="bounce">
      <div class="quote-wrapper" v-if="!loading">
        <p class="quote-id">QUOTE #{{ quoteID }}</p>
        <p class="quote">{{ quote }}</p>
      </div>
    </Transition>
    <img v-if="loading" :src="IconLoading" alt="loading quotes icon">
  </div>
</template>

<style scoped>
.quote-generator {
  max-width: 685px;
  margin: 0 auto;
  box-shadow: var(--box-shadow);
  padding: 5px 14px 12px 40px;
}

.new-quote-wrapper {
  display: flex;
  justify-content: end;
}

.new-quote,
.quote-id {
  color: var(--pattens-blue-muted);
  filter: var(--drop-shadow);
}

.new-quote {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 32px;
  font-weight: 400;
  padding-bottom: 0;
  margin-bottom: -2px;
}

.quote-id {
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  letter-spacing: 1px;
}

.quote {
  font-size: 24px;
  font-weight: 600;
  margin-top: 8px;
  padding-right: 20px;
}

.quote-generator img {
  display: block;
  margin: auto;
}
</style>