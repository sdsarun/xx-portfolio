import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AnimatedCursor from "react-animated-cursor"
import { SectionRefProvider } from './shared/sectionRefContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <div className="max-sm:hidden">
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='0, 0, 0'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </div>
    <SectionRefProvider>
      <App />
    </SectionRefProvider>
  </>
)
