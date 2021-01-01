import React from "react"
import Layout from "../components/layout"
import tw, { styled } from "twin.macro"
import { FaDev } from "@react-icons/all-files/fa/FaDev"

const List = tw.ul`
list-none
relative
`

const IconWrapper = tw.span`
flex
items-center
`

type ListItemProps = {
  icon: React.ReactNode
  url: string
}

const ListItem: React.FC<ListItemProps> = ({ icon, url, children }) => {
  const Li = styled.li`
    ${tw`flex pl-6`}
    &:before,
    & > ${IconWrapper} {
      ${tw`absolute left-0`}
    }
  `

  return (
    <Li>
      <IconWrapper>{icon}</IconWrapper>
      <a href={url}>{children}</a>
    </Li>
  )
}

const data: { icon: React.ReactNode; url: string; title: string }[] = [
  {
    title: "Publishing DEV articles from GitHub",
    url: "https://dev.to/shihanng/publishing-dev-articles-from-github-3jc2",
    icon: <FaDev size="1.3em" />,
  },
  {
    title: "How to read CSV file from Amazon S3 in Python",
    url:
      "https://dev.to/shihanng/how-to-read-csv-file-from-amazon-s3-in-python-4ee9",
    icon: <FaDev size="1.3em" />,
  },
  {
    title: "Memory Reservation in Amazon Elastic Container Service",
    url:
      "https://dev.to/shihanng/memory-reservation-in-amazon-elastic-container-service-3l4h",
    icon: <FaDev size="1.3em" />,
  },
  {
    title: "tfvar - A tool to help you write Terraform's variable definitions",
    url:
      "https://dev.to/shihanng/tfvar-a-tool-to-help-you-write-terraform-s-variable-definitions-1j65",
    icon: <FaDev size="1.3em" />,
  },
  {
    title: "Improve your PostgreSQL Workflows with vim-tmux-runner",
    url:
      "https://dev.to/shihanng/improve-your-postgresql-workflows-with-vim-tmux-runner-51g4",
    icon: <FaDev size="1.3em" />,
  },
  {
    title: "gig: a gitignore generator",
    url: "https://dev.to/shihanng/gig-a-gitignore-generator-opc",
    icon: <FaDev size="1.3em" />,
  },
  {
    title: "Managing Go Versions with direnv",
    url: "https://dev.to/shihanng/managing-go-versions-with-direnv-19mb",
    icon: <FaDev size="1.3em" />,
  },
  {
    title:
      "Looking into PostgreSQL DB's tables of your Development Environment",
    url:
      "https://dev.to/shihanng/looking-into-postgresql-db-s-tables-of-your-development-environment-1i0i",
    icon: <FaDev size="1.3em" />,
  },
]

export default function Writing() {
  return (
    <Layout header="Writing">
      <List>
        {data.map(({ url, icon, title }) => (
          <ListItem icon={icon} url={url}>
            {title}
          </ListItem>
        ))}
      </List>
    </Layout>
  )
}
