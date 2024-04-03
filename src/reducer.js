const initState = { count: 0 }

const reducer = (preState = initState, action) => {
    console.log(preState, action);
    switch (action.type) {
        case "INCREMENT":
            return {
                count: preState.count + 1
            }

            break;
        case "DECREMENT":
            return {
                count: preState.count - 1
            }
            break;

        default:
            return preState;

    }

}

export default reducer;
