import{test,expect} from '@playwright/test';

test('Day14-Validate post on UI',async({page})=>{
    await page.goto('https://jsonplaceholder.typicode.com/posts/1');

     // Validate UI content
     const pageContent = await page.textContent('body');

     expect(pageContent).toContain('repellat provident occaecati');
})