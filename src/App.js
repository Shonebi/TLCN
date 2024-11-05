import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { route } from './routes';
import { DefaultComponent } from './components/DefaultComponent/DefaultComponent';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';

function App() {

  return(
    <div>
      <Router>
        <Routes>
          {route.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return(
              <Route path={route.path} element={
                <Layout>
                  <Page/>
                </Layout>
            }/>
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}
export default App;