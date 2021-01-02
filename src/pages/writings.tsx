import { FaDev } from "@react-icons/all-files/fa/FaDev"
import { FaMedium } from "@react-icons/all-files/fa/FaMedium"
import { SiHatenabookmark } from "@react-icons/all-files/si/SiHatenabookmark"

import React from "react"
import tw, { styled } from "twin.macro"
import Layout from "../components/Layout"

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
    ${tw`flex mb-1 pl-7 hover:text-primary`}
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
  {
    title: "goa v2 on Google App Engine",
    url:
      "https://medium.com/henngeblog/goa-v2-on-google-app-engine-c3c4ab8bfbb5",
    icon: <FaMedium size="1.3em" />,
  },
  {
    title: "Switching Between Kubernetes Clusters in GKE",
    url:
      "https://medium.com/@shihanng/switching-between-kubernetes-clusters-in-gke-2f88c89c70f",
    icon: <FaMedium size="1.3em" />,
  },
  {
    title: "Windows Management on macOS",
    url: "http://hde-advent-2017.hatenadiary.jp/entry/2017/12/24/000000",
    icon: <SiHatenabookmark size="1.3em" />,
  },
]

export default function Writings() {
  return (
    <Layout header="Writings">
      <p tw="mb-3">
        Sometimes I document things that I've learned in public spaces. Here is
        a list of articles that I've written on various platforms.
      </p>
      <List>
        {data.map(({ url, icon, title }) => (
          <ListItem key={url} icon={icon} url={url}>
            {title}
          </ListItem>
        ))}
      </List>
    </Layout>
  )
}
