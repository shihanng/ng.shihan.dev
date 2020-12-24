import { Link } from "gatsby"
import React from "react"
import tw from "twin.macro"
import Header from "../components/header"

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`

export default function Home() {
  return (
    <>
      <Link to="/writing/">Writing</Link>
      <Header text="Home" />
      <Button>Click me</Button>
    </>
  )
}
