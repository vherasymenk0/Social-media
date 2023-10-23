import { useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'

type AvatarState = {
  image: string | File | null
  scale: number
  previewImage: string | null
}

const initAvatarState = {
  image: null,
  scale: 1,
  previewImage: null,
}

const useProfilePhotoUpload = () => {
  const [avatarState, setAvatarState] = useState<AvatarState>(initAvatarState)
  const editorRef = useRef<AvatarEditor>(null)

  const handleLoadFile = (file: File) => {
    setAvatarState((prev) => ({
      ...prev,
      image: file,
    }))
  }

  const handleReset = () => {
    setAvatarState(initAvatarState)
  }

  const preparePreviewImage = () => {
    const img = editorRef.current?.getImageScaledToCanvas().toDataURL()

    if (!img) return

    setAvatarState((prev) => ({
      ...prev,
      previewImage: img,
    }))
  }

  const onScale = (_, value: number | number[]) => {
    if (typeof value === 'number') {
      const scale = parseFloat(String(value))
      setAvatarState((prev) => ({ ...prev, scale }))
    }
  }

  return {
    handleLoadFile,
    handleReset,
    onScale,
    preparePreviewImage,
    avatarState,
    editorRef,
  }
}

export default useProfilePhotoUpload
