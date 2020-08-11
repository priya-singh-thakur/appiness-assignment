const initialData = {
    "email": "hruday@gmail.com",
    "password": `hruday123`,
}


export default function loginReducer(state = initialData, action) {
    switch (action.type) {
        case 'LOGIN_DATA': {
            return action.payload
        }
        default:
            return state
    }
}