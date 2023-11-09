import FormEmailRegister from "@/components/FormEmailRegister";

function EmailRegister() {
  return (
    <div>
      <h1 className="text-2xl">Cadastro de email</h1>
      <span className=" text-text-secundary">Informe seu email</span>
      <FormEmailRegister/>
    </div>
  );
}
export default EmailRegister;
