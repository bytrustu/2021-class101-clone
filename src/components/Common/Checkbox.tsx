import React, { FC } from 'react'
import styled from 'styled-components'
import { CircleIcon } from '../../components'

const StyleCheckbox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;

  .checkbox {
    margin-top: 0;
    padding-left: 4px;
    color: #404040;
    cursor: pointer;
    font-size: 13px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .checkbox input:checked + i:after {
    opacity: 1;
  }

  i + span {
    line-height: 1rem;
  }

  .checkbox span {
    display: inline-block;
    margin-left: 0.6rem;
    font-size: 0.75rem;
    color: #222;
    line-height: 20px;
    vertical-align: top;
  }

  .checkbox {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .checkbox input {
    visibility: hidden;
    vertical-align: middle;
    position: absolute;
    height: 100%;
  }

  .checkbox i {
    position: relative;
    display: inline-block;
    height: 35px;
    width: 35px;
    outline: 0;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 50%;
  }

  input[type='checkbox'] + i:before {
    content: '';
    position: absolute;
    display: block;
    top: 20%;
    left: 55%;
    transform: rotate(-45deg) translate(-50%, -50%);
    width: 49%;
    height: 30%;
    border-bottom: 2px solid #ddd;
    border-left: 2px solid #ddd;
  }

  .checkbox input[type='checkbox']:checked + i {
    background-color: #3869da;
    border: 1px solid #3869da;
  }

  input[type='checkbox']:checked + i:before {
    content: '';
    position: absolute;
    display: block;
    top: 20%;
    left: 55%;
    transform: rotate(-45deg) translate(-50%, -50%);
    width: 49%;
    height: 30%;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
  }

  .checkbox input + i:after {
    position: absolute;
    opacity: 0;
    transition: opacity 0.1s;
  }
`

interface ICheckboxProps {
  onChange: (checked: boolean, name: string | undefined, id: string | undefined) => void
  checked?: boolean
  id?: string
  name?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Checkbox: FC<ICheckboxProps> = ({ onChange, checked, id, name, onClick }) => {
  return (
    <StyleCheckbox>
      <label className="checkbox">
        <input
          name={name ? name : ''}
          type="checkbox"
          onChange={(e) => onChange && onChange(e.target.checked, name, id)}
          onClick={onClick}
          checked={checked}
        />
        <CircleIcon />
      </label>
    </StyleCheckbox>
  )
}

export default React.memo(Checkbox)
