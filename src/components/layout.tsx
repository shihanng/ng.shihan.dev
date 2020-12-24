import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import tw, { GlobalStyles } from "twin.macro"

const Container = tw.div`flex flex-col h-screen`
const Page = tw.div`flex-1 max-w-2xl mx-auto px-10`
const Li = tw.li`inline-block ml-3`
const Ul = tw.ul`list-none float-right`
const Header = tw.header`text-center py-5`
const Footer = tw.footer`text-center py-5`

const ListLink = ({ to, children }) => (
  <Li>
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
    <Container>
      <GlobalStyles />
      <Header>{data.site.siteMetadata.title}</Header>
      <Page>
        <Ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/writing/">Writing</ListLink>
        </Ul>
        {children}
      </Page>
      <Footer>&copy; Shi Han NG</Footer>
    </Container>
  )
}
