import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";

function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    setIsLoading(true);

    // Vi du fetching api
    const fetchApi = setTimeout(() => {
      console.log(data);
      setIsLoading(false);
      //   Success
    }, 3000);
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={"background.main"}
    >
      <Paper elevation={4} sx={{ width: 450, p: 6 }}>
        <Typography variant="h3" fontWeight={500}>
          Forgot Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit(handleLogin)}>
          <TextField
            label="Email"
            margin="normal"
            fullWidth
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email is not valid.",
              },
            })}
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />

          <Button
            sx={{ mt: 1 }}
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            disabled={isLoading}
          >
            Send password
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default ForgotPassword;
