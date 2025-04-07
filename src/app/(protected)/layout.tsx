import { ClerkProvider } from '@clerk/nextjs'
import React, { type PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
  return <ClerkProvider>{children}</ClerkProvider>
}

export default MainLayout
