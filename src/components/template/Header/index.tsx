import Container from './styles'

type OwnProps = { icon: string; title: string; subtitle: string }

const Header: React.FC<OwnProps> = ({ icon, title, subtitle }) => (
  <Container className='d-none d-sm-flex flex-column'>
    <h1 className='mt-3'>
        <i className={`fa fa-${icon}`} /> {title}
    </h1>
    <p className='lead text-muted'>{subtitle}</p>
  </Container>
)

export default Header
