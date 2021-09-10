import { UserType } from '../HW8'

export type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    const newState = [...state]
    switch (action.type) {
        case 'sort':
            switch (action.payload) {
                case 'up':
                    return newState.sort((a, b) => a.name > b.name ? 1 : -1)
                case 'down':
                    return newState.sort((a, b) => a.name < b.name ? 1 : -1)
                default:
                    return state
            }
        case 'check': {
            return newState.filter(item => item.age >= action.payload)
        }
        default:
            return state
    }
}