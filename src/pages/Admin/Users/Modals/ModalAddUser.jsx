import { Box, Button, TextField, Typography } from "@mui/material";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { styleModal } from "~/_constants";
import MyModal from "~/components/Modal/MyModal";
function FormAddUser({ open, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddUser = (data) => {
    console.log(data);
    reset();
  };

  return (
    <MyModal
      open={open}
      handleClose={() => {
        setOpen(!open);
        reset();
      }}
    >
      <Box sx={styleModal}>
        <Box
          component="form"
          onSubmit={handleSubmit(handleAddUser)}
          sx={{ "& .MuiFormControl-root": { my: 2, width: "100%" } }}
        >
          <Typography variant="h6">Add new user</Typography>
          <TextField
            label="Name"
            {...register("name", { required: "Name field is required." })}
            error={!!errors.name?.message}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            {...register("email", {
              required: "Email field is required.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email is not valid.",
              },
            })}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
          <TextField
            type="password"
            label="Password"
            {...register("password", {
              required: "Password field is required.",
              minLength: {
                value: 8,
                message: "Password is 8 character at least.",
              },
              maxLength: {
                value: 32,
                message: "Password is not more than 32 character.",
              },
            })}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
          />
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            Add
          </Button>
        </Box>
      </Box>
    </MyModal>
  );
}

export default memo(FormAddUser);
