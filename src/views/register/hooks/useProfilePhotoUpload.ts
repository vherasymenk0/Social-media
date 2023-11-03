import { ChangeEvent, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { useFormContext } from 'react-hook-form'

type AvatarState = {
  image: File | null
  scale: number
  previewImage: string | null
}

const initAvatarState = {
  image: null,
  scale: 1,
  previewImage: null,
}

const useProfilePhotoUpload = ({ name }: { name: string }) => {
  const [avatarState, setAvatarState] = useState<AvatarState>(initAvatarState)
  const editorRef = useRef<AvatarEditor>(null)
  const { setValue } = useFormContext()

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0]
    if (!file) return

    setValue(name, file)
    setAvatarState((prev) => ({
      ...prev,
      image: file,
    }))
  }

  const onReset = () => {
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
    onUpload,
    onReset,
    onScale,
    preparePreviewImage,
    avatarState,
    editorRef,
  }
}

export default useProfilePhotoUpload
