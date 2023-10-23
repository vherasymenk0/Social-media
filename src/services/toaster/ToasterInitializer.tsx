'use client'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import ToastNotification from '~/components/ToastNotification'
import Toaster from '~/services/toaster/Toaster.service'
import { Toast } from '~/types/shared'
import { isBrowser } from '~/utils/helpers/util.helpers'

const ToasterInitializer = () => {
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

  if (!isBrowser()) return null

  return (
    toast &&
    createPortal(
      <ToastNotification handleClose={handleClose} isOpen={isOpen} {...toast} />,
      document.body
    )
  )
}

export default ToasterInitializer
