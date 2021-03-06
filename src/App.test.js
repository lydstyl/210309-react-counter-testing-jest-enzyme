
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

import App from './App';

// set up enzyme's react adapter
Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('renders button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('counter starts at 0', () => {
  const wrapper = setup()
  const countValue = findByTestAttr(wrapper, 'count-value').text()
  expect(countValue).toBe('0')
  
})

test('clicking on button increments counter display', () => {
  const wrapper = setup()

  const button = findByTestAttr(wrapper, 'increment-button')
  
  button.simulate('click')

  const countValue = findByTestAttr(wrapper, 'count-value').text()

  expect(countValue).toBe('1')

})

test('clicking on decrement button decrement the display', () => {
  const wrapper = setup()

  const button = findByTestAttr(wrapper, 'decrement-button')

  button.simulate('click')

  const countValue = findByTestAttr(wrapper, 'count-value').text()

  expect(countValue).toBe('-1')
})