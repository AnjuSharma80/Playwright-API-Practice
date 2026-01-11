import{test,expect} from '@playwright/test'

test('Day6-Chaning apis',async({request}) =>{
     
    const createResponse = await request.post('https://jsonplaceholder.typicode.com/posts',
        {
           data: {
            first_Name: 'aayansh',
            last_Name: 'sharma',
            class: 6,
            userId: 5,
           }
    });

    expect(createResponse.status()).toBe(201);
    

     const responseBody = await createResponse.json();
      const postId = responseBody.id;

     expect(postId).toBeTruthy();
     console.log('Create post ID:',postId);


     //GET post using id

     const getResponse = await request.get('https://jsonplaceholder.typicode.com/posts/101');

     //ID 101 is not exist on jsonplaceholder,so we can check negative testcase 404
     expect(getResponse.status()).toBe(404);
     
     const getResponseBody = await getResponse.json();
     //expect(getResponseBody.id).toBe(postId);

     //update data using PUT method
     const putResponse = await request.put('https://jsonplaceholder.typicode.com/posts/101',{
        data: {
            id:postId,
            first_Name: 'aayansh Ravi',
            last_Name: 'sharan sharma',
            class: 7,
            userId: 5,
           }
        });
//post-fake ID and put-update fake ID so 500 Internal server error 
           expect(putResponse.status()).toBe(500);

           //delete data using Delete method
           const deleteResponse = await request.delete('https://jsonplaceholder.typicode.com/posts/101')

           expect(deleteResponse.status()).toBe(200);
     });




