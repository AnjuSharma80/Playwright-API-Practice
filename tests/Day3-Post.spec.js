import{test,expect,request} from '@playwright/test'

test('PostAPI-create user',async() =>{
   const apiContext = await request.newContext();

   const requestBody ={
    newName: 'Anjali Sharma',
    jobTitle:'Automation Tester',
    phone: 9991093289,
    email: 'anjali@test.com'
   };
   const response = await apiContext.post('https://jsonplaceholder.typicode.com/users',

   {
    data: requestBody
   }
);
//status code validation
expect(response.status()).toBe(201);

//read response body 
const responseBody = await response.json()
//validate response data
expect(responseBody.newName).toBe(requestBody.newName);
expect(requestBody.email).toBe(requestBody.email);

expect(responseBody).toHaveProperty('id');

console.log(responseBody);
});
 // if only run 1 test file in terminal so command is npx playwright test -g "Day-3 Post request API"//
test('Day-3 Post request API', async()=>{

   const apiContext = await request.newContext();
    const requestBody ={
      newName:'AnjuSharma',
      place: 'delhi',
      members:4,
      jobPlace:'noida'
    };

    const response = await apiContext.post('https://jsonplaceholder.typicode.com/users' ,
      {
          data:requestBody
    });

    expect(response.status()).toBe(201);
     //convert response to JSON
     const responseBody = await response.json()

     expect(responseBody.newName).toBe(requestBody.newName);
     expect(requestBody.place).toBe(requestBody.place);
     expect(responseBody).toHaveProperty('id');
     //expect(responseBody).toHaveProperty('createAt');

     console.log(responseBody);

});