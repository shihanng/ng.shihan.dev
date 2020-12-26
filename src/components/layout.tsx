import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import tw, { GlobalStyles, styled } from "twin.macro"
import Contact from "../components/contact"

const Container = tw.div`font-sans flex flex-col h-screen text-gray-800 max-w-full px-5 mx-auto md:max-w-4xl`
const Page = tw.div`flex-1 prose prose-lg py-7 max-w-max`
const Ul = tw.ul`sm:flex sm:flex-row`
const Header = tw.header`text-center py-5 font-serif text-2xl`
const Footer = tw.footer`text-center py-5 font-serif text-sm`
const Li = styled.li`
  ${tw`py-2 font-semibold text-gray-500 sm:ml-5`}
  & .active {
    ${tw`text-purple-700`}
  }
  &:hover {
    ${tw`text-gray-800`}
  }
`

interface ListLinkProps {
  to: string
}

const ListLink: React.FC<ListLinkProps> = ({ to, children }) => (
  <Li>
    <Link
      to={to}
      getProps={({ isCurrent }) => (isCurrent ? { className: "active" } : {})}
    >
      {children}
    </Link>
  </Li>
)

const Nav = tw.nav`flex justify-center sm:justify-end`

const NavBar: React.FC = () => {
  return (
    <Nav>
      <Ul>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/writing/">Writing</ListLink>
      </Ul>
    </Nav>
  )
}

const Layout: React.FC = ({ children }) => {
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
        <NavBar />
        <Page>{children}</Page>
        <Footer>
          <div>
            &copy; Shi Han NG |{" "}
            <a href="https://creativecommons.org/licenses/by-nc/4.0/">
              CC BY-NC 4.0
            </a>
          </div>
          <Contact />
        </Footer>
      </Container>
    </>
  )
}

export default Layout
