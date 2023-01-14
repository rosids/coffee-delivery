import styled from 'styled-components'

export const DeliveryAddressFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 1rem;
  margin-top: 2rem;
`
interface InputProps {
  inputSize?: string
}

export const Input = styled.input<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;

  width: ${({ inputSize }) => inputSize || '35rem'};
  height: 42px;

  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;
`
