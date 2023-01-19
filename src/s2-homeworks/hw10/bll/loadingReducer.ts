const initState = {
    isLoading: false,
}

type SteteType = {
    isLoading: boolean
}
// const initState = false

export const loadingReducer = (state: SteteType = initState, action: LoadingActionType): SteteType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
            case 'CHANGE_LOADING':
                return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
