import Content from '../components/template/Content'

const icon = 'home'
const title = icon.replace(icon[0], icon[0].toUpperCase())

const headerProps = { icon, title }

const Home: React.FC = () => (
  <Content {...headerProps}>
    <div className="display-4">Welcome!</div>
    <hr />
    <p>
      System to exemplify the development of a User Registration
      CRUD with NextJs!
    </p>
  </Content>
)

export default Home
