import {test,expect,request} from '@playwright/test';

test ('Response body validation and JSON struture', async() => {
     const apiContext = await request.newContext();
    

     const response =await apiContext.get('https://jsonplaceholder.typicode.com/users');
     
     
      //status code validation 
      expect(response.status()).toBe(200);

      //convert response to JSON
      const responseBody = await response.json()
       
        // validate array
  expect(Array.isArray(responseBody)).toBeTruthy();
  expect(responseBody.length).toBeGreaterThan(0);

  // validate first user object
  const user = responseBody[0];

  expect(user).toHaveProperty('id');
  expect(user).toHaveProperty('email');
  expect(user.email).toContain('@');

  // validate data types
  expect(typeof user.id).toBe('number');
  expect(typeof user.email).toBe('string');
        console.log(responseBody);

});