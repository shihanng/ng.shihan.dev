import React from "react"
import { render } from "@testing-library/react"
import Button from "../Button"

test("button should render", () => {
  const { debug } = render(<Button open setOpen={() => {}} />)
  console.log(debug())
})
