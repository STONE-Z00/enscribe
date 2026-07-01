import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <div className='bg-slate-100 h-20 text-2xl flex items-center justify-center'>
        Stone's Vault
        <button className="absolute hover:cursor-pointer right-10 hover:bg-slate-500 bg-slate-600 py-2 px-4 rounded-md text-white ml-100 font-normal">
          Add button
        </button>
      </div>
      <h1 className="text-4xl font-bold">You have no notes</h1>
      <p className="mt-4 text-lg">
        Create your first note by clicking the
         <button className="absolute hover:cursor-pointer right-10 hover:bg-slate-500 bg-slate-600 py-2 px-4 rounded-md text-white ml-100 font-normal">
          Add button
        </button>
      </p>
    </div>
  )
}
