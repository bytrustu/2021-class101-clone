import { ReactElement, useState } from 'react'
import { useInputs } from '../hooks'
import { ConfirmAlert, BlockPage } from '../components'
import { IMessageAlert } from '../types'

const useAlert = () => {
  const [view, setView] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [config, , setConfig] = useInputs<IMessageAlert>({
    message: '',
    isOk: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    okOnClick: () => {},
    isCancel: false,
  })

  const MessageAlert = ({ message, isOk = true, okOnClick, isCancel = false, isSuccess = true }: IMessageAlert) => {
    setView(true)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setConfig({
      message: message,
      isOk: isOk,
      okOnClick: okOnClick,
      isCancel: isCancel,
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const requestApiConfirmHanlder = ({ funcAPI = () => {}, data = {}, message = '', afterAction = () => {} }) => {
    MessageAlert({
      message: message,
      isSuccess: true,
      isOk: true,
      okOnClick: () => {
        setLoading(true)
        funcAPI()
      },
      isCancel: true,
    })
  }

  const Alert = () => ConfirmAlert({ view, setView, config, isSuccess: true }) as ReactElement<any>
  const AlertLoading = () => BlockPage({ view: loading }) as ReactElement<any>

  return {
    Alert,
    MessageAlert,
    requestApiConfirmHanlder,
    AlertLoading,
  }
}

export default useAlert
