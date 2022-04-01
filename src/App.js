import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import {light} from './styles/Themes'

import Home from './components/section/Home'
import About from './components/section/About'
import Roadmap from './components/section/Roadmap'
import Team from './components/section/Team'
import Faq from './components/section/Faq'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={light}>
    <Home />
    <About />
    <Roadmap />
    <Team />
    <Faq />
    <Footer />
    </ThemeProvider>
    </>
  );
}

export default App;
