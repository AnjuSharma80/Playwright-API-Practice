import{test,expect} from '@playwright/test';

test('Parallel Test 1 - GET post 1',async({request})=>{
    const response = await request.get('/posts/1');
    expect(response.status()).toBe(200);
});

test('Parallel Test 2 - GET post 2',async({request})=>{
    const response = await request.get('/posts/2');
    expect(response.status()).toBe(200);
});

test('Parallel Test 3 - GET post 1',async({request})=>{
    const response = await request.get('/posts/3');
    expect(response.status()).toBe(200);
});



