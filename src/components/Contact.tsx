import { IconContext } from "@react-icons/all-files"
import { FaDev } from "@react-icons/all-files/fa/FaDev"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaKeybase } from "@react-icons/all-files/fa/FaKeybase"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaMedium } from "@react-icons/all-files/fa/FaMedium"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import tw from "twin.macro"

const Container = tw.div`flex justify-center space-x-2 pt-2`

const socialContacts: {
  link: string
  icon: React.ReactNode
}[] = [
  {
    link: "https://github.com/shihanng",
    icon: <FaGithub title="GitHub" />,
  },
  {
    link: "https://www.linkedin.com/in/shihan-ng/",
    icon: <FaLinkedin title="LinkedIn" />,
  },
  {
    link: "https://twitter.com/shihanng",
    icon: <FaTwitter title="Twitter" />,
  },
  {
    link: "https://dev.to/shihanng",
    icon: <FaDev title="Dev" />,
  },
  {
    link: "https://medium.com/@shihanng",
    icon: <FaMedium title="Medium" />,
  },
  {
    link: "https://www.instagram.com/shihanng/",
    icon: <FaInstagram title="Instagram" />,
  },
  {
    link: "https://keybase.io/shihanng",
    icon: <FaKeybase title="Keybase" />,
  },
  {
    link: "mailto:shihanng@gmail.com",
    icon: <FaEnvelope title="Email" />,
  },
]

export default function Contact() {
  return (
    <Container>
      <IconContext.Provider value={{ size: "2.0em" }}>
        {socialContacts.map(({ link, icon }) => (
          <a key={link} href={link}>
            {icon}
          </a>
        ))}
      </IconContext.Provider>
    </Container>
  )
}
