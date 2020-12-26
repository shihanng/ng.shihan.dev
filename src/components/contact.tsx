import { IconContext } from "@react-icons/all-files"
import { FaDev } from "@react-icons/all-files/fa/FaDev"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaKeybase } from "@react-icons/all-files/fa/FaKeybase"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaMedium } from "@react-icons/all-files/fa/FaMedium"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import tw, { css } from "twin.macro"

const Container = tw.div`flex justify-center space-x-2 pt-2`
const hoverStyles = css`
  ${tw`text-gray-700`}
`

export default function Contact() {
  return (
    <Container>
      <IconContext.Provider value={{ size: "2.0em" }}>
        <FaGithub css={hoverStyles} title="GitHub" />
        <FaLinkedin css={hoverStyles} title="LinkedIn" />
        <FaTwitter css={hoverStyles} title="Twitter" />
        <FaDev css={hoverStyles} title="Dev" />
        <FaMedium css={hoverStyles} title="Medium" />
        <FaInstagram css={hoverStyles} title="Instagram" />
        <FaKeybase css={hoverStyles} title="Keybase" />
        <FaEnvelope css={hoverStyles} title="Email" />
      </IconContext.Provider>
    </Container>
  )
}
