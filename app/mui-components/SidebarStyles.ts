'use client'

import { Box, Button, Stack } from "@mui/material";
import {styled} from "@mui/system";

export const SidebarWrapper = styled(Box)({
    height: '85vh',
    width: '20vw',
    margin: '1rem',
    borderRadius: '1rem',
    border: '1px solid black',
    backgroundColor: 'black',
    boxShadow: '0px 0px 8px rgba(250, 250, 250, 0.8)',
    borderColor: 'rgba(250, 250, 250, 0.8)',
})

export const Sidebar = styled(Stack)({
    height: '100%',
    justifyContent: 'flex-start',
    padding: '1rem',
    paddingTop: '2rem',
    alignItems: 'center',
    gap: '1rem',
    color: 'white',
})

export const ClearButton = styled(Button)({
    width: '80%',
    color: 'black',
    backgroundColor: 'rgba(250, 250, 250, 0.8)',
    borderColor: 'rgba(250, 250, 250, 0.8)',
    boxShadow: '0px 0px 8px rgba(250, 250, 250, 0.8)',
    '&:hover': {
        backgroundColor: 'rgba(250, 250, 250, 0.9)',
        boxShadow: '0px 0px 8px rgba(250, 250, 250, 0.8)',
    }
})