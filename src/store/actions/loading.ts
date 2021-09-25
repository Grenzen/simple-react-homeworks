import * as types from '../types/loading'

type RequestedLoadingType = ReturnType<typeof requestedLoading>
export type LoadingActionType = RequestedLoadingType

export const requestedLoading = () => ({
    type: types.REQUESTED_LOADING,
} as const)