const initialState = { category: 'beliebt' };

const categoryReducer = (state = initialState, action) => {
    console.log("in Reducer"); //-> wird ausgeführt
    switch(action.type) {
        case 'pizza': 
            console.log("in pizza"); //-> wird ausgeführt 
            return {
                category: 'pizza'
            }
        case 'beliebt':
            return {
                category: 'beliebt'
            }
        case 'pasta': 
        return {
            category: 'pasta'
        }
        case 'salate': 
            return {
                category: 'salate'
            }
        default: 
        return {
            category: 'beliebt'
        }
    }
}
// console.log("in Reducer"); //-> 
export default categoryReducer;