'use client'

import Link from "next/link";
import AuthInput from "./AuthInput";
import { useState } from 'react'

function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemenber] = useState(false)

    return (
        <form className="mt-7 flex flex-col gap-4 text-sm lg:text-base">
            <label className="lg:text-lg">Email e senha</label>
            <AuthInput setState={setEmail} state={email} isPassword={false} placeholder="Email" />
            <AuthInput setState={setPassword} state={password} isPassword placeholder="Senha" />
            <div className="flex gap-2">
                <div className="inline-flex items-center">
                    <label
                        className="relative flex items-center rounded-full cursor-pointer"
                        htmlFor="checkbox"
                        data-ripple-dark="true"
                    >
                        <input onClick={() => setRemenber(!remember)} id="checkbox" type="checkbox" className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-black-20 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black-20 checked:bg-black-20 checked:before:bg-black-20 hover:before:opacity-25" />
                        <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </label>
                </div>
                <label>Lembrar minha senha</label>
            </div>
            <Link href='#' className=" text-text-secundary text-sm self-end">Esqueceu sua senha?</Link>
            <div className="flex flex-col text-white gap-5">
                <button className="bg-black-10 flex gap-2 items-center justify-center py-3 rounded">Entrar<img src="./images/foward-icon.png" alt="Flecha apontando pra esquerda" /></button>
                <button className="bg-[#005BA1] flex gap-2  items-center justify-center py-3 rounded"><img src="./images/google-icon.png" alt="Icone do google" />Acessar com o Google</button>
            </div>
        </form>
    );
}

export default LoginForm;