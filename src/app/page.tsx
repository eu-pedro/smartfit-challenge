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
    </>
  )
}
