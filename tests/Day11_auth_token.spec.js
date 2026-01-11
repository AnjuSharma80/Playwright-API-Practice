import{test,expect} from '@playwright/test';
import { getAuthToken } from './helpers/Authhelper';
import { request } from 'node:http';

let token;

test.beforeAll(async({request})=>{
    token= await getAuthToken(request);
    console.log('Generate Token:',token);
});

test('Day11 - Access secured API using token',async({request})=>{

    const response = await request.get('https://reqres.in/api/users/2',{
        headers: {
            Authorization: `Bearer${token}`
        }  
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.data.id).toBe(2);
})
