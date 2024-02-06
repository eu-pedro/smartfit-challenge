import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className="p-5 w-full flex items-center justify-center bg-black">
        <Image
          src="/icones/logo.svg"
          alt="Smartfit Logo"
          width={120}
          height={80}
        />
      </header>

      <div className="p-5">
        <h1 className="text-dark-gray mt-10 text-left uppercase">
          Reabertura da Smart Fit
        </h1>

        <div className="w-[100px] h-3 bg-dark-gray mt-5" />

        <p className="mt-5 text-justify">
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </div>

      <div className="p-5">
        <div className="border-2 border-solid border-gray-500 p-5">
          <div className="flex items-center gap-5">
            <Image
              src="/icones/icon-hour.png"
              alt="Ìcone de Relógio"
              width={50}
              height={50}
            />
            <p className="text-light-grey">Horário</p>
          </div>

          <div className="mt-5  border-b border-b-light-grey border-opacity-50">
            <h3 className="text-3xl w-[65%] text-light-grey opacity-95 font-normal pl-4 pb-4">
              Qual período quer treinar?
            </h3>
          </div>

          <div className="flex justify-between py-4 border-b border-solid border-b-light-grey border-opacity-50">
            <div className="flex gap-3">
              <input type="checkbox" />
              <p className="text-light-grey">Manhã</p>
            </div>
            <p className="text-light-grey">06:00 às 12:00</p>
          </div>

          <div className="flex justify-between py-4 border-b border-solid border-b-light-grey border-opacity-50">
            <div className="flex gap-3">
              <input type="checkbox" />
              <p className="text-light-grey">Tarde</p>
            </div>
            <p className="text-light-grey">12:01 às 18:00</p>
          </div>

          <div className="flex justify-between py-4 border-b border-solid border-b-light-grey border-opacity-50">
            <div className="flex gap-3">
              <input type="checkbox" />
              <p className="text-light-grey">Noite</p>
            </div>
            <p className="text-light-grey">18:01 às 23:00</p>
          </div>

          <div className="flex gap-4 mt-5">
            <input type="checkbox" />
            <p>Exibir unidades fechadas</p>
          </div>

          <p className="text-center mt-5">
            Resultados encontrados: <span className="font-bold">0</span>
          </p>

          <div className="flex flex-col p-5 gap-5">
            <button className="uppercase bg-yellow p-4 font-bold text-xl rounded-md">
              Encontrar Unidade
            </button>
            <button className="uppercase outline outline-2 outline-light-grey text-xl p-4 rounded-md font-bold">
              Limpar
            </button>
          </div>
        </div>
      </div>

      <div className="p-5">
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

        <div className="bg-[#F5F5F5] shadow-md rounded-md mt-6 p-3">
          <div className="border-b border-b-gray-300 pb-4">
            <h3 className="text-green">Aberto</h3>

            <h2 className="text-dark-gray">Vicente Linhares</h2>

            <span>Rua Tibúrcio Cavalcante, 1885 - Meirele</span>
            <p>Fortaleza, CE</p>
          </div>

          <div className="flex items-center justify-between px-5 gap-3 mt-5">
            <Image
              src="/icones/required-mask.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <Image
              src="/icones/required-towel.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <Image
              src="/icones/partial-fountain.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
            <Image
              src="/icones/forbidden-lockerroom.png"
              alt="Máscara Obrigatória"
              width={50}
              height={50}
            />
          </div>

          <div className="flex flex-col gap-5 p-5 items-start">
            <div className="flex items-center gap-5">
              <div className="flex-col">
                <h3 className="font-bold">Seg. à Sex.</h3>
                <span>06: ás 22h</span>
              </div>

              <div className="flex-col items-center gap-3">
                <h3 className="font-bold">Sáb.</h3>
                <span>09h às 18h</span>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="font-bold">Dom.</h3>
              <p>Fechada</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-dark-gray w-full p-7 flex flex-col items-center justify-center">
        <Image
          src="/icones/logo.svg"
          alt="Smartfit Logo"
          width={120}
          height={80}
        />

        <p className="text-white">Todos os direitos reservados - 2024</p>
      </footer>
    </>
  )
}
