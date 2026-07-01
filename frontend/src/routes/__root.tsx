import { Outlet, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
    <div className="bg-Slate-500">
      <Outlet />
    </div>
    </>
  )
}
