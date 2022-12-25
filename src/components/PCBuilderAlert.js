import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { BiX } from 'react-icons/bi'
import Alert from '@mui/material/Alert'

export default function PCBuilderAlert({open, setOpen}) {

  return (
    <Box sx={{ width: '100%', mt: -4 }}>
        <Alert
        severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
            >
              <BiX fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 0 }}
        >
          Try our PC Builder! — Go to the Menu and pick the <strong>PC Builer option.</strong>
        </Alert>
    </Box>
  )
}