import IMessage from '@/interfaces/IMessage'
import { IServiceResponse } from '@/interfaces/IServiceResponse'
import axios from 'axios'

const mailService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAIL_SERVICE_URL,
})

const endpoints = {
  postMessage: 'mail',
}

export const sendMessageAsync = async (message: IMessage) => {
  const response: IServiceResponse = { message: '', success: false, data: null }
  try {
    const res = await mailService.post(endpoints.postMessage, message)
    if (res.status === 201) {
      response.success = true
      return response
    } else {
      response.message = 'Something went wrong.'
      return response
    }
  } catch (error: any) {
    console.error(error)
    response.message = error.message
    return response
  }
}
