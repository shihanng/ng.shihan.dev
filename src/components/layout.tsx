import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import tw, { GlobalStyles, styled } from "twin.macro"
import Button from "../components/button"
import Contact from "../components/contact"

const Container = tw.div`font-sans flex flex-col min-h-screen text-gray-800 max-w-full`
const Header = tw.header`flex place-content-between sm:place-content-center px-5 items-center bg-white relative z-20 h-16 text-center pt-4 font-serif text-2xl`
const Footer = tw.footer`text-center my-4 font-serif text-sm px-5`
const Li = styled.li`
  ${tw`py-2 font-semibold text-center text-gray-500 sm:ml-5`}
  & .active {
    ${tw`text-purple-700`}
  }
  &:hover {
    ${tw`text-gray-800`}
  }
`
const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}

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

interface UIProps {
  open: boolean
}

const Ul = styled.ul(({ open }: UIProps) => [
  tw`flex flex-col pt-16 bg-white sm:pt-0 sm:flex-row sm:shadow-none`,
  tw`justify-center shadow-lg sm:justify-end`,
  tw`absolute`,
  tw`top-0 left-0`,
  tw`sm:relative`,
  tw`transform`,
  tw`sm:translate-y-0`,
  tw`w-full`,
  tw`transition-transform sm:transition-none ease-linear duration-300`,
  !open && tw`-translate-y-full`,
])

interface NavBarProps {
  open: boolean
}

const NavBar: React.FC<NavBarProps> = ({ open }) => {
  return (
    <>
      <nav tw="px-5 mx-auto max-w-4xl">
        <Ul open={open}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/writing/">Writing</ListLink>
        </Ul>
      </nav>
    </>
  )
}

const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false)

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

  const node = React.useRef<HTMLDivElement>(null)
  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <GlobalStyles />
      <Helmet title={data.site.siteMetadata.title} defer={false} />
      <Container>
        <Header>
          <div>{data.site.siteMetadata.title}</div>
          <div tw="flex content-center sm:hidden">
            <Button open={open} setOpen={setOpen} />
          </div>
        </Header>
        <div tw="z-10" ref={node}>
          <NavBar open={open} />
        </div>
        <div tw="z-0 flex-grow prose prose-lg my-5 max-w-max px-5 mx-auto md:max-w-4xl">
          {children}
        </div>
        <Footer>
          &copy; Shi Han NG |{" "}
          <a href="https://creativecommons.org/licenses/by-nc/4.0/">
            CC BY-NC 4.0
          </a>
          <Contact />
        </Footer>
      </Container>
    </>
  )
}

export default Layout
