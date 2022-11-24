import { SetStateAction, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { Core } from '../../utils/mindCore/render/render'
import Draggable from 'react-draggable'
// import Box from './Box'
import Tools from './Tools'

import Moveable, { OnDrag, OnResize, OnScale, OnRotate } from 'react-moveable'

const BoardStyle = styled.div`
  overflow: hidden;
`

export default function DrawingBoard() {
  const [targets, setTargets] = useState<Array<SVGElement | HTMLElement>>([])
  const moveableRef = useRef<Moveable>(null)
  const arr = new Array(100).fill('').map((item, index) => index * 20)

  useEffect(() => {
    // console.log(document.querySelectorAll('.target'))
    console.log(arr)
  }, [])

  return (
    <div
      className="container"
      style={{
        width: '100%',
        height: '100%',
        border: '1px solid #ccc',
      }}
    >
      <Tools
        onChange={function (value: string): void {
          throw new Error('Function not implemented.')
        }}
      ></Tools>
      <div className="target target1" style={{ width: 100, height: 100 }}>
        Target1
      </div>
      <div className="target target2" style={{ width: 100, height: 100 }}>
        Target2
      </div>
      <div className="target target3" style={{ width: 100, height: 100 }}>
        Target3
      </div>
      <Moveable
        target={'.target'}
        individualGroupable={true}
        useResizeObserver={true}
        snappable={true}
        hitRate={0}
        selectByClick={true}
        selectFromInside={false}
        toggleContinueSelect={['shift']}
        ratio={0}
        draggable={true}
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        resizable={false}
        keepRatio={false}
        throttleResize={1}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        rotatable={false}
        bounds={{ left: 20, top: 20, bottom: 20, right: 20, position: 'css' }}
        throttleRotate={0}
        rotationPosition={'top'}
        snapDirections={{ top: true, left: true, bottom: true, right: true }}
        snapThreshold={5}
        verticalGuidelines={arr}
        horizontalGuidelines={arr}
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
        onBeforeScale={(e) => {
          // if (keycon.global.shiftKey) {
          //   e.setFixedDirection([-1, -1])
          // } else {
          // }
          e.setFixedDirection([0, 0])
        }}
        onScale={(e) => {
          e.target.style.transform = e.drag.transform
        }}
      />
    </div>
  )
}
