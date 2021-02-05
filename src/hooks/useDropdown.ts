import React, { useCallback, useState } from 'react'

const useDropdown = (data: any[]) => {
  const [value, _setValue] = useState<any>('')
  const [open, _setOpen] = useState<boolean>(false)
  const onClickHandle = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      const _target = e.target as HTMLElement
      const id = parseInt(_target.id as string, 10)
      const target = data[id]
      if (!target) return
      setValue(target)
    },
    [open],
  )

  const setValue = useCallback(
    (value: any) => {
      _setValue(value)
      _setOpen(false)
    },
    [value],
  )

  const setOpen = useCallback(() => {
    _setOpen((prev) => !prev)
  }, [open])

  return { value, setValue, open, setOpen, onClickHandle }
}

export default useDropdown
