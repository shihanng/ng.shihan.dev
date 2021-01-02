import React from "react"
import tw from "twin.macro"
import Layout from "../components/Layout"

const P = tw.p`mb-3`

export default function Home() {
  return (
    <Layout>
      <P>
        Software engineer based in Tokyo. I have a background in numerical
        simulations focusing on granular particle simulation and computational
        fluid dynamics. After graduate school, I started my software engineering
        career working in the backend domain of web development. I mainly worked
        with the Go programming language. Then slowly expanded my knowledge to
        the infrastructure domains (AWS, Terraform, etc.). Now I am also working
        in the frontend realm with TypeScript and React.js. I am also exposing
        myself to Python and the Django framework at the same time.
      </P>
      <P>
        I enjoy being a generalist and love to learn new things from various
        stacks of technologies: from new programming languages/paradigms,
        monolithic/microservices architectures, distributed systems, etc.
      </P>
      <P>
        I strongly believe in automation, be it automated code testings/lintings
        or continuous integrations/deliveries (CI/CD). I care about the software
        maintainability and have no ego and emotional attachments to the code
        that I wrote. I find myself learning most efficiently by giving and
        receiving code reviews.
      </P>
    </Layout>
  )
}
