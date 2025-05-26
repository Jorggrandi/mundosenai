
import Image from "next/image"
import Link from "next/link"

export default function Header(){
    return (
        <header className="flex font-bold justify-between items-center mx-full w-full h-16 bg-zinc-800 text-neutral-50 ">
              <div id="logo">

              </div>
        <nav>
            <ul className="flex gap-5 mr-9 text-xl">
                <li className="border border-white border rounded-lg p-2" ><Link href="/">Home</Link></li>
                <li className="border border-white border rounded-lg p-2"><Link href="/pedidos">Fazer pedido</Link></li>
                <li className="border border-white border rounded-lg p-2"><Link href="/sobre">Sobre</Link></li>
            </ul>
        </nav>
        </header>
    )
}