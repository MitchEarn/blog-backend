const dummy = () => {
    return 1
}

const totalLikes = (blogs) => {
    let likes = 0
    if (blogs){
        blogs.forEach(blog => likes += blog.likes)
    }
    return likes
}

const favouriteBlog = (blogs) => {
    const sortedBlogs = blogs.sort((a, b) => {
            return a.likes - b.likes
        }).reverse()
    return sortedBlogs[0]
}

const mostBlogs = (blogs) => {
    let amountOfBlogs = 0
    let mostCommonAuthor = ''
    const authors = blogs.map(blog => blog.author)

    authors.forEach(author => {
        const matchingBlogs = blogs.filter(blog => blog.author === author).length
        if(matchingBlogs > amountOfBlogs){
            mostCommonAuthor = author
            amountOfBlogs = matchingBlogs
        }
    })
    return (
        {
            author: mostCommonAuthor,
            blogs: amountOfBlogs
        }
    )
}

const mostLikes = (blogs) => {
    let likes = 0
    let author = ''

    console.log(Object.values(blogs))

    const authors = blogs.map(blog => blog.author)

    authors.forEach(auth => {
        let authorLikes = 0
        blogs.forEach(blog => {
            if(blog.author === auth){
                authorLikes += blog.likes
            }
        })
        if (authorLikes > likes) {
            author = auth
            likes = authorLikes
        }
    })
    return {
        author: author,
        likes: likes
    }
}


module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs,
    mostLikes
}