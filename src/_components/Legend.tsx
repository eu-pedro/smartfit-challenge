import Image from 'next/image'

export function Legend() {
  return (
    <>
      <div className="bg-[#F5F5F5] p-5 flex flex-col">
        <p className="mt-6 font-bold text-center mb-4 text-xl">Máscara</p>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/icones/required-mask.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <span className="font-normal">Obrigatório</span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/icones/recommended-mask.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <span className="font-normal">Recomendado</span>
          </div>
        </div>

        <p className="mt-6 font-bold text-center mb-4 text-xl">Toalha</p>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/icones/required-towel.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <span className="font-normal">Obrigatório</span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/icones/recommended-towel.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <span className="font-normal">Recomendado</span>
          </div>
        </div>

        <p className="mt-6 font-bold text-center mb-4 text-xl">Bebedouro</p>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/icones/partial-fountain.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <span className="font-normal">Parcial</span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/icones/forbidden-fountain.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <span className="font-normal">Proibido</span>
          </div>
        </div>

        <p className="mt-6 font-bold text-center mb-4 text-xl">Vestiários</p>
        <div className="flex justify-center gap-5">
          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/icones/required-lockerroom.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <span className="font-normal">Liberado</span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/icones/partial-lockerroom.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <span className="font-normal">Parcial</span>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <Image
              src="/icones/forbidden-lockerroom.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <span className="font-normal">Fechado</span>
          </div>
        </div>
      </div>
    </>
  )
}
