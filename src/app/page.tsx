import { ModeToggle } from "@/components/theme/toggle-theme";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold">
          Welcome to Front end mentor
        </h1>
        <Link href={'/products/my_product'} className={buttonVariants({className:"w-full"})}>
          See Work
        </Link>
        <ModeToggle></ModeToggle>
      </div>
    </main>
  );
}
