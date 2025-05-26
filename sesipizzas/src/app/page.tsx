import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row items-start h-screen px-10">
      {/* Imagem à esquerda */}
      <div className="w-1/2">
        <Image
          src={""}
          alt="Pizza artesanal"
          width={600}
          height={600}
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
        <button></button>
      </div>
    </div>
  );
}
