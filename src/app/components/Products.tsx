'use client'
import { styled } from "styled-components";
import { Container } from "../styles/util";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo.png";

const Products = () => {
  return (
    <StyledProducts>
      <StyledTitle>
        <span>De</span>staques
      </StyledTitle>
      <StyledProductList>
        <StyledProductItem>
          <Link href="/">
            <Image src={logo} width={230} height={230} alt="produto" />
            <StyledProductName>
              Smartphone Samsung Galaxy j8 64gb Dual Chip Android 8.0
            </StyledProductName>
            <StyledProductPrice>R$ 1299,00</StyledProductPrice>
            <StyledProductSplitPrice>
              10x de R$ 129,90 sem juros
            </StyledProductSplitPrice>
          </Link>
        </StyledProductItem>
      </StyledProductList>
    </StyledProducts>
  );
};

const StyledProducts = styled.section`
  ${Container};
`;

const StyledTitle = styled.h2`
    font-size: 1.875rem;
    font-weight: 700;
    margin-top: 3.125rem ;
    margin-bottom: 2.8rem;
    span{
        text-decoration: underline ${({ theme }) => theme.colors.primary};

    }
`;

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.125rem;
  margin-bottom: 11.25rem;
`;

const StyledProductItem = styled.div`
  height: 23.125rem;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  box-shadow: 5px 0px 10px #d9d9d9;
  padding: 1rem;

  &:hover {
    box-shadow: 5px 10px 10px #d9d9d9;
    p {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const StyledProductName = styled.p`
  font-size: 0.875rem;
`;

const StyledProductPrice = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  margin: 1.125rem 0;
`;

const StyledProductSplitPrice = styled.small`
  font-size: 0%.75rem;
  font-weight: 700;
  color: #999;
`;
export default Products;
