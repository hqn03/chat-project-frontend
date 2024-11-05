import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "~/redux/actions/authActions";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleRegister = async (data) => {
    await register(data, dispatch, navigate);
  };
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={"background.main"}
    >
      <Paper elevation={6} sx={{ width: 450, p: 6 }}>
        <Typography variant="h3" fontWeight="medium" textAlign={"center"}>
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(handleRegister)}
          sx={{ "& .MuiFormControl-root": { my: 2, width: "100%" } }}
        >
          <TextField
            {...registerForm("username", {
              required: "Name is required.",
            })}
            label="Name"
            error={!!errors.name?.message}
            helperText={errors.name?.message}
          />
          <TextField
            label="Email"
            {...registerForm("email", {
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
          <TextField
            id="password"
            label="Password"
            type="password"
            {...registerForm("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password is 6 character at least.",
              },
              maxLength: {
                value: 32,
                message: "Password is not more than 32 character.",
              },
            })}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
          />
          <TextField
            type="password"
            label="Confirm password"
            {...registerForm("confirmPassword", {
              required: "Confirm password is required.",
              validate: (value) => {
                if (watch("password") != value) {
                  return "Confirm password does not match";
                }
              },
            })}
            error={!!errors.confirmPassword?.message}
            helperText={errors.confirmPassword?.message}
          />
          <Typography
            sx={{
              mt: 2,
              "& a": { textDecoration: "none", color: "text.secondary" },
            }}
          >
            <Link to="/login">Already have account</Link>
          </Typography>
          <Button
            sx={{ mt: 2 }}
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            // disabled={}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Register;
