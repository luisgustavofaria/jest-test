import React, { useContext } from 'react'
import { CartContext } from '@/Hooks/useCart'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const SuccessContainer = styled.div`
  background-color: #cac9c9;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
`

const ContainerH = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`
const ContainerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;
`

const Item = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  border-radius: 15px;
  display: flex;
`

const ContainerP = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`

const P = styled.span`
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`

const StyledButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`

const SuccessPage: React.FC = () => {
  const { cartItems, clearCart } = useContext(CartContext)

  return (
    <SuccessContainer>
      <Link href="/">
        <StyledButton onClick={clearCart}>Voltar para Home</StyledButton>
      </Link>
      <ContainerH>
        <h1>Compra Realizada com Sucesso!</h1>
        <h2>Itens do seu Pedido:</h2>
      </ContainerH>
      <ContainerItem>
        {cartItems.map((item) => (
          <Item key={item.id}>
            <Image width={100} height={100} src={item.photo} alt={item.name} />
            <ContainerP>
              <P>{item.name}</P>
              <P>Quantidade: {item.quantity}</P>
            </ContainerP>
          </Item>
        ))}
      </ContainerItem>
    </SuccessContainer>
  )
}

export default SuccessPage
