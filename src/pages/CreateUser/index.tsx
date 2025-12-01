import { DefaultEndereco } from "../../components/DefaultEndereco";
import { DefaultInput } from "../../components/DefaultInput";
import { DefaultSenha } from "../../components/DefaultSenha";

export function CreateUser() {
    return(
        <>
        <div className="container">
            <div className="dadosBasicos">
                <DefaultInput children="Nome" className="inputName" type="text" value="nome"  />
            </div>
            <div className="endereco">
                <DefaultEndereco />
            </div>
            <div className="dadosAcesso">
                <DefaultSenha />
            </div>
        </div>
        </>
    );
}