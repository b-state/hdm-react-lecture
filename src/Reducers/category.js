const initialState = { type: 'beliebt' };

const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'pizza': 
            state = 'pizza'
            return state;
        case 'beliebt':
            state = 'beliebt'
            return state;
        case 'pasta': 
            state = 'pasta'
            return state;
        case 'salate': 
            state = 'salate'
            return state;
        default: 
            return state;
    }
}
export default categoryReducer;