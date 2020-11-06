import {Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import {getProducts} from './controller/products.ts';
const router = new Router();
router.get('/sree',getProducts)
export default router;