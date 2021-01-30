import { Link } from 'react-router-dom'

type OwnProps = { icon: string; title: string; link?: string }

const MenuLink: React.FC<OwnProps> = ({ link, icon, title }) => (
  <Link to={`#/${link}`}>
    <i className={`fa fa-${icon}`} /> {title}
  </Link>
)

export default MenuLink
