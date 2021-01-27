import FooterArea from '../../styles/template/FooterArea'

const color = 'text-danger'

const Footer: React.FC = () =>
  <FooterArea>
    <span>
      Developed with <i className={`fa fa-heart ${color}`} /> by
      <strong>
        <span className={`${color}`}> M</span>anoel
        <span className={`${color}`}> L</span>opes
      </strong>
    </span>
  </FooterArea>

export default Footer