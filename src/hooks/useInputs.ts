import { useState, useCallback } from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useInputs = <T>(initialForm: T) => {
  const [form, setForm] = useState(initialForm)
  const onChange = useCallback((e) => {
    const { name, value } = e.target
    setForm((form) => ({ ...form, [name]: value }))
  }, [])
  const reset = useCallback(() => setForm(initialForm), [initialForm])
  return [form, onChange, setForm, reset]
}

export default useInputs
