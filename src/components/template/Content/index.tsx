import { ReactNode } from 'react'
import PropTypes from 'prop-types'

import Container from './styles'
import Header from '../Header'

type OwnProps = {
  icon: string
  title: string
  subtitle: string
  children: ReactNode
}

const Content: React.FC<OwnProps> = props => {
  const { icon, title, subtitle, children } = props

  return (
    <>
      <Header icon={icon} title={title} subtitle={subtitle} />
      <Container className='container-fluid'>
        <div className='p-3 mt-5'>{children}</div>
      </Container>
    </>
  )
}

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content