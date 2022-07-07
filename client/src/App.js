import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {publicRouters} from './routers'
import {Fragment} from 'react'
import DefaultTemplate from './templates/DefaultTemplate/DefaultTeamplate'
function App() {
  return (
      <Router>
      <Routes>
        {publicRouters.map((route,index)=>{
          const Page = route.component;
          let Layout = DefaultTemplate
          if(route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page / >
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  );
}

export default App;
