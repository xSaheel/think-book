const BASE_URL = "http://localhost:9000/api/v1/posts"

export const getAllPosts = async () => {
    try {
        const data = await fetch(`${BASE_URL}`);
        return data;
    } catch (err) {
        console.log('err: ', err);
    }
}

export const getPostById = async (id: string) => {
    try {
        const data = await fetch(`${BASE_URL}/${id}`);
        return data;
    } catch (err) {
        console.log('err: ', err);
    }
}

export const publishPost = async (post: any) => {
    try {
        const data = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: post
        });
        return data;
    } catch (err) {
        console.log('err: ', err);
    }
}