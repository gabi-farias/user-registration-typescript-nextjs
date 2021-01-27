import MenuArea from '../../styles/template/MenuArea'
import MenuLink from './MenuLink'

const lp1 = 'home', lp2 = 'users'

const Nav: React.FC = () => (
  <MenuArea>
    <nav>
      <MenuLink
        icon={lp1}
        title={lp1.replace(lp1[0], lp1[0].toUpperCase())}
      />

      <MenuLink
        icon={lp2}
        title={lp2.replace(lp2[0], lp2[0].toUpperCase())}
        link={lp2}
      />
    </nav>
  </MenuArea>
)

export default Nav
