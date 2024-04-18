import { FC } from "react"

const Products: FC = (props: any) => {
  console.log("[ props ] >", props)

  return (
    <div>
      <header>Products</header>
      <main>{props.children}</main>
    </div>
  )
}

export default Products
