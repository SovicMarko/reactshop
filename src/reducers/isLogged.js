const isLoggedReducer = (state = true, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return true;
        case "SIGN_OUT":
            return true;
        default:
            return true;
    }
}

export default isLoggedReducer;