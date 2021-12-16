import React from "react";

import { Box, Typography, Modal, CardMedia } from "@mui/material";

import styles from "./styles/index.module.scss";

const ModalItem = ({ open, setOpen, data }) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.box}>
        <CardMedia
          className={styles.image}
          component="img"
          height="140"
          image={data.avatar}
          alt="avatar"
        />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {data.first_name} {data.last_name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          email: {data.email}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalItem;
