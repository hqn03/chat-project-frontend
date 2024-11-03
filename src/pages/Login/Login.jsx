import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
      //   router.navigate("/");
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
      <Paper elevation={6} sx={{ width: 450, p: 6 }}>
        <Typography variant="h3" align="center" fontWeight={500}>
          Login
        </Typography>
        <Box
          component={"form"}
          onSubmit={handleSubmit(handleLogin)}
          sx={{ "& .MuiFormControl-root": { my: 2, width: "100%" } }}
        >
          <TextField
            label="Email"
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
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("password", {
              required: "Password is required.",
            })}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
          />
          <Box
            m={2}
            width="100%"
            display="flex"
            justifyContent="space-between"
            sx={{
              "& a": {
                textDecoration: "none",
                color: "text.secondary",
                fontSize: 14,
              },
            }}
          >
            <Link to="/register">Don't have account</Link>
            <Link to="/forgot">Forgot password</Link>
          </Box>
          <Button
            variant="contained"
            type="submit"
            size="large"
            fullWidth
            disabled={isLoading}
          >
            Login
          </Button>
        </Box>

        {/* -- or --- */}
        <Box
          mt={4}
          mb={4}
          position={"relative"}
          width={"50%"}
          sx={{
            "&:before": {
              content: `""`,
              borderBottom: "1px solid black",
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              zIndex: 1,
            },
          }}
        >
          <Typography
            position={"relative"}
            bgcolor={"background.paper"}
            zIndex={2}
            width={"fit-content"}
            left={"100%"}
            px={2}
            sx={{ transform: "translateX(-50%)" }}
          >
            or
          </Typography>
        </Box>
        <GoogleLogin
          theme="filled_blue"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Paper>
    </Box>
  );
}

export default Login;
