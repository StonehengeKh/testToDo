
const API = 'https://jsonplaceholder.typicode.com/';

export const getPosts = async () => {
    const response = await fetch(`${API}posts`)
    const posts = await response.json()
    return posts;
}

export const getComments = async (postId) => {
    const response = await fetch(`${API}posts/${postId}/comments`)
    const posts = await response.json()
    return posts;
}

export const createPost = async (sendData) => {
    const response = await fetch(`${API}posts`, {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const post = await response.json()
    return post
}

export const editPost = async (updateData) => {
    const response = await fetch(`${API}posts/${updateData.id}`, {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const posts = await response.json()
    return posts
}

export const deletePost = async (id) => {
    // console.log('Id===>', id)
    const response = await fetch(`${API}posts/${id}`, {
        method: 'DELETE',
    })
    const posts = await response.json()
    return posts
}
