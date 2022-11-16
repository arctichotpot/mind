import { Outlet } from 'react-router-dom'
import './styles/index.scss'
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US'
import { LocaleProvider } from '@douyinfe/semi-ui'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BorderStyle = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  // border: 20px solid #ff4081;
`

export default function App() {
  return (
    <AppContainer>
      <BorderStyle>
        <LocaleProvider locale={en_US}>
          <Outlet />
        </LocaleProvider>
      </BorderStyle>
    </AppContainer>
  )
}
