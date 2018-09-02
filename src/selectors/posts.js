const selectPosts = (posts, {filterBy, text})=>{
    const searchPosts = posts.filter((post)=>{
        return post.title.toLowerCase().includes(text)
    })
    if (filterBy ==="date") {
        return searchPosts.sort((a,b)=>{
            return a.createdAt<b.createdAt?1:-1
        })
    } else if (filterBy==="title"){
        return searchPosts.sort( (a, b)=> {
            const x = a.title.toLowerCase();
            const y = b.title.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        }); 
    }
    
}

export default selectPosts