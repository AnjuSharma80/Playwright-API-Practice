import{test,expect} from '@playwright/test';
import { request } from 'node:http';

test('Day16 - Attach API response',async({request},testInfo)=>{   //testInfo → used to add attachments to the report
    const response = await request.get('/posts/1');
    const body = await response.json();

    //Taking a screenshot of API data and attaching it to a test report for proof.
    await testInfo.attach('API Response',{
        body:JSON.stringify(body,null,2),//Converts JSON into pretty formatted text.
        //null: no filter, 2:indentation for readability
        contentType:'application/json' //means This attachment is JSON data”
    });
    expect(response.status()).toBe(200);

});