import { RecoilRoot } from 'recoil';
import './App.css'
import './styles.css'
import HomePage from './pages/homePage';
import CustomizationPage from './pages/customizationPaje';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './pages/layout';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"



function App() {
  const allRoutes=[{
    path: "/",
    element: <HomePage/>
  },{
    path: "/customize",
    element: <CustomizationPage/>
  }]

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            {allRoutes.map((currentRoute,index)=><Route key={index} path={currentRoute.path} element={currentRoute.element}></Route>)}
          </Route>
        </Routes>
      </BrowserRouter>      
      {/* <ChatBot/> */}
    </RecoilRoot>
    <Analytics/>
    <SpeedAnalytics/>
    </>)
}

export default App;