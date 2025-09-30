import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 40px;
  }
`

const Aviso = () => {
  return (
    <Section>
      <h2>Página ainda em Desenvolvimento</h2>
    </Section>
  )
}

export default Aviso
