import { Ref, type SVGProps, forwardRef, memo } from 'react'
const SvgCheckmarkOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#checkmark-outline_svg__a)'}>
      <path
        d={
          'M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1.001 1.001 0 0 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z'
        }
        fill={'#000'}
      />
    </g>
    <defs>
      <clipPath id={'checkmark-outline_svg__a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentcolor'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgCheckmarkOutline)
const Memo = memo(ForwardRef)

export default Memo
