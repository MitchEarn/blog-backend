const listHelper = require('../utils/list_helper')
const listWithOneBlog = [
    {
        id: '546060460',
        title: 'Mock Blog Title',
        author: 'John Smith',
        url: 'www.helloworld.com',
        likes: 10
    }
]

const listWithMultipleBlogs = [
    {
        id: '1',
        title: 'Mock Blog Title 1',
        author: 'Sally Smith',
        url: 'www.helloworld.com',
        likes: 2
    },
    {
        id: '2',
        title: 'Mock Blog Title 2',
        author: 'Harry Smith',
        url: 'www.helloworld.com',
        likes: 54
    },
    {
        id: '3',
        title: 'Mock Blog Title 3',
        author: 'Bill Smith',
        url: 'www.helloworld.com',
        likes: 7
    },
    {
        id: '4',
        title: 'Mock Blog Title 4',
        author: 'Laura Smith',
        url: 'www.helloworld.com',
        likes: 100
    }
]
test('dummy returns 1', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () => {


    test('when list has only one blog display its likes', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(10)
    })
    test('when list has multiple blogs add the likes together', () => {
        const result = listHelper.totalLikes(listWithMultipleBlogs)
        expect(result).toBe(163)
    })
    test('when list has no blogs result should equal 0', () => {
        const result = listHelper.totalLikes()
        expect(result).toBe(0)

    })
})

describe('favourite blog', () => {
    test('returns the blog with most likes from list', () => {
        const result = listHelper.favouriteBlog(listWithMultipleBlogs)
        expect(result.id).toEqual('4')
    })


})