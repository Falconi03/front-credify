'use client'

import {useState} from 'react'
import AuthInput from './AuthInput';

function FormEmailRegister() {

    const [email, setEmail]=useState("")
    const [confirmEmail, setConfirmEmail]=useState("")

    function ValidateEmail() {
        console.log('teste')
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (email.match(validRegex)) {
      
          alert("Valid email address!");
      
      
          return true;
      
        } else {
      
          alert("Invalid email address!")
      
          return false;
      
        }
      
      }

    return ( 
        <form className="mt-7 flex flex-col gap-4 text-sm ">
            <AuthInput setState={setEmail} state={email} type="text" placeholder="Email" label="Email"/>
            <AuthInput setState={setConfirmEmail} state={confirmEmail} type="text" placeholder="Confirme seu email" label="Confirme seu email" />
            <div className="flex flex-col text-white gap-5">
                <button className="bg-black-10 hover:bg-zinc-700 transition-colors ease-in-out duration-300 flex gap-2 items-center justify-center py-3 rounded">Cadastrar</button>
                <button className="bg-[#005BA1] hover:bg-blue-600 transition-colors ease-in-out duration-300 flex gap-2  items-center justify-center py-3 rounded"><img src="./images/google-icon.png" alt="Icone do google" />Acessar com o Google</button>
            </div>
        </form>
     );
}

export default FormEmailRegister;