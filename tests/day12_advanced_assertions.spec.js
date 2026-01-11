import{test,expect,request} from '@playwright/test'

test('Day12 - Advanced response assertions',async()=>{
const apiContext = await request.newContext();
const response = await apiContext.get('/users');

expect(response.status()).toBe(200);

const responseBody = await response.json();

//Array Validations
expect(Array.isArray(responseBody)).toBe(true);
expect(responseBody.length).toBeGreaterThan(0);

//Validation of each object in array
for(const user of responseBody){
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');

    //validation of data type
    expect(typeof user.id).toBe('number');
    expect(typeof user.name).toBe('string');
    expect(user.email).toContain('@');
};

});