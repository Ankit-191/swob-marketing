<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from "vue";

const size = ref(220);
const strokeWidth = ref(18);
const totalTime = ref(11938);
const timeLeft = ref(totalTime.value * 0.5);

const radius = computed(() => (size.value - strokeWidth.value) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const progress = computed(() => timeLeft.value / totalTime.value);
const offset = computed(() => circumference.value * (1 - progress.value));

const progressText = computed(() => {
    const hours = Math.floor(timeLeft.value / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((timeLeft.value % 3600) / 60).toString().padStart(2, "0");
    const seconds = (timeLeft.value % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
});

let timerInterval: number | null = null;

const startTimer = () => {
    timerInterval = window.setInterval(() => {
        timeLeft.value > 0 ? timeLeft.value-- : clearInterval(timerInterval as number);
    }, 1000);
};

onMounted(startTimer);
onUnmounted(() => timerInterval && clearInterval(timerInterval as number));

</script>

<template>
    <div class="flex p-4 mx-auto mb-7 lg:my-7 bg-white rounded-full max-w-[252px]">
        <div class="relative w-[220px] h-[220px] mx-auto">
            <svg class="w-full h-full transform -rotate-90">
                <defs>
                    <linearGradient id="gradientStroke" x1="100%" y1="1%" x2="0%" y2="0%">
                        <stop offset="0%" style="stop-color: #ff8a00; stop-opacity: 1" />
                        <stop offset="100%" style="stop-color: #ffd800; stop-opacity: 1" />
                    </linearGradient>
                </defs>
                <circle cx="110" cy="110" r="90" :stroke-width="strokeWidth" stroke="rgb(217 217 217)"
                    fill="transparent" />
                <circle cx="110" cy="110" r="90" :stroke-dasharray="circumference" :stroke-dashoffset="offset"
                    :stroke-width="strokeWidth" stroke="url(#gradientStroke)" stroke-linecap="round"
                    fill="transparent" />
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <p class="text-[22px] font-bold leading-[1.27] text-off-black">
                    {{ progressText }}
                </p>
            </div>
        </div>
    </div>
</template>