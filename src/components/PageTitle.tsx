import React from "react"
import tw from "twin.macro"

const H1 = tw.h1`font-semibold prose prose-2xl mb-2`

export interface Props {
  title: string
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return <H1>{title}</H1>
}

export default PageTitle
