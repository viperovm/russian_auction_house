import React from 'react';
import {Route} from 'react-router';



const getRoutes = () => {
  const arr = []
  arr.push('about')
  arr.push('about/personal-agreement')
  arr.push('about/trading-rules')
  arr.push('shop')
  return arr
}

const routes = getRoutes()

export default (
  <Route>
    {routes.map(i => (
      <Route key={i} path={i === '/' ? '/' : `/${i}`}/>
    ))}
  </Route>
)

