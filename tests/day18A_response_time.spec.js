import{test,expect,request} from '@playwright/test';

test('Day18 - Response timing using Playwright', async()=>{
    const apiContext = await request.newContext();

    const response = await apiContext.get('/posts/2');
    expect(response.status()).toBe(200);

    const responseTiming = response.timing();
    console.log('Timing Detail:' , responseTiming);
    // Total time spent waiting for response
    expect(responseTiming.responseEnd).toBeLessThan(800); //responseEnd gives end-to-end timing.

});

//TypeError: response.timing is not a function
//getting this error because the API you’re using does not support response.timing().