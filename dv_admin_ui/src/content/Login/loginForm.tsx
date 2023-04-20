import Avatar from '@mui/material/Avatar';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useAppDispatch } from 'src/app/hook';
import login from 'src/api/authApi';
import { LoginRequest } from 'src/models/auth';
import { loginSuccess } from 'src/redux/action/auth';
import { LoadingButton } from '@mui/lab';
import { ROLE_CD } from 'src/constants';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Duc Viet Admin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [username, setName] = useState('')
  const [password, setPassword] = useState('')
  const [messageError, setMessageError] = useState('')
  const [isShowPW, setIsShowPW] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispath = useAppDispatch()

  const loginUser = async () => {
    setIsLoading(true)
    try {
      const user: LoginRequest = {
        username,
        password
      }
      const res = await login(user)
      setIsLoading(false)
      if (res.data.role_cd === ROLE_CD.MASTER) {
        dispath(loginSuccess({ ...res.data }))
        navigate('/dashboards/dashboard')
      }
      else {
        setMessageError("*Không có quyền đăng nhập")
      }
    } catch (error) {
      setIsLoading(false)
      if (error.response.data.error_description === "Bad credentials") {
        setMessageError("*Thông tin tài khoản hoặc mật khẩu không chính xác")
      }
      else if (error.response.data.error_description === "User not found or account deactivated.") {
        setMessageError("*Tài khoản không tồn tại hoặc chưa được kích hoạt ")
      }
      else {
        setMessageError('*Lỗi kết nối!')
      }
    }
  }

  const handleSubmit = () => {
    loginUser()
  };


  const onChangeName = (e: any) => {
    setName(e.target.value)
  }

  const onChangePassword = (e: any) => {
    if (e.target.value.length < 6) {
      setMessageError("*Mật khẩu phải lớn hơn 6 kí tự");
    } else {
      setMessageError("");
    }
    setPassword(e.target.value)
  }

  const handleShowPassword = (e: any) => {
    setIsShowPW(!isShowPW)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'rgb(46,125,50)' }}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Duc Viet Admin
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Account"
            name="Account"
            autoComplete="phone"
            autoFocus
            placeholder='Nhập tên tài khoản'
            value={username}
            onChange={onChangeName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={isShowPW ? 'text' : 'password'}
            id="password"
            placeholder='Nhập mật khẩu'
            autoComplete="current-password"
            value={password}
            onChange={onChangePassword}
          />
          <p style={{ color: 'red', fontSize: "13px", display: 'flex', justifyContent: "flex-start" }}>{messageError}</p>
          <FormControlLabel style={{ float: "left" }}
            control={<Checkbox value="remember" color="primary" onChange={handleShowPassword} />}
            label="Show password"
          />
          <LoadingButton
            type="button"
            color="success"
            fullWidth
            loading={isLoading}
            size='large'
            variant="contained"
            onClick={handleSubmit}
          >
            Sign In
          </LoadingButton>
          <Grid container style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Grid item >
              <Link href="#" variant="body2" >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account?"}
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}