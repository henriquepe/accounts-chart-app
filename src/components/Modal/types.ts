export type ModalProps = {
  modalTitle?: string;
  children?: React.ReactNode;
  isVisible: boolean;
  onCloseModal: () => void;
};
