import { IconContext } from "@react-icons/all-files"
import { HiOutlineMenu } from "@react-icons/all-files/hi/HiOutlineMenu"
import { HiOutlineX } from "@react-icons/all-files/hi/HiOutlineX"
import React from "react"
import tw, { styled } from "twin.macro"

const Burger = styled.button(({ open }: { open: boolean }) => [
  open && tw`hidden`,
])

const Close = styled.button(({ open }: { open: boolean }) => [
  !open && tw`hidden`,
])

interface Props {
  open: boolean
  setOpen: (val: boolean) => void
}

const Button: React.FC<Props> = ({ open, setOpen }) => {
  return (
    <IconContext.Provider value={{ size: "1.2em" }}>
      <Burger
        open={open}
        onClick={() => {
          setOpen(true)
        }}
      >
        <HiOutlineMenu />
      </Burger>
      <Close
        open={open}
        onClick={() => {
          setOpen(false)
        }}
      >
        <HiOutlineX />
      </Close>
    </IconContext.Provider>
  )
}

export default Button
