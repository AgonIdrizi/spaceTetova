import Footer from './footer'
import Meta from '../meta'
import AppHeader from './appHeader'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <AppHeader />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
