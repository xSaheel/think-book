import { IContent } from "@/components/create-post";

const BASE_URL = `${process.env.BASE_URL}/posts`;

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

export const publishPost = async (content: IContent, accessToken: string) => {
    try {
        const data = await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(content)
        });
        return data.json();
    } catch (err) {
        console.log('err: ', err);
    }
}

export const likePost = async (postId: string, accessToken: string) => {
    try {
        const data = await fetch(`${BASE_URL}/${postId}/like`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessToken}`
            },
        });
        return data.json();
    } catch (err) {
        console.log('err: ', err);
    }
}


export const getRepliesByPostId = async (id: string) => {
    try {
        const data = await fetch(`${BASE_URL}/${id}/reply`);
        return data.json();
    } catch (err) {
        console.log('err: ', err);
    }
}


export const publishReply = async (postId: string, content: IContent, accessToken: string) => {
    try {
        const data = await fetch(`${BASE_URL}/${postId}/reply`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(content)
        });
        return data.json();
    } catch (err) {
        console.log('err: ', err);
    }
}