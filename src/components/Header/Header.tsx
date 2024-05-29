import { ShoppingCart } from '@phosphor-icons/react'
import styled from 'styled-components'
import Cart from '../Cart/Cart'
import { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { CartContext } from '@/Hooks/useCart'

const HeaderBackGround = styled.header`
  background-color: ${(props) => props.theme.primary};
`

const HeaderContainer = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  height: 101px;
  padding: 28px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 50px;
    padding: 5px 20px;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`

const Title01 = styled.h1`
  font-weight: 600;
  font-size: 40px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Title02 = styled.h2`
  font-weight: 300;
  font-size: 20px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const CartButton = styled.button`
  width: 90px;
  height: 45px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 52px;
    height: 26px;
    padding: 0;
    gap: 5px;
  }
`

export default function Header() {
  const { cartItems, hiddenCart, toggleCart } = useContext(CartContext)

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <>
      <HeaderBackGround>
        <HeaderContainer>
          <Logo>
            <Title01>MKS</Title01>
            <Title02>Sistemas</Title02>
          </Logo>

          {!hiddenCart ? (
            <motion.div
              style={{
                position: 'fixed',
                top: '0%',
                left: '100%',
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: hiddenCart ? 0 : 1,
                scale: hiddenCart ? 0 : 1,
              }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 70 }}
            >
              <Cart />
            </motion.div>
          ) : (
            <CartButton onClick={toggleCart}>
              <ShoppingCart size={20} />
              <span>{totalQuantity}</span>
            </CartButton>
          )}
        </HeaderContainer>
      </HeaderBackGround>
    </>
  )
}
