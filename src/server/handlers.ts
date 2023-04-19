import '@testing-library/jest-dom';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { rest } from 'msw';

export const mockCardwithName = {
  id: 'string',
  title: 'string',
  url: 'string',
  shops: [],
  price: 'string',
  stockurl: 'string',
  tags: [''],
};

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get(`https://eva-images-json-server.vercel.app/cards/?title_like=horse`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json<typeof mockCardwithName>(mockCardwithName))
  ),
  rest.get(`https://eva-images-json-server.vercel.app/cards/`, (req, res, ctx) => {
    if (req.url.searchParams.get('name.first_like') === 'string') {
      return res(ctx.json<typeof mockCardwithName>(mockCardwithName));
    }

    return res(ctx.json<(typeof mockCardwithName)[]>([]));
  }),
];
