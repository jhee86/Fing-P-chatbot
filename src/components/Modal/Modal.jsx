import React, { useState } from "react";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const _style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modal = ({
  children,
  cancel = "취소",
  accept = "확인",
  handleAccept,
  style,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //   const handleAccept = () => {};

  // put together the local style and the style from the props
  style = { ..._style, ...style };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={handleClose}>{cancel}</Button>
          <Button onClick={handleAccept}>{accept}</Button>
        </Box>
      </MuiModal>
    </div>
  );
};

export default Modal;
