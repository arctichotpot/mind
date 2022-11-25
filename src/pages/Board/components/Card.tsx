import Moveable from 'react-moveable'
import { randomColor } from '../../../utils/func'
import { Card, Tag, Space } from '@douyinfe/semi-ui'
import { TagColor } from '@douyinfe/semi-ui/lib/es/tag'

export default function CardType({ item }: { item: any }) {
  const arr = new Array(100).fill('').map((item, index) => index * 20)

  return (
    <>
      <Card
        title={item.title}
        headerExtraContent={
          <Space>
            {item.tags.map((tag: string) => (
              <Tag color={randomColor() as TagColor} type="solid" key={tag}>
                {tag}
              </Tag>
            ))}
          </Space>
        }
        className={`target target${item.id}`}
        style={{ width: 500, height: 100 }}
        headerStyle={{ padding: 10 }}
      ></Card>
      {/* <Moveable
        target={`.target${item.id}`}
        draggable={true}
        resizable={true}
        stopPropagation={true}
        snappable={true}
        preventClickDefault={true}
        renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
        bounds={{ left: 20, top: 20, bottom: 20, right: 20, position: 'css' }}
        rotationPosition={'top'}
        snapDirections={{ top: true, left: true, bottom: true, right: true }}
        verticalGuidelines={arr}
        horizontalGuidelines={arr}
        onRender={(e) => {
          e.target.style.cssText += e.cssText
        }}
      /> */}
    </>
  )
}
