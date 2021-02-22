import Header from '../Header'
import Footer from '../Footer'
import Logo from '../Logo'
import Nav from '../Nav'

import Container from './styles'

type OwnProps = {
  icon: string
  title: string
  children: React.ReactNode
}

const Content: React.FC<OwnProps> = ({ icon, title, children }) => (
  <Container>
    <Logo />
    <Nav />
    <Header icon={icon} title={title} />
    <main className="container-fluid">
      <div className="p-3 mt-5">{children}</div>
    </main>
    <Footer />
  </Container>
)

export default Content
