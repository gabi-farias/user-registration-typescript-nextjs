import Content from '../template/Content'

const icon = 'home'

const Main = () =>
    <Content 
        icon={icon}
        title={icon.replace(icon[0], icon[0].toUpperCase())}
        subtitle='React CRUD'>
        <div className="display-4">Welcome!</div>
        <hr />
        <p>System to exemplify the development of a CRUD
           with Next Js!</p>
    </Content>

export default Main