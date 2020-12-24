import React from "react"

export interface Props {
  text: string
}

export default function Header(props: Props) {
  const { text } = props

  return <h1>{text}</h1>
}
