import { ReactElement } from 'react'
import { useDroppable } from '@dnd-kit/core'
import { useState } from 'react'
import { Resizable } from 're-resizable'

export default function Droppable({
  children,
  id,
}: {
  children: ReactElement
  id: string
}) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  })
  const style = {
    color: isOver ? 'green' : undefined,
  }

  const [boxWidth, setBoxWidth] = useState(300)
  const [boxHeight, setBoxHeight] = useState(300)

  const handleResizeStop = (
    e: any,
    direction: any,
    ref: any,
    d: { height: number; width: number }
  ) => {
    setBoxHeight(boxHeight + d.height)
    setBoxWidth(boxWidth + d.width)
  }

  return (
    <>
      <Resizable
        style={{ background: 'red ', ...style }}
        size={{ width: boxWidth, height: boxHeight }}
        minWidth={400}
        minHeight={40}
        onResizeStop={handleResizeStop}
        grid={[20, 20]}
      >
        <div ref={setNodeRef} style={{ width: '100%', height: '100%' }}>
          {children}
        </div>
      </Resizable>
    </>
  )
}
