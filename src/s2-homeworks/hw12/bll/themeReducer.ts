const initState = {
    themeId: 1,
}

type redStateType = {
    themeId: number
}

export const themeReducer = (state:redStateType = initState, action: any): redStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
                return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any

type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}
