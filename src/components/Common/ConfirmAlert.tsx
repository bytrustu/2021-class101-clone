import React from 'react'
import { Button } from '../../components'
import styled from 'styled-components'

const StyleConfirmAlert = styled.div`
  @media (max-width: 768px) {
    width: 300px;
  }
  position: absolute;
  top: 45% !important;
  left: 50% !important;
  z-index: 1010;
  border: 1px solid #c2c2c2;
  background-color: #fff;
  width: 400px;
  border-radius: 2px;
  animation: fadeIn 0.5s forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(-50%, -70%);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }
`

const StyleConfirmAlertBody = styled.div`
  line-height: 32px;
  padding: 30px 36px 15px 37px;
`

const StyleConfirmAlertFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-top: 0;
  padding: 0 40px 25px 0;
`

const StyleConfirmAlertMessage = styled.h5`
  @media (max-width: 768px) {
    font-size: 15px !important;
    text-align: center;
  }
  font-weight: 500 !important;
  font-size: 18px !important;
  letter-spacing: -1px !important;
`

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ConfirmAlert = ({ view = false, setView, config, isSuccess = true }) => {
  const { message, isOk = true, okText = '확인', okOnClick, isCancel = false, cancelText = '취소' } = config

  const onClickOk = () => {
    setView(false)
    okOnClick && okOnClick()
  }

  const onClickCancel = () => {
    setView(false)
  }

  return (
    view && (
      <div className="ant-modal-mask" style={{ zIndex: 10000 }}>
        <StyleConfirmAlert>
          <StyleConfirmAlertBody>
            <StyleConfirmAlertMessage>{message}</StyleConfirmAlertMessage>
          </StyleConfirmAlertBody>
          <StyleConfirmAlertFooter>
            {isCancel && <Button onClickHandle={onClickCancel}>{cancelText}</Button>}
            {isOk && <Button onClickHandle={onClickOk}>{okText}</Button>}
          </StyleConfirmAlertFooter>
        </StyleConfirmAlert>
      </div>
    )
  )
}

export default ConfirmAlert
