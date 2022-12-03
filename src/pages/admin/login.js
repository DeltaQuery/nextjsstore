import React, { useState } from 'react'
import { Main } from 'styles/View/ViewStyles'
import { loginService } from 'services/authService'
import { useRouter } from 'next/router'
import { useAuth } from 'hooks/useAuth'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import MuiAlert from 'components/MuiAlert'

const fontSize = 16

const Login = () => {
    const [alert, setAlert] = useState(false)

    const router = useRouter()
    const { auth } = useAuth()

    const handleSubmit = async e => {
        e.preventDefault()
        const user = {
            user: e.target.user.value,
            password: e.target.password.value,
        }
        try {
            await loginService(user)
            router.push("/admin/dashboard")
        }
        catch (err) {
            console.log(err)
            setAlert(true)
        }
    }

    if (auth) router.push("/admin/dashboard")

    return (
        <Main>
            {auth ?
                <div>Checking auth state...</div>
                :
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ mt: 2, fontSize: 20, fontWeight: 600 }}>
                            INICIO DE SESIÓN
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="user"
                                label="Usuario"
                                name="user"
                                autoComplete="user"
                                autoFocus
                                defaultValue="marateca"
                                inputProps={{ style: { fontSize: fontSize } }} // font size of input text
                                InputLabelProps={{ style: { fontSize: fontSize } }} // font size of input label
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                defaultValue="marateca2022"
                                inputProps={{ style: { fontSize: fontSize } }} // font size of input text
                                InputLabelProps={{ style: { fontSize: fontSize } }} // font size of input label
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{ mt: 2, mb: 3, fontSize: fontSize }}
                            >
                                Inicia sesión
                            </Button>
                            
                            <MuiAlert alert={alert} setAlert={ setAlert }/>
                        </Box> 
                    </Box>
                </Container>
            }
        </Main>
    )
}

export default Login