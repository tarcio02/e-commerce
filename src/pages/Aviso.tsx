import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh ;
  gap: 16px;

  h2 {
    font-size: 40px;
  }
  p{
    font-size: 24px;
  }
`

const Aviso = () => {
  return (
    <Section>
      <h2>Página ainda em Desenvolvimento</h2>
      <p>Em breve ela ficará disponível</p>
    </Section>
  )
}

export default Aviso
