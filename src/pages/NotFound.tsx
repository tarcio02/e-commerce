import styled from 'styled-components'

const Section = styled.div`
  h2 {
    font-size: 40px;
  }
`

const NotFound = () => {
  return (
    <Section>
      <h2>Página não encontrada!</h2>
    </Section>
  )
}

export default NotFound
