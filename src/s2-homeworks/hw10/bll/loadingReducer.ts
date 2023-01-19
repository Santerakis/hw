// const initState = {
//     isLoading: false,
// }
const initState = false

export const loadingReducer = (state = initState, action: LoadingActionType): boolean => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
            case 'CHANGE_LOADING':
                let a = action.isLoading
                return state = a
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
