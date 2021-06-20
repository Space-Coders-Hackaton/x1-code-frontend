import React, { createContext, useContext } from 'react'
import { useToast as chakraUseToast } from '@chakra-ui/react'

export interface ToastMessage {
  title: string
  description?: string
  status: 'success' | 'error' | 'warning' | 'info'
}

interface ToastContextData {
  sendToast: (message: ToastMessage) => void
}

const ToastContext = createContext({} as ToastContextData)

export const ToastProvider: React.FC = ({ children }) => {
  const toast = chakraUseToast()
  function sendToast({ title, description, status }: ToastMessage) {
    toast({
      title,
      description,
      status,
      position: 'top-right',
      duration: 3000,
      isClosable: true
    })
  }

  return (
    <ToastContext.Provider value={{ sendToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}
