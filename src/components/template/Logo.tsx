import LogoArea from '../../styles/template/LogoArea'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Logo: React.FC = () =>
    <LogoArea>
        <Link to="/">
            <img src={logo} alt='logo' />
        </Link>
    </LogoArea>

export default Logo