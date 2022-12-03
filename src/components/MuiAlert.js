import React from 'react'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import { IconButton } from '@mui/material'
import { BiX } from 'react-icons/bi'

export default function MuiAlert({ alert, setAlert, alertType = "error", alertText = "Login Unauthorized!" }) {
    return (
        <Box sx={{ width: '100%' }} spacing={2}>
            <Collapse in={alert}>
                <Alert severity={alertType}
                action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setAlert(false)
                      }}
                    >
                      <BiX fontSize="inherit" />
                    </IconButton>
                  }
                  >
                    { alertText }
                </Alert>
            </Collapse>
        </Box>
    )
}