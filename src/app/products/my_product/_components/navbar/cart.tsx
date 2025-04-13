'use client'
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { formatPrice } from '@/lib/utils';
import { removeFromCart } from '@/redux/slice/cart-slice';
import { RootState } from '@/redux/store';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

function CartIcon() {
  const dispatch = useDispatch();
  const { items: products,  } = useSelector((s: RootState) => s.cart);

  const totalAmount = products.reduce((acc, curr) => {
    return acc + (curr.quantity);
  }, 0);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={'ghost'} size={'icon'} className='relative'>
          {totalAmount > 0 && (
            <div className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-primary size-6 text-white rounded-full flex items-center justify-center'>
              {totalAmount}
            </div>
          )}
          <Image
            src={'/images/icon-cart.svg'}
            alt='cart_icon'
            width={40}
            height={40}
            className='lg:size-6 size-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-sm'>
        <div className="">
          <h2 className="font-bold text-xl p-4 border-b ">Cart</h2>
        </div>
        {
          products.length > 0 ? <>
            {products.map(p => (
              <DropdownMenuItem key={p.id} className='p-2 flex items-center gap-2 justify-between'>
                <div className="">
                  <img src={p.thumbnail} alt="product" className='size-20 rounded-lg' />
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="text-gray-500 text-base">{p.name}</h5>
                  <div className="flex items-center gap-2">
                    <p className='text-gray-400'>
                      {formatPrice(p.price / 100)}X{p.quantity}
                    </p>
                    <p className='font-bold text-black'>
                      {formatPrice(p.price * p.quantity / 100)}
                    </p>
                  </div>
                </div>
                <Button
                  variant={'ghost'}
                  onClick={() => {
                    dispatch(removeFromCart(p.id))
                  }}
                  size={'icon'}>
                  <Trash className='size-6 text-gray-500' />
                </Button>
              </DropdownMenuItem>
            ))}
            <Button className='w-full my-2'>
              Checkout
            </Button>
          </> : <p className='w-full h-40 grid place-content-center text-gray-500'>
            Your Cart is empty
          </p>
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CartIcon
