import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cartStore";

export function addToCart(products: ProductCartProps[], newProduct: ProductProps) {
    const existingProduct = products.find(({id}) => newProduct.id === id)
    if(existingProduct){
      return products.map((product) => product.id === existingProduct.id ? 
      (
       {
          ...product,
          quantity: product.quantity + 1
       } 
      ) : product )}
   return [...products, {...newProduct, quantity: 1}]
}

export function removeToProduct(products: ProductCartProps[], productToRemove: string) {
    const updateProducts = products.map((product) => product.id === productToRemove ? {
      ...product,
      quantity: product.quantity > 1 ? product.quantity - 1 : 0
    } : product)
   
    return updateProducts.filter((product) => product.quantity > 0)
}