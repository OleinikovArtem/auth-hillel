import React, { useState } from 'react'
import { withRouter, NavLink, useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import firebase from '../firebase/api'
import { Message } from '../components/Message'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const RegistrationForm = () => {
  const classes = useStyles()
  const [values, setValues] = useState({
    email: '',
    password: '',
    againPassword: '',
  })
  const [message, setMessage] = useState(null)

  const closeMessage = () => setMessage(null)

  const changeValues = ({ target: { name, value } }) => {
    const updateValues = {
      ...values,
      [name]: value
    }
    setValues(updateValues)
  }

  const registration = async ({ email, password }) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(r => {
        setMessage({ type: 'success', text: 'Login is Doned!' })
      })
      .catch(error => {
        setMessage({ type: 'error', text: error.message })
      });
  }

  const handleSubmit = async (e) => {
    const { password, againPassword } = values
    e.preventDefault()
    if (password === againPassword) {
      registration(values)
    } else {
      setMessage({ type: 'error', text: 'Password mismatch'})
    }
  }

  return (
    <>
      {message && <Message type={message.type} text={message.text} onClose={() => closeMessage(false)} />}
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={changeValues}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={values.password}
              onChange={changeValues}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="againPassword"
              label="Enter again password"
              type="password"
              autoComplete="current-password"
              onChange={changeValues}
              value={values.againPassword}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Registration
          </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <NavLink to="/auth/login" variant="body2">
              Already have an account? Go to login
            </NavLink>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

const LoginForm = ({ setAuth = () => { } }) => {
  const classes = useStyles()
  const [values, setValues] = useState({
    email: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState({ isShow: false, text: null })
  const [succesMessage, setSuccesMessage] = useState({ isShow: false, text: null })

  const history = useHistory()
  const changeValues = ({ target: { name, value } }) => {
    const updateValues = {
      ...values,
      [name]: value
    }
    setValues(updateValues)
  }

  const login = async ({ email, password, }) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(r => {
        setAuth(true)
        setSuccesMessage({ isShow: true, text: 'You are logged in' })
        history.push('/products')
      })
      .catch(error => {
        setErrorMessage({ isShow: true, text: error.message })
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    login(values)
  }

  return (
    <>
      {errorMessage.isShow && <Message type='error' text={errorMessage?.text} onClose={() => setErrorMessage({ isShow: false })} />}
      {succesMessage.isShow && <Message type='success' text={succesMessage?.text} onClose={() => setSuccesMessage({ isShow: false })} />}
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={changeValues}
          value={values.email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={changeValues}
          value={values.password}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Enter
          </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
              </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

const Auth = ({ match, history, setAuth }) => {
  const classes = useStyles()
  const goSingIn = () => {
    history.push('/auth/login')
  }
  const goSingUp = () => {
    history.push('/auth/registration')
  }


  let BtnsChangeForm = [
    <Button key={1} variant="contained" color="primary" style={{ marginRight: 20 }} onClick={goSingIn}>Login</Button>,
    <Button key={2} variant="outlined" color="primary" onClick={goSingUp}>Registration</Button>
  ]

  if (match.params.type === 'registration') {
    BtnsChangeForm = [
      <Button key={1} variant="outlined" color="primary" style={{ marginRight: 20 }} onClick={goSingIn}>Login</Button>,
      <Button key={2} variant="contained" color="primary" onClick={goSingUp}>Registration</Button>
    ]
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {BtnsChangeForm}
        </Typography>
        {match.params.type === 'registration' ? <RegistrationForm /> : <LoginForm setAuth={setAuth} />}
      </div>
    </Container>
  )
}

export default withRouter(Auth)