import {test,expect,request} from '@playwright/test'

test ('Get user API',async({}) =>{
const apiContext = await request.newContext();

const response = await apiContext.get('https://jsonplaceholder.typicode.com/users/1');

//status code validation
expect(response.status()).toBe(200);

//read response body 
const responseBody = await response.json();

//basic validations
expect(responseBody.id).toBe(1);
//expect(responseBody.length).toBeGreaterThan(0);
expect(responseBody).toHaveProperty('email');
console.log(responseBody);

});