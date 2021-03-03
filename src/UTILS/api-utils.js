import request from 'superagent';

const URL = `https://lab-12-auth.herokuapp.com/todos`;

export async function userSignUp(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })

    return response.body;  //id, email, token
}

export async function userSignIn(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send(email, password)

    return response.body;
}

export async function getAllUserTodos(token) {
    const response = await request
        .get(`${URL}/api/todos`)
        .set('Authorization', token)

    return response.body;
}

export async function getSingleUserTodo(id, token) {
    const response = await request
        .get(`${URL}/api/todos/${id}`)
        .set('Authorization', token)

    return response.body;
}

export async function completeUserTodo(id, token) {
    const response = await request
        .put(`${URL}/api/todos/${id}`)
        .set('Authorization', token)

    return response.body;
}

export async function addUserTodo(todo, token) {
    const response = await request
        .post(`${URL}/api/todos`)
        .set('Authorization', token)
        .send({ todo })

    return response.body;
}

export async function deleteUserTodo(id, token) {
    const response = await request
        .delete(`${URL}/api/todos/${id}`)
        .set('Authorization', token)

    return response.body;
}