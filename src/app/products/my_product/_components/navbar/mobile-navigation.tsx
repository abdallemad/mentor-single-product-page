
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import Image from "next/image"

export function Menu({ orientation }: { orientation: "mobile" | 'desktop' }) {
  switch (orientation) {
    case "desktop":
      return (
        <ul
          className="flex items-center gap-4 text-gray-500 text-lg self-stretch ">
          {
            navLinks.map(l => (
              <li key={l} className='cursor-pointer self-stretch flex items-center hover:border-b-primary hover:border-b-2'>{l}</li>
            ))
          }
        </ul>
      )
    case "mobile":
      return (
        <Sheet >
          <SheetTrigger asChild>
            <Button variant="ghost" className="px-0">
              <Image
                src={'/images/icon-menu.svg'}
                alt='cart_icon'
                width={40}
                height={40}
                className='w-6' />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
            </SheetHeader>
            <ul
              className="flex items-start gap-12 font-bold text-xl flex-col px-8">
              {
                navLinks.map(l => (
                  <li key={l} className="cursor-pointer">
                    {l}
                  </li>
                ))
              }
            </ul>
          </SheetContent>
        </Sheet>
      )
  }
}