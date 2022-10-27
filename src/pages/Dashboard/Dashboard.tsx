import { useState, useEffect } from 'react'
import { Row, Col, Card, Space, Button, Empty } from '@douyinfe/semi-ui'
import styled from 'styled-components'
import AddModal from './AddModal'
import { cloneDeep } from 'lodash'
import { IllustrationNoContent } from '@douyinfe/semi-illustrations'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { boardListSelector } from '../../store/list'

const DashboardStyle = styled.div`
  padding: 20px;
`

export default function Dashboard() {
  const [visible, setVisible] = useState(false)
  const [list, setList] = useState<DashboardCallbackParams[]>([])

  const navigate = useNavigate()
  const [state, setState] = useRecoilState(boardListSelector)

  const modalCallback = (value: DashboardCallbackParams | undefined) => {
    if (value) {
      const arr = cloneDeep(state)
      arr?.push(value)
      setState(arr)
      // setList(arr)
    }
    setVisible(false)
  }

  const handleVisibleModal = () => {
    setVisible(true)
  }

  const handleLinkTo = (id: string) => {
    if (id) navigate(`/board?id=${id}`)
  }

  return (
    <DashboardStyle>
      <Space style={{ marginBottom: 20 }}>
        <Button theme="solid" type="primary" onClick={handleVisibleModal}>
          Create One
        </Button>
      </Space>
      <Row gutter={10}>
        {state?.map((item) => (
          <Col
            span={4}
            style={{
              margin: '10px 0 ',
            }}
          >
            <Card
              shadows="hover"
              key={item.id}
              bodyStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Card.Meta title={item?.title} />
              <Button onClick={() => handleLinkTo(item.id)}>Edit</Button>
            </Card>
          </Col>
        ))}
      </Row>
      {state.length === 0 ? (
        <Empty
          image={<IllustrationNoContent style={{ width: 150, height: 150 }} />}
          description={'There is nothing here'}
        />
      ) : null}

      <AddModal visible={visible} onCallback={modalCallback} />
    </DashboardStyle>
  )
}
