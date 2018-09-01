export const searchText = (text)=>({
    type: "SEARCH",
    text
})

export const filterByDate = ()=>({
    type: "DATE"
})

export const filterByTitle = () => ({
    type: "TITLE"
})