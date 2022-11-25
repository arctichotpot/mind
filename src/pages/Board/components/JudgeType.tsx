import CardType from './Card'
import TextType from './Text'

export default function JudgeType(item: any) {
  switch (item.type) {
    case 'text':
      return <TextType item={item} />
    case 'card':
      return <CardType item={item} />
  }
}
