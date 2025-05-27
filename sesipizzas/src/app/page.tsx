import Image from "next/image";
import ClientReviews from "./components/avaliações/review";


export default function Home() {
  return (
    <main>
    <div className="flex flex-row items-start h-screen px-10">
      {/* Imagem à esquerda */}
      <div className="w-1/2">
        <Image
          src="/images/image.png"
          alt="Pizza artesanal"
          width={500}
          height={500}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Texto à direita */}
      <div className="w-1/2 pl-10 mt-19">
        <h1 className="text-3xl font-bold mb-4">
          Sabores que encantam, momentos que conectam
        </h1>
        <p className="text-lg">
          Descubra a verdadeira paixão por pizzas artesanais, preparadas com
          ingredientes frescos e entregues com carinho.
        </p>
        <span className="mt-4 text-lg">
          A Pizzaria di Fagioli nasceu com uma missão: unir alta performance e o melhor sabor. Com processos otimizados e ingredientes selecionados, entregamos pizzas artesanais com rapidez, sem abrir mão da qualidade.

          tradição e tecnologia lado a lado, para levar até você uma experiência única - saborosa e eficiente.  
        </span>
     </div>
    </div>

    <div>
        <p className="text-center font-black text-3xl">Avaliações</p>
        <ClientReviews/>
    </div>
    </main>
  );
}
