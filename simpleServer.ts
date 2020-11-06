import {Application} from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import router from './router.ts';
const port = 3020;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log('server running on port 3020');
await app.listen({port});

