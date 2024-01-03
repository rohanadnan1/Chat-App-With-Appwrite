'use client'

import { Box, Input } from '@mui/material'
import {styled} from '@mui/system'

export const HeroWrapper = styled(Box)({
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80vw',
})

export const Hero = styled(Box)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    width: '100%',
    padding: '1rem 2rem',
})

export const InsideHero = styled(Box)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: '1rem',   
})

export const InputWrapper = styled('div')({
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '20%',
    border: '1px solid black',
    width: '98%',
    borderRadius: '1rem',
    color: 'white',
    backgroundColor: 'black',
    boxShadow: '0px 0px 8px rgba(250, 250, 250, 0.8)',
    borderColor: 'rgba(250, 250, 250, 0.8)',
})

export const MessageWrapper = styled('div')({
    height: '70vh',
    width: '98%',
    display: 'flex',
    border: '1px solid black',
    padding: '1rem 1rem 1rem 4rem',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: '1rem',
    overflowY: 'auto',
    backgroundColor: 'black',
    color: 'white',
    boxShadow: '0px 0px 8px rgba(250, 250, 250, 0.8)',
    borderColor: 'rgba(250, 250, 250, 0.8)',
    minHeight: '0',
})

export const ContentWrapper = styled('div')({
    overflowY: 'auto',
    width: '100%',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-track': {
        background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
    },
});

export const Text = styled('input')({
    width: '80%',
    fontSize: '2rem',
     color: 'white',
     backgroundColor: 'black',
     outline: 'none',
     border: 'none',
     fontWeight: '100'
})