import { render, screen, RenderOptions, RenderResult } from '@testing-library/vue'
import { createPinia, setActivePinia } from 'pinia'

import HelloWorld from '@/components/HelloWorld.vue'

let props: RenderOptions['props'] = {}
let renderComponent: () => RenderResult

describe('HelloWorld.vue', () => {
  beforeEach(() => {
    const pinia = createPinia()
    renderComponent = () =>
      render(HelloWorld, {
        props,
        global: {
          plugins: [pinia]
        }
      })
    setActivePinia(pinia)
  })

  it('renders props.msg when passed', () => {
    props = { msg: 'new message' }
    renderComponent()
    expect(screen.getByText(props.msg)).toBeInTheDocument()
  })
})
