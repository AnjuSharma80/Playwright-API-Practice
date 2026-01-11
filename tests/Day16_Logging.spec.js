import{test,expect} from '@playwright/test';


test('Day16 - Logging example',async({request})=>{
    const response = await request.get('/posts/1');
    console.log('status:', response.status());

    const body = await response.json();
    console.log('Response Body:' , body );

    expect(body.id).toBe(1);
})