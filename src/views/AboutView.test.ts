import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/vue'
import { createPinia, setActivePinia } from 'pinia'

import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue', () => {
  beforeEach(() => {
    const pinia = createPinia()
    render(AboutView, {
      global: {
        plugins: [pinia]
      }
    })
    setActivePinia(pinia)
  })

  it('updates store counter', async () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('count is 1')
  })
})
