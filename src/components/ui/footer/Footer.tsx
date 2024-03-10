import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex x-full justify-center text-center text-xs mb-10">
        <Link href='/'
        >
            <span className={`${ titleFont.className } antialiased font-bold`}>Teslo</span>
            <span>| shop</span>
            <span>© { new Date().getFullYear() }</span>
        </Link>

        <Link href='/' className="mx-3">
        Privacidad & Legal</Link>

        <Link href='/' className="mx-3">
        Ubicaciones</Link>
    </div>
  )
}
