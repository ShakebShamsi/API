import React from 'react'
import { useRouteError } from 'react-router-dom'


function Error() {
   const err = useRouteError()
   console.log(err)
   return (
      <div>
         <h1>OOPS!!! ERROR</h1>
         <h3>{err.status}:{err.statusText}</h3>
         <p>{err.data}</p>
      </div>
  )
}

export default Error
