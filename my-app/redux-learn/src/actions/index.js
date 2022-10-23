import ACTION_TYPES from "./actionTypes";


export const add = () => ({type: ACTION_TYPES.COUNTER_ADD});
export const sub = () => ({type: ACTION_TYPES.COUNTER_SUB});
export const setStep = (newStep) => ({
    type: ACTION_TYPES.COUNTER_SET_STEP,
    value: newStep,
});

export const setTheme = (isLigth) => ({
    type: ACTION_TYPES.SET_THEME,
    theme: !isLigth
});

export const createUser = (data) => {
    return{
        type: ACTION_TYPES.CREATE_USER,
        data: data,
    }
}

export const updateUser = (newData) => {
    return{
        type: ACTION_TYPES.UPDETE_USER,
        data: newData
    }
}

export const deleteUser = (id) => {
    return{
        type: ACTION_TYPES.DELETE_USER,
        id: id,
    }

}

export const getUser = (id) => {
    return{
        type: ACTION_TYPES.READ_USER,
        id: id,
    }
    
}

export const getUserAction = () => ({
    type: ACTION_TYPES.GET_USER_ACTION
})

export const getUserRequest = () => ({
    type: ACTION_TYPES.GET_USER_REQUEST
})

export const getUserSuccess = (user) => ({
    type: ACTION_TYPES.GET_USER_SUCCESS,
    user
})

export const getUserError = (error) => ({
    type: ACTION_TYPES.GET_USER_ERROR,
    error
})


export const getSuperHeroList = () => {
    return{
        type: ACTION_TYPES.GET_SUPERHERO_LIST
    }
}

export const customIncr = () => {
    return{
        type: ACTION_TYPES.CUSTOM_INCR
    }
}

export const customDecr = () => {
    return{
        type: ACTION_TYPES.CUSTOM_DECR
    }
}

export const customSetValue = (payload) => {
    return{
        type: ACTION_TYPES.CUSTOM_SET_VALUE,
        payload: payload
    }
}
