import{test,expect} from '@playwright/test';
import postData from './test-data/postData.json';
import { generateRandomTitle, generateRandomBody } from './utils/dataGenerator';


test('Day8 - Create post using external & dynamic test data',async({request})=>{
const requestBody = {
    title:generateRandomTitle(),
    body:generateRandomBody(),
    userId:postData.createPost.userId
};
const response = await request.post('https://jsonplaceholder.typicode.com/posts',{
    data: requestBody
});
expect(response.status()).toBe(201);

const responseBody = await response.json();
expect(responseBody.title).toBe(requestBody.title);
expect(responseBody.body).toBe(requestBody.body);
expect(responseBody.userId).toBe(requestBody.userId);
console.log('created post:',requestBody)
});