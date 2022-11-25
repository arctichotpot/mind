import Moveable from 'react-moveable'
export default function TextType({ item }: { item: any }) {
  const arr = new Array(100).fill('').map((item, index) => index * 20)

  return (
    <>
      <div
        className={`target target${item.id}`}
        style={{ width: 200, height: 30, color: item.color }}
      >
        {item.content}
      </div>
      {/* <Moveable
        target={`.target${item.id}`}
        draggable={true}
        snappable={true}
        resizable={true}
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
          e.target.style.cssText += `width: ${e.width}px; height: ${e.height}px`
          e.target.style.transform = e.drag.transform
        }}
        onRotate={(e) => {
          e.target.style.transform = e.drag.transform
        }}
        onScale={(e) => {
          e.target.style.transform = e.drag.transform
        }}
      /> */}
    </>
  )
}
