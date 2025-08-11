import { GlobalLayout } from './components/layouts/global-layout'
import { ThemeProvider } from './components/layouts/theme-provider'

function App() {

  return (
    <ThemeProvider>
      <GlobalLayout />
    </ThemeProvider>
  )
}

export default App
