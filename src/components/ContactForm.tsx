import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import IMessage from '@/interfaces/IMessage'
import { sendMessageAsync } from '@/services/mail-service/mailService'
import { IServiceResponse } from '@/interfaces/IServiceResponse'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const ContactFrom = () => {
  const [openSuccess, setOpenSuccess] = useState(false)
  const [openError, setOpenError] = useState(false)
  const [openFormError, setOpenFormError] = useState(false)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setMessage('')
  }

  const sendMessage = async (e: any) => {
    e.preventDefault()
    if (!firstName || !lastName || !email || !message) {
      setOpenFormError(true)
      return
    }
    try {
      const msg: IMessage = {
        to: 'joeluna17@yahoo.com',
        from: 'joeluna17@outlook.com',
        subject: `Contact ${firstName.trim()} ${lastName.trim()} `,
        text: ` My email is: ${email.trim()} ` + message.trim(),
      }
      const response: IServiceResponse = await sendMessageAsync(msg)
      if (response.success) {
        setOpenSuccess(true)
        resetForm()
      } else {
        setOpenError(true)
      }
    } catch (err: any) {
      setOpenError(true)
      console.error(err)
    }
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSuccess(false)
    setOpenError(false)
    setOpenFormError(false)
  }

  return (
    <Box sx={{ width: '50vw', maxWidth: '900px', textAlign: 'center', '@media(max-width: 794px)': { width: '80vw' } }}>
      <Typography variant='h2'>Contact Me</Typography>
      <ContactForm onSubmit={sendMessage}>
        <TextField sx={{ input: { color: '#fff' } }} value={firstName} label='First Name' onChange={(e) => setFirstName(e.target.value)} />
        <TextField sx={{ input: { color: '#fff' } }} value={lastName} label='Last Name' onChange={(e) => setLastName(e.target.value)} />
        <TextField sx={{ input: { color: '#fff' } }} value={email} label='Email' onChange={(e) => setEmail(e.target.value)} />
        <TextField inputProps={{ style: { color: '#fff' } }} value={message} label='Message' onChange={(e) => setMessage(e.target.value)} multiline rows={5} />
        <Button type='submit' style={{ backgroundColor: '#2c2c2c', color: '#fff' }}>
          Submit
        </Button>
      </ContactForm>

      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          Message was sent! I&apos;ll be in contact.
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          Oops, there was an issue sending the message. Try again please.
        </Alert>
      </Snackbar>
      <Snackbar open={openFormError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='warning' sx={{ width: '100%' }}>
          Oops, please fill in all form fields.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default ContactFrom

const ContactForm = styled.form`
  border: 2px solid #fff;
  padding: 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;

  .MuiTextField-root {
    margin: 10px;
  }
`
