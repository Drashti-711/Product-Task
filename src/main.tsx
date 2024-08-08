import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        colorScheme: 'light',
        components: {
          Button: {
            // variants: {
            //     primary: {
            //         backgroundColor: 'red',
            //         // color: 'white',
            //     },
            // },
          },
        },
      }}>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </MantineProvider>
    </Provider>
  </StrictMode>,
)
