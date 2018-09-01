import database from "../firebase/firebase";

export const createPost = (post)=>({
    type: "ADD_POST",
    post
})

export const startCreatePost = (postData={})=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid
        const  {title="", body="", createdAt=undefined} = postData
        const post = {title,body,createdAt}
        return database.ref(`users/${uid}/posts`).push(post).then((ref)=>{
            dispatch(createPost({
                id: ref.key,
                ...post
            }))
        })
    }
}

export const removePost = (id)=>({
    type: "REMOVE_POST",
    id
})
export const startRemovePost = (id)=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/posts/${id}`).remove().then(()=>{
            dispatch(removePost(id))
        })
    }
}


export const editPost = (id, changes)=>({
    type: "EDIT_POST",
    id,
    changes
})

export const startEditPost = (id, changes) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/posts/${id}`).update(changes).then(() => {
            dispatch(editPost(id, changes))
        })
    }
}

export const setPosts = (posts)=>({
    type: "SET_POSTS",
    posts
})
export const startSetPosts = ()=>{
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/posts`).once("value").then((snapshot)=>{
            const posts = []
            snapshot.forEach(element => {
                posts.push({
                    id: element.key,
                    ...element.val()
                })
            });
            dispatch(setPosts(posts))
        })
    }
}
