import { shallowMount } from '@vue/test-utils'
import ShowsDisplay from '../ShowsDisplay'

const factory = () => {
  return shallowMount(Logo, {})
}

describe('Logo', () => {
  test('mounts properly', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
