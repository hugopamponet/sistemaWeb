import styles from './styles.module.css'

import { DefaultEndereco } from "../../components/DefaultEndereco";
import { DefaultSenha } from "../../components/DefaultSenha";
import { DefaultUser } from "../../components/DefaultUser";

export function CreateUser() {
    return(
        <>
        <div className={styles.container}>
            <div className="dadosBasicos">
                <DefaultUser />
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