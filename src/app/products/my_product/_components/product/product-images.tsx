'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { anime, cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react'
import ProductImagesModal from './product-images-modal';

type Props = {
  assets: {
    thumbnail: string
    image: string
  }[]
}

function ProductImages({ assets }: Props) {
  const subAssets = assets.slice(0, 4)
  const [activeImage, setActiveImage] = useState(assets[0]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ProductImagesModal assets={assets} isOpen={modalOpen} close={() => setModalOpen(false)} />
      <div className='flex flex-col'>

        <AnimatePresence mode='wait'>
          <motion.img
            {...anime(imageVariants)}
            onClick={() => setModalOpen(true)}
            key={activeImage.image}
            src={activeImage.image}
            alt='product'
            className='w-full rounded-xl cursor-pointer'
          />
        </AnimatePresence>
        
        <ul className='flex justify-between gap-3 mt-4'>
          {subAssets.map((asset, index) => {
            const active = asset.thumbnail === activeImage.thumbnail;
            return (
              <li
                key={`${index}-${asset.thumbnail}`}
                onClick={() => setActiveImage(asset)}
                className={cn('rounded-lg cursor-pointer relative w-1/4 overflow-hidden h-20', {
                  'border-2 border-primary': active
                })}>
                <Image
                  src={asset.thumbnail}
                  alt={asset.thumbnail || 'Product image'}
                  width={100}
                  height={100}
                  layout="responsive"
                  className='object-cover ' />
                <div className={cn('absolute inset-0 pointer-events-none bg-white/70 z-50', {
                  'opacity-0': !active
                })} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
const imageVariants = {
  initial: { y: 50, opacity: 0.4 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 }
}
export default ProductImages


