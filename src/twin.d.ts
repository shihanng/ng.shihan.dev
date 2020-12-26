// https://github.com/ben-rogerson/twin.macro/blob/f16a4f5b48526b956947ac6b885e7665c94788c8/docs/emotion/typescript.md
import "twin.macro"
import styledImport from "@emotion/styled"
import { css as cssImport } from "@emotion/react"

// The css prop
// https://emotion.sh/docs/typescript#css-prop
import {} from "@emotion/react/types/css-prop"

declare module "twin.macro" {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string
    }
  }
}
