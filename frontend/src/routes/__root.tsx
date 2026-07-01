import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
    <div>
      <div className='bg-slate-100
       h-20 text-2xl 
       flex items-center
        justify-center'
        font-bold>
       <p className='font-bold'>Stone's Vault</p> 
        <button className="absolute
         hover:cursor-pointer 
         right-10
          hover:bg-slate-500
           bg-yellow-500
           py-2 px-4 rounded-md
           text-white ml-100 
            font-normal">
          Add button
        </button>
      </div>
      <Outlet />
    </div>
    </>
  )
}
