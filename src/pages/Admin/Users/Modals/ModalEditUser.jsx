import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { styleModal } from "~/_constants";
import MyModal from "~/components/Modal/MyModal";

function ModalEditUser({ show, toggleShow, user }) {
  const { register, handleSubmit } = useForm();

  const updateUser = (data) => {
    console.log(user);
    console.log(data);
  };

  return (
    <MyModal open={show} handleClose={() => toggleShow()}>
      <Box sx={styleModal}>
        <Typography variant="h6">Edit user</Typography>

        <Box
          component={"form"}
          onSubmit={handleSubmit(updateUser)}
          sx={{ mt: 2, "& .MuiFormControl-root": { my: 2, width: "100%" } }}
        >
          <TextField
            label="Name"
            value={user.name}
            slotProps={{ input: { readOnly: true } }}
          />
          <TextField
            label="Email"
            value={user.email}
            slotProps={{ input: { readOnly: true } }}
          />
          <FormControl>
            <FormLabel>Role</FormLabel>
            <RadioGroup row defaultValue={user.role}>
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Admin"
                {...register("role")}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Moderate"
                {...register("role")}
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="Normal"
                {...register("role")}
              />
            </RadioGroup>
          </FormControl>
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            Update
          </Button>
        </Box>
      </Box>
    </MyModal>
  );
}

export default ModalEditUser;
