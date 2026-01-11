import { test, expect } from '@playwright/test';

test(' Day15 - Regression CRUD flow', async ({ request }) => {

  const createRes = await request.post('/posts', {
    data: { title: 'Reg test', body: 'Full flow', userId: 1 }
  });
  expect(createRes.status()).toBe(201);

  const postId = (await createRes.json()).id;

  const getRes = await request.get(`/posts/${postId}`);
  expect(getRes.status()).toBe(200);

  const deleteRes = await request.delete(`/posts/${postId}`);
  expect(deleteRes.status()).toBe(200);
},{ tag: '@regression' });



