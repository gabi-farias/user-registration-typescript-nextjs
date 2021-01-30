import Container from './styles'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'

const Logo: React.FC = () =>
    <Container>
        <Link to='/'>
            <img src={logo} alt='logo' />
        </Link>
    </Container>

export default Logo