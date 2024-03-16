import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
  
    <div className="flex items-center gap-x-3 justify-start">
      <Image
    height={30}
    width={30}
    alt="logo"
    src="/logo.svg" 
    /> 
    <Link href="/">
    <span className="mt-2 text-2xl text-slate-600 font-bold" >JIESS</span>
    </Link>
    </div>

  )
}