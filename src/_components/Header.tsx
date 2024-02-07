import Image from 'next/image'

export function Header() {
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
    </>
  )
}
