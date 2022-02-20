import React from 'react'
import tw from 'twin.macro'

interface TopbarProps {
  user?: string
}

export const Topbar: React.FC<TopbarProps> = ({ user = 'test' }) => {
  return (
    <div css={tw`navbar bg-base-300 shadow-md w-full sticky top-0`}>
      <div css={tw`flex-1`}>
        <a css={tw`btn btn-ghost normal-case text-xl`}>MultiWordle</a>
      </div>
      <div css={tw`flex-none gap-2`}>
        <label tabIndex={0} css={tw`btn btn-ghost btn-circle avatar`}>
          <div css={tw`w-10 rounded-full`}>
            <img src={'https://api.lorem.space/image/face?hash=33791'} />
          </div>
        </label>
      </div>
    </div>
  )
}
