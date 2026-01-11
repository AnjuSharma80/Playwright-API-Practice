import{test,expect} from '@playwright/test';
import { request } from 'node:http';
//Recommended structure:
/*tests/
 ├── api/
 │    ├── smoke/
 │    ├── regression/
 ├── ui/
 ├── helpers/
 ├── utils/
*/
test('@smoke Day15 - Smoke GET posts',async({request})=>{
    const response = await request.get('/posts/1');
    expect(response.status()).toBe(200);

});

