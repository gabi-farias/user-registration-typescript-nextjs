import Container from './styles'

type OwnProps = { icon: string; title: string }

const Header: React.FC<OwnProps> = ({ icon, title }) => (
  <Container className='d-none d-sm-flex flex-column'>
    <h1 className='mt-3'>
      <i className={`fa fa-${icon}`} /> {title}
    </h1>
  </Container>
)

export default Header
