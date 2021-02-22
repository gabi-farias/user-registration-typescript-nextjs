import Content from '../Content'

const icon = 'home'
const title = icon.replace(icon[0], icon[0].toUpperCase())

const Main: React.FC = () => (
  <Content icon={icon} title={title}>
    <div className="display-4">Welcome!</div>
    <hr />
    <p>
      System to exemplify the development of a 
      User Registration CRUD with NextJs!
    </p>
  </Content>
)

export default Main
