import Layout from '@/components/Layout'
import PDFViewer from '@/components/PDFViewer'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Resume = () => {
  const myResume = '../assets/pdfs/Resume_Full_Stack_Decco_2023.pdf'
  return (
    <Layout title='My Resume'>
      <Box style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '3%' }}>
        <Typography variant='h2' style={{ marginBottom: '2%', textAlign: 'center' }}>
          JOE LUNA RESUME
        </Typography>
        <PDFViewer url={myResume} />
      </Box>
    </Layout>
  )
}

export default Resume
