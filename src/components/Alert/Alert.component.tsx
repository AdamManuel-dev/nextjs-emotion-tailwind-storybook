import * as React from 'react'
import tw from 'twin.macro'
import { Styling } from '../../styles/types'

export type AlertProps = {
  /**
   * Alert content
   */
  children: string
  // content: string
  styles?: Styling
  type?: 'info' | 'success' | 'warning' | 'error'
}

const AlertIcon: React.FC<{ type: 'info' | 'success' | 'warning' | 'error' }> = ({ type }) => {
  const css = tw`stroke-current stroke-1 flex-shrink-0 w-6 h-6`
  if (type === 'info')
    return (
      <svg
        css={css}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        className='stroke-info-content flex-shrink-0 w-6 h-6'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    )
  if (type === 'success')
    return (
      <svg css={css} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    )
  if (type === 'warning')
    return (
      <svg css={css} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        />
      </svg>
    )
  if (type === 'error')
    return (
      <svg css={css} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    )
  return null
}

AlertIcon.displayName = 'AlertIcon'

export const Alert: React.FC<AlertProps> = ({ children, styles, type }) => {
  const stylings = type
    ? type === 'info'
      ? tw`alert shadow-lg alert-info`
      : type === 'success'
      ? tw`alert shadow-lg alert-success`
      : type === 'error'
      ? tw`alert shadow-lg alert-error`
      : type === 'warning'
      ? tw`alert shadow-lg alert-warning`
      : 'debug'
    : tw`alert shadow-lg border`

  return (
    <div css={[stylings, styles]}>
      <div>
        <AlertIcon type={type ?? 'info'} />
        <span>{children}</span>
      </div>
    </div>
  )
}

Alert.displayName = 'Alert'
