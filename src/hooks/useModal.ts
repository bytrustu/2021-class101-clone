import { useState } from 'react'

const useModal = ({ ModalComponent }: { ModalComponent: any }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [data, setData] = useState<{ [key: string]: any }>({})
  const Modal = () => ModalComponent({ data, visible, setVisible })
  const ModalConfig = ({ modalData = {} }) => {
    setVisible(true)
    setData(modalData)
  }

  return {
    Modal,
    ModalConfig,
  }
}

export default useModal
