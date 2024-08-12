<script setup lang="ts">
  import { computed, ref, onMounted, onUnmounted } from "vue"

  const size = ref(220)
  const strokeWidth = ref(18)
  const totalTime = ref(11938)
  const timeLeft = ref(totalTime.value * 0.5)

  const radius = computed(() => (size.value - strokeWidth.value) / 2)
  const circumference = computed(() => 2 * Math.PI * radius.value)
  const progress = computed(() => timeLeft.value / totalTime.value)
  const offset = computed(() => circumference.value * (1 - progress.value))

  function computeProgressText() {
    const hours = Math.floor(timeLeft.value / 3600)
      .toString()
      .padStart(2, "0")
    const minutes = Math.floor((timeLeft.value % 3600) / 60)
      .toString()
      .padStart(2, "0")
    const seconds = (timeLeft.value % 60).toString().padStart(2, "0")
    return `${hours}:${minutes}:${seconds}`
  }

  const progressText = computed(computeProgressText)

  let timerInterval: number | null = null

  function startTimer() {
    timerInterval = window.setInterval(() => {
      timeLeft.value > 0
        ? timeLeft.value--
        : clearInterval(timerInterval as number)
    }, 1000)
  }

  onMounted(startTimer)
  onUnmounted(() => timerInterval && clearInterval(timerInterval as number))
</script>

<template>
  <div
    class="mx-auto mb-7 flex max-w-[252px] rounded-full bg-white p-4 lg:my-7"
  >
    <div class="relative mx-auto h-[220px] w-[220px]">
      <svg class="h-full w-full -rotate-90 transform">
        <defs>
          <linearGradient id="gradientStroke" x1="100%" y1="1%" x2="0%" y2="0%">
            <stop offset="0%" style="stop-color: #ff8a00; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #ffd800; stop-opacity: 1" />
          </linearGradient>
        </defs>
        <circle
          cx="110"
          cy="110"
          r="90"
          :stroke-width="strokeWidth"
          stroke="rgb(217 217 217)"
          fill="transparent"
        />
        <circle
          cx="110"
          cy="110"
          r="90"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="offset"
          :stroke-width="strokeWidth"
          stroke="url(#gradientStroke)"
          stroke-linecap="round"
          fill="transparent"
        />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <p class="text-off-black text-[22px] font-bold leading-[1.27]">
          {{ progressText }}
        </p>
      </div>
    </div>
  </div>
</template>
