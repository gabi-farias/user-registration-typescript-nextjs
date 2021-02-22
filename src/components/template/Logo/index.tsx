import Link from 'next/link'

import logo from '../../../assets/logo.png'
import Container from './styles'

const Logo: React.FC = () => (
  <Container>
    <Link href="/">
      <a>
        <img src={logo} alt="logo" />
      </a>
    </Link>
  </Container>
)

export default Logo
