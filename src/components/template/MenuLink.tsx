import { Link } from 'react-router-dom'

type MenuLinkProps = { icon: string; title: string; link?: string }

const MenuLink: React.FC<MenuLinkProps> = ({ link, icon, title }) => (
  <Link to={`#/${link}`}>
    <i className={`fa fa-${icon}`} /> {title}
  </Link>
)

export default MenuLink
