import { createContext } from 'react';
import { Product } from "../interfaces/product";

interface ShoppingCart {
  addProduct: (product: Product) => void;
  getProducts: () => Product[];
  deleteProduct: (id: string) => void;
  getTotalValue: () => string;
  getTotalProducts: () => string;
  getShippingValue: () => string;
  clearAll:() => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCart);

const ShoppingCartProvider = ({ children }: any) => {

  const isBrowser = typeof window !== 'undefined';
  const SESSION_STORAGE = 'products';
  const SHIPPING_VALUE = 50;

  const addProduct = (product: Product) => {
    const products = getProducts();
    const findProducts = products.find(p  => p._id === product._id);
    if(findProducts) return;
    products.push(product);
    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(products));
    }
  }

  const getProducts = (): Product[] => {
    if(isBrowser) {
      const products = sessionStorage.getItem(SESSION_STORAGE);
      return products ? JSON.parse(products) : [];
    }
    return [];
  }

  const deleteProduct = (id: string) =>{
    const products = getProducts();
    const newProductList = products.filter(p => p._id !== id);
    if (isBrowser) {
      sessionStorage.setItem(SESSION_STORAGE, JSON.stringify(newProductList));
    }
  }

  const getTotalProducts = ():string =>{
    const products = getProducts();
    //aqui o reduce serve para somaar o valor dos produtos do carrinho, sendo acc o valor atual que começa em 0 e cur o valor do proximo produto
    const total = products.reduce((acc, cur) => acc + cur.price, 0 );
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);
  };

  const getShippingValue = ():string =>{
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(SHIPPING_VALUE);
  };

  const getTotalValue =  (): string =>{
    const products = getProducts();
    const total = products.reduce((acc, cur) => acc + cur.price, 0 );
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total + SHIPPING_VALUE);
  };

  const clearAll = (): void => {
    if(isBrowser) {
      sessionStorage.clear();
    }
  }
 

  return (
    <ShoppingCartContext.Provider value={{
      addProduct,
      getProducts,
      deleteProduct,
      getTotalValue,
      getTotalProducts,
      getShippingValue,
      clearAll }}>
      { children }
    </ShoppingCartContext.Provider>
  )
};

export default ShoppingCartProvider;