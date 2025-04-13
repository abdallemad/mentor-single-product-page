'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Define a type for the assets prop
interface Asset {
  thumbnail: string;
  image: string;
}

interface ProductCarouselProps {
  assets: Asset[];
  buttonsOffsets?: {
    prev: string;
    next: string
  };
}

function ProductCarousel({ assets, buttonsOffsets={next:'right-4', prev:'left-4'} }: ProductCarouselProps) {
  // Optional: Handle empty assets case
  if (!assets || assets.length === 0) {
    return <p>No images available</p>; // Or some fallback UI
  }

  return (
    <Carousel className=''>
      <CarouselContent>
        {assets.map((asset, index) => (
          <CarouselItem
            key={asset.image || `carousel-item-${index}`}
            className='aspect-[10/9]'
          >
            <div className='w-full h-full '>
              <Image
                src={asset.image}
                alt={asset.thumbnail || 'Product image'}
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={cn('z-50 size-12 ', buttonsOffsets.prev)} />
      <CarouselNext className={cn('z-50 size-12', buttonsOffsets.next)} />
    </Carousel>
  );
}

export default ProductCarousel;