import { Ref, type SVGProps, forwardRef, memo } from 'react'
const SvgPauseCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#pause-circle_svg__a)'}>
      <path
        d={
          'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-2 13a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z'
        }
        fill={'#000'}
      />
    </g>
    <defs>
      <clipPath id={'pause-circle_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentcolor'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgPauseCircle)
const Memo = memo(ForwardRef)

export default Memo
