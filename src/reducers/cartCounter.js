const cartCounterReducer = (state = 0, action) => {
    switch (action.type) {
        case "CHANGED":
            return JSON.parse(window.localStorage.cart).length;
        default:
            return state;
    }
}

export default cartCounterReducer;