/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'

const CartContainer = styled.div`
  background-color: ${(props) => props.theme.primary};

  height: 100vh;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;

  @media (max-width: 768px) {
    max-width: 485px;
  }
`

const CartHeader = styled.div`
  padding: 50px 50px 0px 50px;
  margin-bottom: 20px;
  display: flex;

  justify-content: space-between;

  > span {
    font-weight: 700;
    font-size: 27px;
    color: #ffffff;
    width: 170px;
  }
  @media (max-width: 768px) {
    span {
      width: 170px;
    }
  }

  @media (max-width: 1100px) {
    span {
      font-size: 20px;
    }
  }
`

const Close = styled.button`
  width: 32px;
  height: 32px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 999px;

  border: none;
  cursor: pointer;
  font-size: 27px;

  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    color: ${(props) => props.theme.primary};
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 50px;
  overflow-y: auto; /* Adiciona a rolagem vertical quando necessário */
  flex: 1;
  z-index: 1;

  @media (max-width: 768px) {
    align-items: center;
    gap: 15px;
  }
`

const Item = styled.div`
  margin-top: 30px;
  position: relative;
  background-color: #ffffff;
  width: 385px;
  height: 101px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 25px;

  img {
    width: 50px;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    width: 250px;
    height: 220px;
    flex-direction: column;
    gap: 10px;

    img {
      width: 80px;
    }
  }
`

const Title = styled.span`
  width: 120px;
  font-weight: 400;
  font-size: 13px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const QuantityPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`

const QuantityContainer = styled.div`
  background-color: #ffffff;

  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;

  > span {
    font-weight: 400;
    font-size: 5px;
    color: #000000;
    display: flex;
    align-self: flex-start;
    margin-bottom: 4px;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`
const Quantity = styled.div`
  background-color: #ffffff;
  width: 50px;
  height: 19px;
  border-radius: 4px;
  display: flex;
  align-items: center;

  border: 0.3px solid #bfbfbf;

  span {
    font-weight: 400;
    font-size: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    font-weight: 400;
    font-size: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #ffffff;
  }

  button:first-child {
    border-right: 0.3px solid #bfbfbf;
    height: 11px;
    cursor: pointer;
  }

  button:last-child {
    border-left: 0.3px solid #bfbfbf;
    height: 11px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 35px;

    span {
      font-size: 24px;
    }
    button:first-child {
      height: 20px;
      font-size: 24px;
    }

    button:last-child {
      height: 20px;
      font-size: 24px;
    }
  }
`

const Price = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 15px;
    background-color: #373737;
    color: #ffffff;
    width: 84px;
    height: 34px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const RemoveItem = styled(Close)`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  z-index: 2;
  color: #ffffff;
  padding: 3px;

  @media (max-width: 768px) {
    background-color: #ffffff;
    color: #000000;
    top: 5px;
    right: 5px;
    width: 30px;
  }
`

const Footer = styled.div`
  div:first-child {
    padding: 50px 50px 30px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background-color: #000000;
    padding: 30px 20px 30px 20px;
    width: 100%;
    cursor: pointer;
    text-decoration: none; /* Remova o sublinhado */
    outline: none; /* Remova o contorno ao focar */
  }

  span {
    font-weight: 700;
    font-size: 28px;
    color: #ffffff;
  }

  @media (max-width: 1100px) {
    span {
      font-size: 20px;
    }
  }
  @media (max-width: 768px) {
    div:first-child {
      padding: 30px 30px 10px 30px;
    }
    button {
      padding: 20px 10px 20px 10px;
    }
  }
`

import { X } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { useContext, useState } from 'react'
import { CartContext, CartContextType } from '@/Hooks/useCart'
import { IProduct } from '../Products/Products'
import Link from 'next/link'

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    toggleCart,
  } = useContext<CartContextType>(CartContext)

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  return (
    <CartContainer>
      <CartHeader>
        <span>Carrinho de compras</span>

        <Close onClick={toggleCart} data-testid="toggleCart">
          <X size={16} />
        </Close>
      </CartHeader>
      <ItemContainer>
        {cartItems.map((item: IProduct) => (
          <Item key={item.id}>
            <div>
              <img src={item.photo} alt={item.name} />
            </div>
            <Title>{item.name}</Title>
            <QuantityPriceContainer>
              <QuantityContainer>
                <span>Qtd</span>

                <Quantity>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </Quantity>
              </QuantityContainer>
              <Price>R${item.price}</Price>
            </QuantityPriceContainer>
            <RemoveItem onClick={() => removeFromCart(item.id)}>
              <X />
            </RemoveItem>
          </Item>
        ))}
      </ItemContainer>
      <Footer>
        <div>
          <span>Total</span>
          <span>R${calculateTotalPrice().toFixed(2)}</span>
        </div>
        <Link
          href={{
            pathname: '/success',
          }}
        >
          <button>
            <span>Finalizar Compra</span>
          </button>
        </Link>
      </Footer>
    </CartContainer>
  )
}

export default Cart
