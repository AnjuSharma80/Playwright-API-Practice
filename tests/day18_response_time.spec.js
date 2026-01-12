import{test,expect} from '@playwright/test';
import { request } from 'node:http';

// NOTES:- API performance testing:checking how fast an API responds under normal conditions.
//we usually do basic performance checks,not heavy load testing.
//SLA (Service Level Agreement) defines acceptable performance.
//GET /users should respond within 500 ms
//POST /orders within 800 ms
//Playwright provides response.timing()

test('Day18 - Validate API response time',async({request})=>{
    const startTime = Date.now();
    const response = await request.get('/posts/1');
    const endTime =Date.now();

    const responseTime = endTime - startTime;

    console.log('Response Time(ms):' , responseTime);
    expect(response.status()).toBe(200);
     
    // SLA check (example: must be < 500ms)
    expect(responseTime). toBeLessThan(500);


});

