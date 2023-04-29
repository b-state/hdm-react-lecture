const initialState = { type: 'BELIEBT' };

const categoryReducer = (state = initialState, action = { type: 'DEFAULT' }) => {
    switch(action.type) {
        case 'PIZZA': 
            state = 'PIZZA'
            return state;
        case 'BELIEBT': 
            state = 'BELIEBT'
            return state;
        case 'PASTA': 
            state = 'PASTA'
            return state;
        case 'SALATE': 
            state = 'SALATE'
            return state;
        default: 
            return state;
    }
}
export default categoryReducer;