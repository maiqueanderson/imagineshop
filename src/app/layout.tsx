'use client';

import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import StyledComponentsRegistry from './lib/registry';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';


const montserrat = Montserrat({ subsets: ['latin']})

const theme = {
  colors: {
    primary: '#d15b34',
    secondary: '#777'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <ThemeProvider theme={theme}>
        <body className={montserrat.className}>
          <StyledComponentsRegistry>
            <Header />
            
              {children}
              <Footer/>
            
          </StyledComponentsRegistry>
        </body>
      </ThemeProvider>
    </html>
  )
}