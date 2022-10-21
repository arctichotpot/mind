import { Outlet } from 'react-router-dom'
import './styles/index.scss'
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US'
import { LocaleProvider } from '@douyinfe/semi-ui'
export default function App() {
  return (
    <LocaleProvider locale={en_US}>
      <Outlet />
    </LocaleProvider>
  )
}
