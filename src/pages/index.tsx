import { css } from '@emotion/core'
import * as Wordle from 'components'
import React from 'react'
import tw from 'twin.macro'

const flexFill = css`
  flex: 1 0 100%;
`

const IndexPage: React.FC = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      ${tw`flex-col w-full h-full`}
    `}>
    <div css={tw`flex flex-col justify-center items-center p-3 w-full space-y-2`}>
      <Wordle.Alert>test</Wordle.Alert>
      <Wordle.Alert type='info'>Info</Wordle.Alert>
      <Wordle.Alert type='success'>Success</Wordle.Alert>
      <Wordle.Alert type='warning'>Warning</Wordle.Alert>
      <Wordle.Alert type='error'>Error</Wordle.Alert>
      <button css={tw`btn btn-primary m-5`}>Button</button>
    </div>
    {/* <div css={tw`flex flex-col justify-center items-center p-3 w-full space-y-2`}>
      <Wordle.Alert>test</Wordle.Alert>
      <Wordle.Alert type='info'>Info</Wordle.Alert>
      <Wordle.Alert type='success'>Success</Wordle.Alert>
      <Wordle.Alert type='warning'>Warning</Wordle.Alert>
      <Wordle.Alert type='error'>Error</Wordle.Alert>
      <button css={tw`btn btn-primary m-5`}>Button</button>
    </div> */}
    <div
      css={css`
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-end;
        width: 23rem;
      `}>
      <Wordle.Title styles={[flexFill]} content={'Next.js Template'} />
    </div>
  </div>
)

export default IndexPage
