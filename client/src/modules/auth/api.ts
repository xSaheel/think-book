const BASE_URL = `${process.env.BASE_URL}/auth`;

export const getUserData = async (accessToken: string) => {
    try {
        const data = await fetch(`${BASE_URL}/user`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });
        return data.json();
    } catch (err) {
        console.log('err: ', err);
    }
}

export const loginUser = async (user: any) => {
    try {
        const data = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return data.json();
    } catch (err) {
        console.log('err: ', err);
    }
}

export const registerUser = async (user: any) => {
    try {
        const data = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return data.json();
    } catch (err) {
        console.log('err: ', err);
    }
}