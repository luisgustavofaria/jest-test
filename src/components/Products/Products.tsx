/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`

const ContainerProducts = styled.div`
  margin: 0 auto;
  max-width: 938px;

  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
`

const ContainerCard = styled.div`
  width: 218px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  @media (max-width: 768px) {
    width: 250px;
    height: 328px;
  }
`

const ContainerImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 18px;
`

const ContainerTitlePrice = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 14px;
  gap: 15px;
`

const Title = styled.span`
  font-weight: 400;
  font-size: 14px;
`

const Price = styled.span`
  background-color: #373737;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  padding: 5px 7px;
  border-radius: 8px;
`

const Description = styled.span`
  height: 50px;
  font-weight: 300;
  font-size: 10px;
  padding: 0 14px;
`

const AddToCartButton = styled.button`
  width: 100%;
  height: 32px;
  padding: 7px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  cursor: pointer;

  > span {
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
  }
`
const FooterContainer = styled.div`
  height: 34px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  span {
    font-weight: 400;
    font-size: 12px;
  }
`
import { ShoppingBagOpen } from '@phosphor-icons/react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { Shimmer } from 'react-shimmer'
import { CartContext } from '@/Hooks/useCart'

export interface IProduct {
  id: number
  name: string
  description?: string
  price: number
  photo: string
  quantity: number
}

export default function Products() {
  const { addToCart } = useContext(CartContext)

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery('products', async () => {
    const response = await axios.get(
      'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
    )
    return response.data.products
  })

  //console.log(products)

  if (isLoading) {
    return (
      <ContainerProducts>
        {Array.from({ length: 8 }).map((_, index) => (
          <ContainerCard key={index} data-testid="loading-shimmer">
            <Shimmer height={300} width={218} />
          </ContainerCard>
        ))}
      </ContainerProducts>
    )
  }

  if (isError) {
    return <div>Error loading products</div>
  }

  return (
    <PageContainer>
      <ContainerProducts>
        {products.map((product: IProduct) => (
          <ContainerCard key={product.id} data-testid="product-card">
            <ContainerImage>
              <Image src={product.photo} width={100} height={100} alt="" />
            </ContainerImage>
            <ContainerTitlePrice>
              <Title>{product.name}</Title>
              <Price>R${Number(product.price).toFixed(0)}</Price>
            </ContainerTitlePrice>
            <Description>{product.description}</Description>
            <AddToCartButton onClick={() => addToCart(product)}>
              <ShoppingBagOpen color="#FFFFFF" size={16} />
              <span>COMPRAR</span>
            </AddToCartButton>
          </ContainerCard>
        ))}
      </ContainerProducts>
      <FooterContainer>
        <span data-testid="FooterContainer">
          MKS sistemas © Todos os direitos reservados
        </span>
      </FooterContainer>
    </PageContainer>
  )
}
