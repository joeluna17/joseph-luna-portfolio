import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  const date = new Date(Date.now()).getFullYear()
  return (
    <Box style={{ width: '100vw', height: '120px', background: 'linear-gradient(135deg, rgba(29,28,33,1) 59%, rgba(56,216,214,1) 200%)', position: 'absolute', bottom: '0', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
      <Box style={{ width: '50%', height: '120px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <Typography variant='h5' sx={{ color: '#fff' }}>
          Joseph Luna Portfolio | {date}
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
