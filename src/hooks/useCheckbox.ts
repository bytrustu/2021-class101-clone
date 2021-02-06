import { useState, useCallback } from 'react'
import { TUseCheckbox } from '../types'

const useCheckbox: TUseCheckbox = (length) => {
  const [form, setForm] = useState<any[]>([])
  const onChangeSingle = useCallback(
    (checked, name, id) => {
      if (checked) {
        setForm([...form, id])
      } else {
        setForm(form.filter((element: string | number) => element !== id))
      }
    },
    [form],
  )
  const onChangeAll = useCallback(
    (checked) => {
      if (checked) {
        const idArray: any[] = Array(length)
          .fill(0)
          .map((_, index) => index)
        setForm(idArray)
      } else {
        setForm([])
      }
    },
    [form],
  )
  const emptyCheckbox = () => {
    setForm([])
  }
  const checkAllCheckbox = (all: any[]) => {
    setForm([...all])
  }
  return { form, onChangeSingle, onChangeAll, emptyCheckbox, checkAllCheckbox }
}

export default useCheckbox
