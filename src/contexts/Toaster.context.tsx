'use client'
import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import ToastNotification from '~/components/ToastNotification'
import Toaster from '~/services/Toaster.service'
import { Toast } from '~/types/shared'

const ToasterContext = createContext(null)

export const ToasterProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState({} as Toast)
  const [isOpen, setIsOpen] = useState(false)

  const showToast = ({ message, type }: Toast) => {
    setToast({ message, type })
    setIsOpen(true)
  }

  const handleClose = (_, reason?: string) => {
    if (reason === 'clickaway') return
    setIsOpen(false)
  }

  useEffect(() => {
    Toaster.setGlobalToast(showToast)
    return () => Toaster.setGlobalToast(null)
  }, [])

  return (
    <ToasterContext.Provider value={null}>
      {children}
      {toast &&
        createPortal(
          <ToastNotification handleClose={handleClose} isOpen={isOpen} {...toast} />,
          document.body
        )}
    </ToasterContext.Provider>
  )
}
