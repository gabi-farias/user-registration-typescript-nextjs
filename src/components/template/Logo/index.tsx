import Link from 'next/link'

import Container from './styles'

const Logo: React.FC = () => (
  <Container>
    <Link href="/">
      <a>
        <img src="/logo.png" alt="logo" />
      </a>
    </Link>
  </Container>
)

export default Logo
