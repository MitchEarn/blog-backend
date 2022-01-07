const dummy = (blogs) => {
    return 1
}

// Come back and do exercise 4.6 and 4.7

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

    console.log(sortedBlogs)
    return sortedBlogs[0]
}


module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
}