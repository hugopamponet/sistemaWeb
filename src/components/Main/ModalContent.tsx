import styles from './styles.module.css'
import { CadastroAluno } from './CadastroAluno'

interface ModalContentProps {
  isOpen: boolean;
}

export default function ModalContent({ isOpen }: ModalContentProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.contentModal}>
      <div className={styles.modalStylo}>
        <div className={styles.formContainer}>
          <CadastroAluno />
        </div>
        <div className={styles.imagemLateral}>
          <img src="src/assets/desenho.png" alt="Tabela de Peso - Jiu Jitsu" />
        </div>
      </div>
    </div>
  );
}