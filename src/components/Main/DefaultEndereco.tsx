export function DefaultEndereco() {
  return (
    <>
    <div>
      <div>
        <div>
          <h1>Endereço</h1>
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input type="text" name="cep" id="cep" />
        </div>
        <div>
          <label htmlFor="endereco">Endereço</label>
          <input type="text" name="endereco" id="endereco" />
        </div>
        <div>
          <label htmlFor="bairro">Bairro</label>
          <input type="text" name="bairro" id="bairro" />
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" name="cidade" id="cidade" />
        </div>
        <div>
          <label htmlFor="estado">Estado</label>
          <input type="text" name="estado" id="estado" />
        </div>
        <div>
          <label htmlFor="complemento">Complemento</label>
          <input type="text" name="complemento" id="complemento" />
        </div>
        <div>
          <label htmlFor="numero">Número</label>
          <input type="text" name="numero" id="numero" />
        </div>
      </div>
    </div>
    </>
  );
}