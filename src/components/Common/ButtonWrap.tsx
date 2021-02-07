import React, { FC } from 'react'
import styled from 'styled-components'
import { IButton } from '../../types'
import { Button } from '../../components'

const StyleButtonWrap = styled.div`
  @media (min-width: 768px) and (max-width: 1022px) {
    display: inline-block;
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px 0 32px;
    margin-top: 1rem;
    .button {
      width: 100%;
      button {
        width: 100%;
      }
    }
    .react-loading-skeleton {
      width: 100% !important;
      margin: 0;
    }
  }
  display: inline-block;
`
interface IButtonWrap {
  buttonData: IButton[]
}

const ButtonWrap: FC<IButtonWrap> = ({ buttonData }) => {
  return (
    <StyleButtonWrap>
      {buttonData &&
        buttonData.map((button: IButton, index: number) => (
          <Button
            key={index}
            value={button.value}
            buttonLoading={button.loading}
            onClickHandle={button.onClickHandle}
          />
        ))}
    </StyleButtonWrap>
  )
}

export default React.memo(ButtonWrap)
