import { Button } from '@douyinfe/semi-ui'
import { Svg, SVG } from '@svgdotjs/svg.js'
import { createRef, useEffect, useRef } from 'react'
import styled from 'styled-components'

const BoardStyle = styled.div`
  width: 100vw;
  height: 100vh;
`

const SvgStyle = styled.div`
  width: 100%;
  height: 100%;
`

export default function DrawingBoard() {
  const svgRef = useRef<Svg>()

  useEffect(() => {
    const svgDom = document.getElementById('svg')
    const a = SVG()
      .addTo(svgDom as HTMLElement)
      .size('100%', '98%')
    console.log(a)
  }, [])

  const handleClick = () => {
    svgRef.current?.text('123123')
    console.log(svgRef.current)
  }

  return (
    <BoardStyle>
      {/* <Button onClick={handleClick}>click it </Button> */}
      <SvgStyle id="svg" />
    </BoardStyle>
  )
}
