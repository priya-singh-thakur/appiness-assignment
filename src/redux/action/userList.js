//Action Creator 

export const userList = user => {
    //return an action 
    return {
        type: 'FETCH_USERS',
        payload: user
    }
}

export const login = user => {
    //return an action 
    return {
        type: 'LOGIN_DATA',
        payload: user
    }
}

