import React from 'react'
import {UseParams} from "react";
const User = () => {
    const {userid} = UseParams();
  return (
    <div className='bg-gray-300 text-center text-3xl p-4'>
      User : {userid}

    </div>
  )
}

export default User
