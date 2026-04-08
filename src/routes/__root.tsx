import { HeadContent, Scripts, createRootRoute, Link, Outlet } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'RADAR — Real-time Adherence Detection & Adaptive Response',
      },
      {
        name: 'description',
        content:
          'RADAR is a digital health platform for orthopaedic care. Monitor patient treatment adherence in real time using wearable sensors.',
      },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <nav className="bg-sky-950 text-white border-b border-sky-900">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-lg font-bold tracking-tight text-teal-400 hover:text-teal-300 transition-colors">
            RADAR
          </Link>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-teal-300 transition-colors [&.active]:text-teal-400">
              Home
            </Link>
            <Link to="/about" className="hover:text-teal-300 transition-colors [&.active]:text-teal-400">
              About
            </Link>
            <Link to="/publications" className="hover:text-teal-300 transition-colors [&.active]:text-teal-400">
              Publications
            </Link>
            <Link to="/milestones" className="hover:text-teal-300 transition-colors [&.active]:text-teal-400">
              Milestones
            </Link>
            <Link to="/faq" className="hover:text-teal-300 transition-colors [&.active]:text-teal-400">
              FAQ
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
