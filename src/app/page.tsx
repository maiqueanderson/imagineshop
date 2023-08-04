
import Banner from "./components/Banner"

import BannerImage from '../../public/banner01.png';

import Products from "./components/Products";


//aqui é para pegar as informações do banco de dados e conectar a API
async function getProducts() {
  const res = await fetch('http://localhost:3333/products');

 
  if (!res.ok) {
  
    throw new Error('Failed to fetch data')
  }
  
  const productsData: any[] = await res.json();
  productsData.forEach(product => {
    product.image = `http://localhost:3333/uploads/${product.fileName}`;
    //aqui é para pegar o valor do produto e converter em para mostrar em nossa moeda BRL
    product.formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price);

  });
  console.log(productsData); 
  return productsData;
}

export default async function Home() {
  //aqui é para usar o banco de dados no projeto
  const data = await getProducts()
  return (
   <main>
     <Banner image={BannerImage} width={1140} height={325}/>
    <Products/>
   </main>
  )
}

