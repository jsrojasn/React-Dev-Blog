const postsReducerDefault = []
const postsReducer = (state=postsReducerDefault, action)=>{
    switch (action.type) {
        case "ADD_POST":
            return [...state, action.post]
        
        case "REMOVE_POST": 
            return state.filter((post)=>{
                if (post.id === action.id) {
                    return false
                } else {
                    return true
                }
            }) 

        case "EDIT_POST":
            return state.map((post)=>{
                if (post.id===action.id) {
                    return {
                        ...post,
                        ...action.changes
                    }
                } else {
                    return post
                }
            })
            
        case "SET_POSTS":
            return action.posts
    
        default:
            return state
    }
}
export default postsReducer