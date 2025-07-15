<template>
    <div class="position-relative w-100" :style="{ height, overflow: 'hidden' }">
        <img
            :src="image"
            :alt="alt"
            class="w-100 h-100 object-fit-cover"
            :style="imgStyle"
            loading="eager"
            decoding="async"
            fetchpriority="high"
        />
        <h1
            class="position-absolute top-50 start-50 translate-middle text-white display-2 fw-bold fst-italic"
            :style="titleStyle"
        >
            {{ title }}
        </h1>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    image: String,
    title: String,
    alt: String,
    height: String,
    brightness: Number,
    letterSpacing: String,
    textShadow: String
})

const height = props.height || '220px'
const alt = props.alt || props.title
const brightness = props.brightness ?? 0.6
const letterSpacing = props.letterSpacing || '2px'
const textShadow = props.textShadow || '0 2px 16px #000'

const imgStyle = computed(() => ({
    filter: `brightness(${brightness})`,
    objectFit: 'cover'
}))

const titleStyle = computed(() => ({
    letterSpacing,
    textShadow
}))
</script>