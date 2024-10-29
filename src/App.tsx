import { ThemeProvider } from 'styled-components'
import { Button } from "./components/button"
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button variant="danger" />

      <GlobalStyle />
    </ThemeProvider>

  )
}

export default App
