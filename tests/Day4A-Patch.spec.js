import{test,expect,request} from '@playwright/test'

test ('patch- user email update',async()=> {
    const apiContext = await request.newContext();

    const patchBody ={
        email:'patch123.com'
    }

const response = await apiContext.patch('https://jsonplaceholder.typicode.com/users/1',
    {data: patchBody}
);

expect(response.status()).toBe(200)

const responseBody = await response.json();
expect(responseBody.email).toBe(patchBody.email);

console.log(responseBody);
    
});

