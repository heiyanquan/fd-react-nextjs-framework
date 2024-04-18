"use client"

import { FC } from "react"

const Page: FC = (props: any) => {
  return (
    <div>
      <header>common layout</header>
      <main>{props.children}</main>
    </div>
  )
}

export default Page
