import HeaderArea from '../../styles/template/HeaderArea'
import { Home } from '@styled-icons/fa-solid'
type HeaderProps = { icon: string; title: string; subtitle: string }

const Header: React.FC<HeaderProps> = ({ icon, title, subtitle }) => (
  <HeaderArea className="d-none d-sm-flex flex-column">
    <h1 className="mt-3">
        <i className={`fa fa-${icon}`} /> {title} 
        {/* <Home size="1.4rem" height="45px" />  */}
    </h1>
    <p className="lead text-muted">{subtitle}</p>
  </HeaderArea>
)

export default Header
