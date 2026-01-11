import{test,expect} from '@playwright/test';
import { request } from 'node:https';

test('Day9 - GET post using baseURL',async({request})=>{
    const response = await request.get('/posts/1');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.id).toBe(1);

    console.log(responseBody);
});