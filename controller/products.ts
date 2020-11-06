import { Product } from '../types.ts';

let products: Product[] =[
    {
        id : "01",
        name : "one",
        desc : "this is one",
        cost : 10.00,
    },
    {
        id : "02",
        name : "two",
        desc : "this is two",
        cost : 20.00,
    },
    {
        id : "03",
        name : "three",
        desc : "this is three",
        cost : 30.00,
    }

];

// @desc Get all products
// @route GET /sree

const getProducts = ({ response }:{ response: any}) => {
    response.body ={
        success : true,
        data : products
    }
}
export {getProducts}