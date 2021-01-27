import MainConetnt from '../template/MainContent'

const icon = 'home'

const Main = () =>
    <MainConetnt 
        icon={icon}
        title={icon.replace(icon[0], icon[0].toUpperCase())}
        subtitle='React CRUD'>
        <div className="display-4">Welcome!</div>
        <hr />
        <p>System to exemplify the development of a CRUD
           with Next Js!</p>
    </MainConetnt>

export default Main