import Layout from '@/components/Layout'
import PDFViewer from '@/components/PDFViewer'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'

const Resume = () => {
  const myResume = '../assets/pdfs/Resume_Full_Stack_Decco_2023.pdf'
  const viewer = useRef(null)
  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: '/assets/pdfs/Resume_Full_Stack_Decco_2023.pdf',
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance
        // you can now call WebViewer APIs here...
        instance.UI.disableElements(['toolbarGroup-Annotate'])
        instance.UI.disableElements(['toolbarGroup-Shapes'])
        instance.UI.disableElements(['toolbarGroup-Edit'])
        instance.UI.disableElements(['toolbarGroup-Insert'])
        instance.UI.disableElements(['toolsHeader'])
        instance.UI.disableElements(['ribbons'])
        instance.UI.setZoomLevel('200%')
      })
    })
  }, [])
  return (
    <Layout title='My Resume'>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '3%', marginBottom: '2%' }}>
        <Typography variant='h4' style={{ marginBottom: '2%', textAlign: 'center' }}>
          JOSEPH LUNA RESUME
        </Typography>
        <Box className='webViewer' ref={viewer} sx={{ height: '80vh', width: '80vw', '@media(max-width:594px)': { width: '95vw' } }}></Box>
        {/* <PDFViewer url={myResume} /> */}
      </Box>
    </Layout>
  )
}

export default Resume
