import { ReactNode } from 'react'
import PropTypes from 'prop-types'

import Content from '../../styles/template/Content'
import Header from './Header'

type MainContentProps = {
  icon: string
  title: string
  subtitle: string
  children: ReactNode
}

const MainContent: React.FC<MainContentProps> = props => {
  const { icon, title, subtitle, children } = props

  return (
    <>
      <Header icon={icon} title={title} subtitle={subtitle} />
      <Content className="conatiner-fluid">
        <div className="p-3 mt-5">{children}</div>
      </Content>
    </>
  )
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainContent