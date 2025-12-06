import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import pug from 'pug';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req: Request, res: Response) => {
  const input: string = req.body.username || '';

  const template = `
doctype
html
head
    title Hello world
body
    form(action='/' method='post')
        input#username.form-control(type='text' name='username' value='${input}')
        button.btn.btn-primary(type='submit') Submit
    p Hello ${input}`;

  const fn = pug.compile(template);
  const html: string = fn();
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;
