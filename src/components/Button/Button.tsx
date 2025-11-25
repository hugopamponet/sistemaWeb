import styles from "./styles.module.css";

import { useState } from "react";
import ModalContent from "../Model/ModalContent";

type ButtonProps = {
  children: string
  type?: 'submit'
} 

export function Button( { children }: ButtonProps) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button className={styles.botaoCard} onClick={() => setOpenModal(true)}>
        {children}
      </button>
      <ModalContent isOpen={openModal} />
    </>
  );
}
