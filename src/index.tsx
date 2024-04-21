import { Hono } from 'hono';
import { html } from 'hono/html';
import { jsxRenderer } from 'hono/jsx-renderer';
import home from './pages/home';

const app = new Hono();

const renderer = jsxRenderer(({ children }) => {
  return html`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://unpkg.com/htmx.org@1.9.11"
          integrity="sha384-0gxUXCCR8yv9FM2b+U3FDbsKthCI66oH5IA9fHppQq9DDMHuMauqq1ZHBpJxQ0J0"
          crossorigin="anonymous"
        ></script>
        <title>Hono + htmx</title>
      </head>
      <body>
        <h1>Hello</h1>
        ${children}
      </body>
    </html>
  `;
});

app.get('*', renderer);

// Pages
app.route('/', home);

export default app;
