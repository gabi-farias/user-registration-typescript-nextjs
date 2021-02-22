import Link from 'next/link'

type OwnProps = { icon: string; title: string; link?: string }

const MenuLink: React.FC<OwnProps> = ({ icon, title, link = '' }) => (
  <Link href={`/${link}`}>
    <a>
      <i className={`fa fa-${icon}`} /> {title}
    </a>
  </Link>
)

export default MenuLink
