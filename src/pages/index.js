import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <>
      <Link to="/writing/">Writing</Link>
      <Header text="Home" />
    </>
  )
}
