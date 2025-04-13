import Image from 'next/image'
import CartIcon from './cart'
import { Menu } from './mobile-navigation'

function Navbar() {
  return (
    <nav>
      <div className="container  flex items-center justify-between border-b border-b-gray-300 h-18 lg:h-26 ">
        <div className="flex items-center gap-4 lg:gap-12">
          <div className='md:hidden'><Menu orientation='mobile' /></div>
          <Image
            src={'/images/logo.svg'}
            alt='cart_icon'
            width={100}
            height={80}
            className='w-32 lg:w-40' />
          <div className='hidden md:block'><Menu orientation='desktop' /></div>
        </div>
        <div className="flex items-center gap-4">
          <CartIcon />
          <Image
            src={'/images/image-avatar.png'}
            alt='cart_icon'
            width={40}
            height={40}
            className='lg:size-12 size-8' />
        </div>

      </div>
    </nav>
  )
}

export default Navbar
