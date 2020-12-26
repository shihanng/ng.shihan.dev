import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import tw, { GlobalStyles } from "twin.macro"

const Container = tw.div`flex flex-col h-screen text-gray-800`
const Page = tw.div`flex-1 mx-5 md:mx-auto font-sans prose prose-lg py-7 max-w-4xl`
const Li = tw.li`inline-block ml-3`
const Ul = tw.ul`list-none float-right`
const Header = tw.header`text-center py-5 font-serif text-2xl`
const Footer = tw.footer`text-center py-5 font-serif text-sm`
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
    <>
      <Helmet title={data.site.siteMetadata.title} defer={false} />
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
    </>
  )
}
