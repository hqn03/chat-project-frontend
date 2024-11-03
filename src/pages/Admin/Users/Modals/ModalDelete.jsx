import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { styleModal } from "~/_constants";
import MyModal from "~/components/Modal/MyModal";

function ModalDelete({ open, setOpen, user }) {
  const handleDelete = () => {
    console.log(user.email + "is deleted");
    setOpen(!open);
  };
  return (
    <MyModal
      open={open}
      handleClose={() => {
        setOpen(!open);
      }}
    >
      <Box sx={styleModal}>
        <Typography variant="h6">Delete user</Typography>
        <Typography sx={{ mt: 2 }}>
          Do you want to delete{" "}
          <Typography variant="body" color="primary.main" fontWeight={500}>
            {user.email}
          </Typography>
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Box>
    </MyModal>
  );
}

export default ModalDelete;
