import React from 'react'
import Product, { IProduct } from '../models/Product'
import dbConnect from '../utils/dbConnect'
import { useEffect, useState } from 'react'
import { TableProducts } from '../components/catalog/TableProducts'
import { NavBar } from '../components/NavBar'
import { FooterBar } from '../components/FooterBar'
import { Types } from 'mongoose'
type HomeProps = {
  products: [IProduct]
}
export default function Home({ products }: HomeProps) {
    const [productsList, setProductsList] =  useState<[IProduct]>(products)
    
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
	const productsRecords:IProduct[] = await Product.find({})
	const products = productsRecords.map((doc) => {
	  const product = doc.toObject()
    product._id = (product._id as Types.ObjectId).toString()
	  return product
	})

	return { props: { products } }
  }