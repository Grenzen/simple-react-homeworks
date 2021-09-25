import * as actions from '../actions/loading'
import { loadingReducer } from './loading'

const testState = {
    isLoading: false,
}

test('should correct change isLoading value', () => {
    const endState = loadingReducer(testState, actions.requestedLoading())

    console.log(endState)
    expect(endState).not.toBe(testState)
    expect(testState.isLoading).toBe(false)
    expect(endState.isLoading).toBe(true)
})