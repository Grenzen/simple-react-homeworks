import * as types from '../types/loading'
import { LoadingActionType } from '../actions/loading'

type LoadingStateType = {
    isLoading: boolean
}
const initialState: LoadingStateType = {
    isLoading: false,
}

export const loadingReducer = (state = initialState, action: LoadingActionType): LoadingStateType => {
    switch (action.type) {
        case types.REQUESTED_LOADING: {
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        }
        default:
            return state
    }
}