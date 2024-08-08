import * as remeda from "remeda"

// common helper functions
export const fn = new (class {
  // remeda
  pipe = remeda.pipe
  debounce = remeda.debounce
  clone = remeda.clone
  unique = remeda.unique
  intersection = remeda.intersection

  // sleep for ms milliseconds
  sleep(ms: number) {
    return new Promise((res) => setTimeout(res, ms))
  }

  // wait until next tick
  async nextTick() {
    await fn.sleep(0)
  }

  // change value, sleep, revert
  async jojo(obj: { value: any }, value: any, duration = 1000) {
    const before = obj.value
    obj.value = value
    await fn.sleep(duration)
    obj.value = before
  }
})()
