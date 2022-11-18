import { Card } from '@douyinfe/semi-ui'
import styled from 'styled-components'

const BoxStyle = styled(Card)`
  cursor: move;
  width: 100px;
  height: 100px;
`

export default function Box() {
  return <BoxStyle className="handle">啊实打实的阿迪斯阿斯顿</BoxStyle>
}
