import{test,expect} from '@playwright/test';
import Ajv from 'ajv';
import userSchema from './schema/postSchema.json';




const ajv = new Ajv();

test('Day12 - Schema validation for users API', async ({ request }) => {
 
const response = await request.get('/users');
expect(response.status()).toBe(200);

const responseBody = await response.json();

const validate = ajv.compile(userSchema);

for(const user of responseBody) {
    const isValid = validate(user);
    expect(isValid). toBe(true);
};

});

