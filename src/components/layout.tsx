import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import tw, { GlobalStyles } from "twin.macro"

const Container = tw.div`max-w-2xl my-8 mx-auto`
const Li = tw.li`inline-block`
const Ul = tw.ul`list-none float-right`

const ListLink = ({ to, children }) => (
  <Li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={to}>{children}</Link>
  </Li>
)

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <>
      <GlobalStyles />
      <Container>
        <h3>{data.site.siteMetadata.title}</h3>
        <Ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/writing/">Writing</ListLink>
        </Ul>
        {children}
      </Container>
    </>
  )
}
