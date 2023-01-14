import { DeliveryAddressFormContainer, Input, InputContainer } from './styles'

const inputSize = {
  'very-small': '3.75rem',
  small: '12.5rem',
  md: '17.25rem',
  lg: '21.75rem',
}

export function DeliveryAddressForm() {
  return (
    <DeliveryAddressFormContainer>
      <Input inputSize={inputSize.small} placeholder="CEP" />
      <Input placeholder="Rua" />
      <InputContainer>
        <Input inputSize={inputSize.small} placeholder="Número" />
        <Input inputSize={inputSize.lg} placeholder="Complemento (opcional)" />
      </InputContainer>
      <InputContainer>
        <Input inputSize={inputSize.small} placeholder="Bairro" />
        <Input inputSize={inputSize.md} placeholder="Cidade" />
        <Input inputSize={inputSize['very-small']} placeholder="UF" />
      </InputContainer>
    </DeliveryAddressFormContainer>
  )
}
