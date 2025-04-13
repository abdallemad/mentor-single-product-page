'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { addToCart } from '@/redux/slice/cart-slice';
import { ShoppingBagIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function ProductCTA({ product }: { product: ProductType }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const increment = () => setAmount(p => p + 1);
  const decrement = () => {
    if (amount == 1) return;
    else setAmount(p => p - 1);
  }
  return (
    <div className='flex flex-col gap-12 max-lg:mb-20'>
      {/* TEXT SECTION */}
      <div className="flex flex-col gap-4">
        <h1 className="uppercase text-gray-700 font-semibold">
          {product.company}
        </h1>
        <h2 className="text-[32px] lg:text-4xl leading-[37px]
        lg:leading-[44px] capitalize font-bold text-gray-900">
          {product.title}
        </h2>
        <p className="text-gray-500">
          {product.description}
        </p>
      </div>
      {/* PRICE SECTION */}
      <div className="flex lg:flex-col justify-between max-lg:items-center">
        <h4 className="text-3xl font-bold flex gap-3">
          {formatPrice(product.final_price / 100)}
          <Badge className='self-end bg-gray-900'>
            {product.discount}%
          </Badge>
        </h4>
        <s className='text-gray-500'>
          <em>{formatPrice(product.price / 100)}</em>
        </s>
      </div>
      {/* CTA SECTION */}
      <div className="flex max-lg:flex-col w-full gap-5">
        <div className="flex justify-between bg-gray-100 items-center px-3 py-2 rounded-lg">
          <button
            disabled={amount == 1}
            onClick={decrement}
            className='self-stretch disabled:opacity-50 flex items-center justify-center cursor-pointer'>
            <Image
              src={'/images/icon-minus.svg'}
              alt='plus'
              width={20}
              height={20}
              className='w-4'
            />
          </button>
          <p className="text-gray-900 px-4">{amount}</p>
          <button
            onClick={increment}
            className='self-stretch flex items-center justify-center cursor-pointer'>
            <Image
              src={'/images/icon-plus.svg'}
              alt='plus'
              width={20}
              height={20}
              className='size-4'
            />
          </button>
        </div>
        <Button
          onClick={() => {
            console.log('fired')
            dispatch(
              addToCart({
                id: product.id,
                name: product.title,
                price: product.final_price,
                quantity: amount,
                thumbnail: product.assets[0].thumbnail
              })
            )
          }}
          className='h-12 min-w-[17rem]'>
          <ShoppingBagIcon className='size-4' />
          Add To Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductCTA
