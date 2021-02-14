import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import Container from './styles'

const Logo: React.FC = () =>
    <Container>
        <Link to='/'>
            <img src={logo} alt='logo' />
        </Link>
    </Container>

export default Logo