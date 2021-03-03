export const USER = 'USER';

export function setUserStorage(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function getStoredUserToken() {
    user = localStorage.getItem(USER);
    parsedUser = JSON.parse(user);

    if (parsedUser.token === undefined) {
        return {
            token: '',
        }
    }

    return parsedUser.token;
}