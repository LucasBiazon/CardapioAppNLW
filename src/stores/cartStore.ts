import { ProductProps } from "@/utils/data/products";
import { create  } from "zustand";
import * as cartInMemory from "./helpers/cartInMemory";

export type ProductCartProps =  ProductProps &{
  quantity: number;
}

type StateProps ={
  products: ProductCartProps[];
  addToCart: (product: ProductProps) => void;
  removeToProduct: (product: ProductCartProps) => void;
}

export const useCartStore = create<StateProps>((set) => ({
  products: [],
  addToCart: (product: ProductProps ) => set((state) => ({
    products: cartInMemory.addToCart(state.products, product)
  })),
  removeToProduct: (product: ProductCartProps) => set((state) => ({
    products: cartInMemory.removeToProduct(state.products, product.id)
  })),
}))

