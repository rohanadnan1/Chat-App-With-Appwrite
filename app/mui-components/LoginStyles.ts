'use client'

import { Box } from '@mui/material'
import {styled} from '@mui/system'

const LoginWrapper = styled(Box)({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw', 
    backgroundColor: 'rgb( 9, 46, 32)',
})

const LoginBox = styled(Box)({
    width: '50%',
    height: '60%',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'black',
    boxShadow: '0px 0px 8px rgba(250, 250, 250, 0.8)',
})

const LoginInput = styled('input')({
    width: '60%',
    height: '3rem',
    borderRadius: '1rem',
    border: '1px solid black',
    padding: '0 1rem',
    fontSize: '1.5rem',
    outline: 'none',
    '&:focus': {
        border: '1px solid white',
    }
})

const LoginButton = styled('button')({
    width: '60%',
    height: '2rem',
    borderRadius: '1rem',
    border: '1px solid black',
    padding: '0 1rem',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: 'rgba(250, 250, 250, 0.8)',
    borderColor: 'rgba(250, 250, 250, 0.8)',
    boxShadow: '0px 0px 8px rgba(250, 250, 250, 0.8)',
    '&:hover': {
        backgroundColor: 'rgba(250, 250, 250, 0.9)',
        boxShadow: '0px 0px 8px rgba(250, 250, 250, 0.8)',
    }
})

export { LoginWrapper, LoginBox, LoginInput, LoginButton }