import{test,expect} from '@playwright/test';
import{createPost,getPost,updatePost,deletePost}from './helpers/apihelper';



let postId

test.beforeAll(async({request})=>{
    const response = await createPost(request,{
        title:'Post created in beforeAll',
        body:'this post is created once',
        userId:1
    });

    const responseBody = await response.json()
    postId= responseBody.id;
});

test('Day10 - GET post using helper',async({request})=>{
    const response = await getPost(request,postId);
    expect(response.status()).toBe(200);
});

test('Day10 - UPDATE post using helper',async({request})=>{
    const response = await updatePost(request,postId,{
       id:postId,
       title: 'Updated using helper',
       body: 'Updated body',
       userId: 1   
});
expect(response.status()).toBe(200);
});

test.afterAll(async({request}) => {
    await deletePost(request,postId);
    console.log('Post deleted in afterAll');
});

/*The API was blocked by Cloudflare bot protection.
Playwright APIRequestContext cannot solve JS challenges, so auth endpoints on ReqRes return 403.*/