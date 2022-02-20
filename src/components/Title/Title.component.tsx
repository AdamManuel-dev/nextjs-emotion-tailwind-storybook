import { css } from '@emotion/core'
import * as React from 'react'
import tw from 'twin.macro'
import { Styling } from '../../styles/types'

const baseStyle = css`
  font-size: 3rem;
  ${tw`bg-gray-300 text-gray-800 shadow-2xl border-gray-800 border-4 rounded-3xl px-3 py-1`}
`

export type ExampleProps = {
  /**
   * Title content
   */
  content: string
  styles?: Styling
}

export const Title: React.FC<ExampleProps> = ({ content, styles }) => (
  <h1 css={[baseStyle, styles]} aria-label={content}>
    {content}
  </h1>
)

Title.displayName = 'Title'
