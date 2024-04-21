import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';
import { ExampleComponent, FormComponent } from '../components/components';

const home = new Hono();

// Pages
home.get('/', async (c) => {
  return c.render(
    <div>
      <ExampleComponent />
      <br />
      <FormComponent />
    </div>,
  );
});

// Requests
home.get('/example', async (c) => {
  return c.text('Hello !');
});

home.post(
  '/contact',
  zValidator(
    'form',
    z.object({
      email: z.string(),
      firstName: z.string(),
      lastName: z.string(),
    }),
  ),
  async (c) => {
    // const data = await c.req.formData()
    const body = await c.req.parseBody();
    console.log(body);
    return c.json(body);
  },
);

export default home;
