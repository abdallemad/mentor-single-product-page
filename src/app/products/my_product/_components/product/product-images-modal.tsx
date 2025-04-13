import React from 'react'
import {
  Dialog,
  DialogContent
} from '@/components/ui/dialog'
import ProductCarousel from './product-carousal';

interface Props {
  isOpen: boolean;
  close: () => void;
  assets:{
    thumbnail: string;
    image: string;
  }[]
}

function ProductImagesModal({isOpen, close, assets}:Props) {
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className='bg-transparent border-transparent'>
        <ProductCarousel buttonsOffsets={{prev:'-left-12', next:'-right-12'}} assets={assets} />
      </DialogContent>
    </Dialog>
  )
}

export default ProductImagesModal
