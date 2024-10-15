import React, { useState } from "react";
import { login as authLogin } from "../services/authService";
import { useRouter } from "next/router";
import {
  Box,
  TextField,
  Button,
  Alert,
  Typography,
  Container,
} from "@mui/material";
import { consts } from "../utils/constants";

const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await authLogin(userName, password);
      router.push("/products");
    } catch (error) {
      setError(consts.login.invalidPass);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h1" component="h1">
          {consts.login.login}
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label={consts.login.user}
          name="name"
          variant="outlined"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          disabled={loading}
          onClick={handleLogin}
          fullWidth
          variant="contained"
          color="primary"
        />
        {loading ? (
          <Typography>{consts.login.loading}</Typography>
        ) : (
          <Typography>{consts.login.login}</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Login;
