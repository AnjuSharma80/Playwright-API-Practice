import{test,expect,request} from '@playwright/test'


test('full update user detail' ,async() => {
    const apiContext = await request.newContext();

    const updateBody ={
        id : 1,
    newName: 'Anju Sharma',
    jobTitle:'Test Automation ',
    phone: 9991093000,
    email: 'anjali@test12.com',
    //we can addd more field on Put method
    isActive: 'Yes',
    homeMaker: 'Yes'
   };

   const response = await apiContext.put('https://jsonplaceholder.typicode.com/users/1',
    {data:updateBody}
   );

   expect(response.status()).toBe(200);

   const responseBody = await response.json();
   expect(responseBody.newName).toBe(updateBody.newName);
   expect(responseBody.phone).toBe(updateBody.phone);
   
   console.log(responseBody);
});

   test('Day4-Put_full update' , async() =>{

    const apiContext = await request.newContext();
    const putRequestBody = {
        id: 1,
        title: 'udate title using Put',
        body: 'This is the full update using put Api',
        userId: 1,
    };

    const response = await apiContext.put('https://jsonplaceholder.typicode.com/posts/1',
        {
          data: putRequestBody
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
     expect(responseBody.title).toBe(putRequestBody.title);
     expect(responseBody.body).toBe(putRequestBody.body);
     expect(responseBody.userId).toBe(putRequestBody.userId);

     console.log(responseBody);
   });

