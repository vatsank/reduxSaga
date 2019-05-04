const reducer = (state = [{}], action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, loading: true };
        case 'USERS_RECEIVED':
             return {...state, users: JSON.stringify(action.json[0]), loading: false }
        default:
            return state;
    }
};

export default reducer;