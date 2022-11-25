import { useState } from 'react'
import { Resizable } from 're-resizable'
import { DndContext } from '@dnd-kit/core'
import Draggable from './Draggable'
import Droppable from './Droppable'

export default function Box() {
  const containers = ['A', 'B', 'C']
  const [parent, setParent] = useState(null)
  const draggableMarkup = (
    <Draggable id="draggable">
      <span>Drag me</span>
    </Draggable>
  )
  function handleDragEnd(event: any) {
    const { over } = event

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null)
  }
  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}

        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            <span>{parent === id ? draggableMarkup : 'Drop here'}</span>
          </Droppable>
        ))}
      </DndContext>
    </>
  )
}
