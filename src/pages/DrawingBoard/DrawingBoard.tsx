import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { data } from '../../utils/mindCore/example'
import { MindCore } from '../../utils/mindCore'

const BoardStyle = styled.div`
  width: 100vw;
  height: 100vh;
`

export default function DrawingBoard() {
  const boardRef = useRef<HTMLDivElement | null>(null)
  const mindRef = useRef<MindCore>()

  useEffect(() => {
    mindRef.current = new MindCore({
      el: boardRef.current as HTMLElement,
    })
    console.log(mindRef.current)
  }, [])

  return (
    <BoardStyle ref={boardRef}>
      {/* {data.map((item) => {
        return (
          <div key={item.title}>
            <div>{item.title}</div>
            <div>{JSON.stringify(item)}</div>
          </div>
        )
      })} */}
    </BoardStyle>
  )
}
