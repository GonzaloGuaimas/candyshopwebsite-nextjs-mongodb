import React from 'react'
// import Product from '../models/Product'
import dbConnect from '../utils/dbConnect'
import { useEffect, useState } from 'react'
import { TableProducts } from '../components/catalog/TableProducts'
import products from '../utils/products.json'
import { NavBar } from '../components/NavBar'
import { FooterBar } from '../components/FooterBar'

export default function Home({ productos }: { productos: any }) {
    const [productsList, setProductsList] =  useState<any>([])
    useEffect(()=> {
        setProductsList(products)
        console.log(productos)
    },[])

  return (
    <div className='main-container-catalog'>
        <NavBar/>
        <TableProducts products={productsList}/>
        <FooterBar/>
    </div>
  )
}

export async function getServerSideProps() {
	await dbConnect()
	// const productsData = await Product.find({})
	// const products = productsData.map((doc) => {
	// 	const product = doc.toObject()
  //   product._id = product._id.toString()
	// 	return product
	// })
  
	return { props: { products: [] } }
  }