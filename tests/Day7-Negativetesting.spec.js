//Negative api testing(error and edge cases)
import {test,expect,request} from '@playwright/test'

test('Day7-GET non-existing post should return 404', async()=>{

    const apiContext = await request.newContext()
     
    const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/999999')

    expect(response.status()).toBe(404);

});

test('Day7 - POST with empty request body',async()=>{
    const apiContext = await request.newContext()
    const response = await apiContext.post('https://jsonplaceholder.typicode.com/posts',{
        data:{}
    });

    expect(response.status()).toBe(201)

    const responseBody = await response.json();
    expect(responseBody.id).toBeTruthy();
    console.log('response',responseBody);
})

