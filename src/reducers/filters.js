const filtersReducerDefault = {filterBy:"title", text:""}
const filtersReducer = (state=filtersReducerDefault, action) =>{
    switch (action.type) {
        case "SEARCH":
            return {
                ...state,
                text: action.text
            }
        case "DATE":
            return {
                ...state,
                filterBy: "date"
            }
        case "TITLE":
            return {
                ...state,
                filterBy: "title"
            }
            
    
        default:
            return state
    }
}
export default filtersReducer