import { Ref, type SVGProps, forwardRef, memo } from 'react'
const SvgYandex = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={36}
    ref={ref}
    width={36}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#yandex_svg__a)'}>
      <path
        d={'M18 35c9.389 0 17-7.611 17-17S27.389 1 18 1 1 8.611 1 18s7.611 17 17 17Z'}
        stroke={'currentcolor'}
        strokeWidth={2}
      />
      <path
        d={'m9.638 7.131-3.182 3.182 9.3 9.3V30.67h4.5V19.6l9.289-9.288-3.182-3.182L18 15.494z'}
        fill={'currentcolor'}
      />
    </g>
    <defs>
      <clipPath id={'yandex_svg__a'}>
        <path d={'M0 0h36v36H0z'} fill={'currentcolor'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgYandex)
const Memo = memo(ForwardRef)

export default Memo
