import styles from './styles.module.css'

import { Heading } from '../Heading'

export function Competicoes() {
    return(
        <>
        <Heading />
        <div className={styles.filter}>
            <h1>Pesquisa</h1>
        </div>
        </>
    );
}