import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Collapse from '@mui/material/Collapse'
import { BiX } from 'react-icons/bi'
import AlertTitle from '@mui/material/Alert'
import Alert from '@mui/material/Alert'

export default function AdminAlert({open, setOpen}) {

  return (
    <Box sx={{ width: '100%' }}>
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
          If you came by looking at my Github/Linkedin page, this is just a reminder that you can access the Admin Panel by going to /admin/dashboard — <strong>Just login with the default username and password!</strong>
        </Alert>
    </Box>
  )
}