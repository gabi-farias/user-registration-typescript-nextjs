import styled from 'styled-components'

const Conatiner = styled('div')`
  margin: 0px;
  display: grid;
  grid-template-columns: ${({theme}) => theme.measures.asideWidth}px 1fr;
  grid-template-rows: 
    ${({theme}) => theme.measures.headerHeight}px
    1fr 
    ${({theme}) => theme.measures.footerHeight}px;
 
  grid-template-areas:
    'logo header'
    'menu content'
    'menu footer';
  height: 100vh;
  background-color: #f5f5f5;

  /* @media (max-width: 768px) {
    grid-template-rows:
      ${({theme}) => theme.measures.headerHeight}px
      ${({theme}) => theme.measures.menuTopHeight}px
      1fr
      ${({theme}) => theme.measures.footerHeight}px;
    grid-template-columns: ${({theme}) => theme.measures.asideWidth}px 1fr;
    grid-template-areas:
      'logo header'
      'menu menu'
      'content content'
      'footer footer';
  }

  @media (max-width: 576px) {
    grid-template-rows:
      ${({theme}) => theme.measures.logoHeight}px
      ${({theme}) => theme.measures.menuTopHeight}px
      1fr
      ${({theme}) => theme.measures.footerHeight}px;
    grid-template-columns: 1fr;
    grid-template-areas:
      'logo'
      'menu'
      'content'
      'footer';
  } */
`
export default Conatiner