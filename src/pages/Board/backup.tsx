import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { data } from './example'
import Tools from './Tools'
import Moveable from 'react-moveable'
import { Card } from '@douyinfe/semi-ui'
import JudgeType from './components/JudgeType'

const ContainerStyle = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background: linear-gradient(to right, #ccc 1px, transparent 1px),
    linear-gradient(to bottom, #ccc 1px, transparent 1px);
  background-size: 20px 20px;
  background-color: var(--semi-color-fill-0);
`

export default function DrawingBoard() {
  const [list, setList] = useState(data[0].root)

  const arr = new Array(100).fill('').map((item, index) => index * 20)

  return (
    <ContainerStyle className="container">
      <Tools
        onChange={function (value: string): void {
          throw new Error('Function not implemented.')
        }}
      ></Tools>

      {list.map((item, index) => {
        return <>{JudgeType(item)}</>
      })}
      <Moveable
        target={'.target'}
        individualGroupable={true}
        draggable={true}
        resizable
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        scalable={false} // not
        keepRatio={false}
        throttleScale={0}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        rotatable={false}
        throttleRotate={0}
        rotationPosition={'top'}
        onDrag={(e) => {
          e.target.style.transform = e.transform
        }}
        onResize={(e) => {
          e.target.style.width = `${e.width}px`
          e.target.style.height = `${e.height}px`
          e.target.style.transform = e.drag.transform
        }}
        onRotate={(e) => {
          e.target.style.transform = e.drag.transform
        }}
      />
    </ContainerStyle>
  )
}
