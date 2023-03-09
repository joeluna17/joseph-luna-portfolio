import React from 'react'
import styled from 'styled-components'

type TPDFProps = {
  url: string
}

const PDFViewer = ({ url }: TPDFProps) => {
  return (
    <>
      <Frame src={url} />
    </>
  )
}

export default PDFViewer

const Frame = styled.iframe`
  width: 80%;
  height: 100vh;

  @media (max-width: 594px) {
    width: 98%;
  }
`
