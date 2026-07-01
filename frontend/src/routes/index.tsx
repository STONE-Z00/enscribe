import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-normal font-semibold">You have no notes</h1>
      <button className="mt-6 hover:cursor-pointer
       hover:bg-slate-400 bg-yellow-500 py-2 px-4 rounded-md
        text-white font-normal">
        Add button
      </button>
    </div>
  )
}
