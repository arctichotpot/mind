import { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { Core } from '../../utils/mindCore/render/render'
import Tools from './Tools'
import Draggable from 'react-draggable'
// import Box from './Box'

import { Svg } from '@svgdotjs/svg.js'
const BoardStyle = styled.div`
  overflow: hidden;
`

export default function DrawingBoard() {
  const boardRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<Core | null>(null)

  useEffect(() => {
    const dom = document.getElementById('border-style')
    const draw = new Core({
      el: document.getElementById('container') as HTMLElement,
      width: dom?.offsetWidth as number,
      height: dom?.offsetHeight as number,
    })
    if (draw) svgRef.current = draw
  }, [])

  const handleChangeTool = (value: string) => {
    svgRef.current?.addText('123123')
  }

  return (
    <>
      <Tools onChange={handleChangeTool} />
      <BoardStyle ref={boardRef} id="container"></BoardStyle>
    </>
  )
}
