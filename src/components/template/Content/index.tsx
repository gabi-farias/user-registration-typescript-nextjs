import { ReactNode } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'

import Container from './styles'

type OwnProps = {
  icon: string
  title: string
  children: ReactNode
}

const Content: React.FC<OwnProps> = ({ icon, title, children }) => (
  <>
    <Header icon={icon} title={title} />
    <Container className="container-fluid">
      <div className="p-3 mt-5">{children}</div>
    </Container>
  </>
)

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content
