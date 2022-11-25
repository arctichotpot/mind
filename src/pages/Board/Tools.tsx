import styled from 'styled-components'
import { IconText, IconGallery, IconFolderOpen } from '@douyinfe/semi-icons'
import { Button, Space, Tooltip } from '@douyinfe/semi-ui'
import { ReactElement } from 'react'

const ToolsStyle = styled.div`
  padding: 10px;
  position: fixed;
  left: 0;
  top: 25%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`

interface Props {
  onChange: (value: string) => void
}

interface ToolsList {
  label: string
  value: string
  icon: ReactElement
}

export default function Tools({ onChange }: Props) {
  const list: ToolsList[] = [
    // {
    //   label: 'Card',
    //   value: 'card',
    //   icon: <IconFolderOpen />,
    // },
    {
      label: 'Card',
      value: 'card',
      icon: <IconGallery />,
    },
    {
      label: 'Text',
      value: 'text',
      icon: <IconText />,
    },
  ]

  const handleClickTool = (item: ToolsList) => {
    if (onChange) onChange(item.value)
  }

  return (
    <ToolsStyle>
      <Space vertical>
        {list.map((item) => (
          <Tooltip content={item.label} key={item.value} position="right">
            <Button onClick={() => handleClickTool(item)} icon={item.icon} />
          </Tooltip>
        ))}
      </Space>
    </ToolsStyle>
  )
}
