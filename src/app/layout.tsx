import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bechsud Test",
  description: "Hecho con Next.js",
};

export default function RootLayout({ children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ChakraProvider>
      
        {children}
    
    </ChakraProvider>
    
  );
}
