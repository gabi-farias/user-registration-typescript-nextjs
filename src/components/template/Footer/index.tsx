import Container from './styles'

const color = 'text-danger'

const Footer: React.FC = () =>
  <Container>
    <span>
      Developed with <i className={`fa fa-heart ${color}`} /> by
      <strong>
        <span className={`${color}`}> M</span>anoel
        <span className={`${color}`}> L</span>opes
      </strong>
    </span>
  </Container>

export default Footer