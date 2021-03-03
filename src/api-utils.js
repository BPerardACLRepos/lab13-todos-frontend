import request from 'superagent';

const URL = `https://lab-12-auth.herokuapp.com/todos`;

export async function userSignUp(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })

    return response.body;  //id, email, token
}