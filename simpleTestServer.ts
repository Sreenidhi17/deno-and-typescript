import {Application, Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';
const port = 3020;
const app = new Application();
const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());
router.get('/sree',({ response }:{ response: any}) =>{
    response.body = 'hello world qq';
})
console.log('server running on port 3020');
await app.listen({port});