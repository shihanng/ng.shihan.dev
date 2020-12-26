import React from "react"

export interface Props {
  text: string
}

const Header: React.FC<Props> = (props: Props) => {
  const { text } = props

  return <h1>{text}</h1>
}

export default Header
