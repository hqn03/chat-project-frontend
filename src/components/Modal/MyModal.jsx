import Modal from "@mui/material/Modal";

function MyModal({ open, handleClose, children }) {
  return (
    <Modal open={open} onClose={handleClose}>
      {children}
    </Modal>
  );
}

export default MyModal;
