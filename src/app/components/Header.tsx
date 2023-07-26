'use client';

import { styled } from "styled-components";
import Logo from '../../../public/logo.png';
import ShoppingCart from '../../../public/carrinho.png'

import Image from "next/image";
import Link from "next/link";

const Header = () =>{
   return(
    <>
        <StyledHeader>
            <StyledNavbar>
                <Image src={Logo} width={200} height={100} alt="ImagineShop logo"/>
                <StyleMenu>
                    <StyleMenuItem>
                        <Link href='/'>Home</Link>
                    </StyleMenuItem>
                    <StyleMenuItem>
                    <Link href='/about'>Sobre</Link>
                    </StyleMenuItem>
                    <StyleMenuItem>
                    <Link href='/shopping-cart'>
                        <Image src={ShoppingCart} width={52} height={52} alt="Shopping Cart Image"/>
                    </Link>
                    </StyleMenuItem>
                </StyleMenu>
            </StyledNavbar>
        </StyledHeader>
    </>
   )
}

const StyledHeader = styled.header`
  width: 100vw;
  margin: 1.87rem 0 3.125rem 0;
`;

const StyledNavbar = styled.nav`
    width: 1140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`

const StyleMenu = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2.5rem;
    align-items: center;

`

const StyleMenuItem = styled.li`
    font-size: 16px;
    font-weight: 700;

    a{
        text-decoration: none;
        color: #000;

    }

    a:hover{
        color: orange;
    }

`

export default Header;

