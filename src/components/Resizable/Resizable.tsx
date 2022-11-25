import { useState, ReactElement } from 'react'
import { Resizable } from 're-resizable'

interface Props {
  children: ReactElement
  style: CSSModuleClasses
}

export default function ResizableComponent({ children, style }: Props) {
  const [boxWidth, setBoxWidth] = useState(300)
  const [boxHeight, setBoxHeight] = useState(300)

  const handleResize = (
    e: any,
    direction: any,
    ref: any,
    d: { height: number; width: number }
  ) => {
    setBoxHeight(boxHeight + d.height)
    setBoxWidth(boxWidth + d.width)
  }
  return (
    <Resizable
      style={{ background: 'red ', ...style }}
      size={{ width: boxWidth, height: boxHeight }}
      minWidth={400}
      minHeight={40}
      onResize={handleResize}
      grid={[20, 20]}
    >
      {children}
    </Resizable>
  )
}
