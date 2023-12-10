import React from 'react'
import { Skeleton } from '@mui/material'
const SkeletonLoad = ({error}) => {
  const arr = Array(20).fill(null).map((_, index) => `fakedata${index}`);

  return (
    <>{
      error?<section className='flex justify-center items-center '>
        <h1 className='text-red-600 mt-36 text-center text-2xl'>An error occurred while processing your request. Please reload or try again later.</h1>
      </section>:
  
      <section className='flex flex-wrap  flex-row justify-center pl-4 pr-4 mt-8  gap-6 w-full'>
        {arr.map((item) => {
          return (
            <div key={item} className='flex flex-col w-60 h-96 pt-0 p-4 border-2 justify-center rounded-xl shadow-slate-500 items-center gap-3 m-5'>
              <Skeleton variant='rectangular' width={175} height={150} animation="wave" />
              <h1 >
                <Skeleton width={200} variant="text" height={60} className='mt-2' animation='wave' />
              </h1>
              <p className='flex justify-center items-center '><Skeleton width={110} height={35} /></p>
              <p>
                <Skeleton width={60} />
              </p></div>)
        })
        }
      </section>}
    </>
  )
}

export default SkeletonLoad