import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex">
      <div className='w-[14px] h-screen bg-red-credify'></div>
      <div className="bg-white w-full md:w-2/5 h-screen flex items-center justify-center">
        <div className="w-3/4 flex flex-col">
          <img src="./images/logo-credify.png" alt="Logo da credify" className="max-w-xs max-h-20 mb-10" />
          <h1 className="text-2xl lg:text-3xl">Acesso a conta</h1>
          <span className=" lg:text-xl text-text-secundary">Informe suas credenciais</span>
          <LoginForm />
          <div className="flex whitespace-nowrap justify-center gap-2 text-xs lg:text-base xl:text-xl pt-20">
            <span>Ainda não tem conta?</span>
            <Link href='#' className="text-[#014100]">Cadastre-se agora</Link>
          </div>
          <Link href='#' className="pt-16 self-center text-xs lg:">Política de Privacidade</Link>
        </div>
      </div>
      <div className="hidden md:block bg-[url('/images/credify-background.png')] w-3/5 bg-no-repeat bg-cover bg-center min-h-screen" />
    </main>
  )
}
