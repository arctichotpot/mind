import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Knova from 'konva'

import { Core } from '../../utils/mindCore/render/render'
import Tools from './Tools'
import { Svg } from '@svgdotjs/svg.js'
const BoardStyle = styled.div`
  overflow: hidden;
`

export default function DrawingBoard() {
  const boardRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<Core | null>(null)
  // const canvasRef = useRef<Knova.Stage | null>(null)

  // useEffect(() => {
  //   const parentHeight = boardRef.current?.parentElement?.offsetHeight

  //   canvasRef.current = new Knova.Stage({
  //     container: 'container',
  //     // width: 100,
  //     height: parentHeight,
  //   })
  // }, [])

  useEffect(() => {
    const draw = new Core({
      el: document.getElementById('container') as HTMLElement,
    })
    // const draw = Render(document.getElementById('container') as HTMLElement)
    if (draw) svgRef.current = draw
  }, [])

  const handleChangeTool = (value: string) => {
    svgRef.current?.addText('123123')
    console.log(value)
  }

  return (
    <>
      <Tools onChange={handleChangeTool} />
      <BoardStyle ref={boardRef} id="container" />
    </>
  )
}
