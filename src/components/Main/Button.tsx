import styles from "./styles.module.css";

import { useState } from "react";
import ModalContent from "./ModalContent";

export default function PortalExample() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button className={styles.botaoCard} onClick={() => setOpenModal(true)}>
        Increva-se
      </button>
      <ModalContent isOpen={openModal} />
    </>
  );
}
