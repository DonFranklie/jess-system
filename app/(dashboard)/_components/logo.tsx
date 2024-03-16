import Image from "next/image";

export const Logo = () => {
  return (
  
    <div className="flex items-center gap-x-3 justify-start">
      <Image
    height={30}
    width={30}
    alt="logo"
    src="/logo.svg" 
    /> 
    <span className="mt-2 text-2xl text-slate-600 font-bold" >JIESS</span>

    </div>

  )
}