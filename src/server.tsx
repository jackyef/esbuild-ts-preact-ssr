/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { h } from 'preact';
import renderToString from 'preact-render-to-string';
import express from 'express';

import { Layout } from './components/Layout';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const markup = renderToString(<Layout />);

  res.send(markup);
});

app.listen(port, () => {
  console.log(`Server started listening on port ${port}`);
});
