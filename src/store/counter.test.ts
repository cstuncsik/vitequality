import { useCounterStore } from '@/store/counter'

describe('Counter', () => {
  it('increments count', () => {
    // Destructuring refs and computed props breaks reactivity but actions can be safely extracted
    // https://pinia.vuejs.org/core-concepts/#using-the-store
    const counterStore = useCounterStore()
    const { increment } = counterStore
    expect(counterStore.count).toBe(0)
    increment()
    expect(counterStore.count).toBe(1)
  })
})
