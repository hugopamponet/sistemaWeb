export function DefaultSenha() {
  return (
    <>
      <div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" name="senha" id="senha" />
        </div>
        <div>
          <label htmlFor="confirmar">Confirmar a senha</label>
          <input type="password" name="confirmar" id="confirmar" />
        </div>
        <div>
          <label htmlFor="lembrar">Uma dica para lembrar de sua senha</label>
          <input type="text" name="lembrar" id="lembrar" />
        </div>
      </div>
    </>
  );
}