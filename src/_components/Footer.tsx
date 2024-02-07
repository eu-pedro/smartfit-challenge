import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-dark-gray w-full p-7 flex flex-col items-center justify-center">
      <Image
        src="/icones/logo.svg"
        alt="Smartfit Logo"
        width={120}
        height={80}
      />

      <p className="text-white">Todos os direitos reservados - 2024</p>
    </footer>
  )
}
