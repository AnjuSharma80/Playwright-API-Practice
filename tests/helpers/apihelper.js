export async function createPost(request,postData) {
    const response = await request.post('/posts',{
        data:postData
    });
    return response;
}

export async function getPost(request,postId){
    return await request.get(`/posts/${postId}`);

}

export async function updatePost(request,postId,UpdateData){
    return await request.put(`/posts/${postId}`,{
        data:UpdateData
    });

}

export async function deletePost(request,postId) {
    return await request.delete(`/posts/${postId}`);
}