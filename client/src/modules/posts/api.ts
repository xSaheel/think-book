import { IContent } from "@/components/create-post";

const BASE_URL = "http://localhost:9000/api/v1/posts"

export const getAllPosts = async () => {
    try {
        const data = await fetch(`${BASE_URL}`);
        return data.json();
    } catch (err) {
        console.log('err: ', err);
    }
}

export const getPostById = async (id: string) => {
    try {
        const data = await fetch(`${BASE_URL}/${id}`);
        return data.json();
    } catch (err) {
        console.log('err: ', err);
    }
}

export const publishPost = async (post: IContent, accessToken: string) => {
    try {
        const data = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(post)
        });
        return data.json();
    } catch (err) {
        console.log('err: ', err);
    }
}