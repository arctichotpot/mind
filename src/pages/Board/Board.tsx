import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { data } from './example'
import Tools from './Tools'
import MultipleContainers from './Box/MulitipleContainers'
// import JudgeType from './components/JudgeType'
import { DndContext } from '@dnd-kit/core'
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
    <DndContext>
      <ContainerStyle className="container">
        <Tools
          onChange={function (value: string): void {
            throw new Error('Function not implemented.')
          }}
        ></Tools>

        {/* {list.map((item, index) => {
        return <>{JudgeType(item)}</>
      })} */}
        <MultipleContainers />
      </ContainerStyle>
    </DndContext>
  )
}
