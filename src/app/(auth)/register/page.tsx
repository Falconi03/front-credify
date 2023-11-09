import FormRegister from "@/components/FormRegister";

function Register() {



  return (
    <div>
      <h1 className="text-2xl">Criar nova conta</h1>
      <span className=" text-text-secundary">
        Informe os dados para a criação da nova conta
      </span>
      <FormRegister/>
    </div>
  );
}

export default Register