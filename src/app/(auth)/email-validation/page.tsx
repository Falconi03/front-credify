import FormEmailValidation from "@/components/FormEmailvalidation";

function EmailValidation() {
  return (
    <div>
      <h1 className="text-2xl">Validação do e-mail</h1>
      <span className=" text-text-secundary">
        Informe o token enviado no seu email
      </span>
      <FormEmailValidation />
    </div>
  );
}
export default EmailValidation;
