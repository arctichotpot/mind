import { Modal, Form, Row, Col } from '@douyinfe/semi-ui'
import { createRef } from 'react'
import { nanoid } from 'nanoid'

interface Props {
  visible: boolean
  onCallback: (value?: DashboardCallbackParams) => void
}

export default function AddModal({ visible, onCallback }: Props) {
  const form = createRef<Form>()

  const handleOk = () => {
    form.current?.formApi.validate().then((res) => {
      if (onCallback) onCallback({ ...res, id: nanoid() } as DashboardCallbackParams)
    })
  }
  const handleCancel = () => {
    if (onCallback) onCallback()
  }

  return (
    <Modal
      title="Create One"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      maskClosable={false}
    >
      <Form layout="horizontal" ref={form}>
        <Row>
          <Col span={24}>
            <Form.Input
              field="title"
              label="Title"
              rules={[{ required: true }]}
              trigger="blur"
            ></Form.Input>
          </Col>

          <Col span={24}>
            <Form.Input field="tags" trigger="blur" label="Tags"></Form.Input>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}
