const selectPosts = (posts, {filterBy, text})=>{
    return posts.filter((post)=>{
        return post.title.toLowerCase().includes(text)
    }).sort((a,b)=>{
        if (filterBy === "date") {
           return  a.createdAt < b.createdAt ? 1 : -1
        } else if ( filterBy === "title") {
            return a.title < b.title ? -1:1
        }
    })
}

export default selectPosts