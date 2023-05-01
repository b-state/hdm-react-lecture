const initialState = { category: 'beliebt' };

// Reducer aktualisiert State je nach type der Action
const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'pizza': 
            return {
                category: 'pizza'
            }
        case 'beliebt':
            return {
                category: 'beliebt'
            }
        default: 
        return {
            category: 'beliebt'
        }
    }
}
export default categoryReducer;