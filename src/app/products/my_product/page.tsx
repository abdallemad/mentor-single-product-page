import React from 'react'
import Navbar from './_components/navbar'
import ProductCarousel from './_components/product/product-carousal'
import { Product } from '@/constants'
import ProductCTA from './_components/product/cta'
import ProductImages from './_components/product/product-images'
function Page() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='lg:hidden mb-4'>
        <ProductCarousel assets={Product.assets} />
      </div>
      <div className="container flex-1 lg:flex items-center justify-center">
        <div className='grid lg:grid-cols-2 items-center gap-20'>
          <div className="lg:col-span-1 hidden lg:block">
            <ProductImages assets={Product.assets} />
          </div>
          <div className="lg:col-span-1">
            <ProductCTA product={Product} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
