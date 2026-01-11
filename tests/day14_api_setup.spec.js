import{test,expect} from '@playwright/test';

let postId;
let postTitle;

test('Day14-create post using API setup',async({request})=>{
    postTitle = `Hybrid_Post_${Date.now()}`;

    const response = await request.post('/posts',{
        data :{
            title: postTitle,
            body:'Created via API for UI validation',
            userID: 1

        }
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    postId= responseBody.id;

    console.log('Created post ID',postId);
});