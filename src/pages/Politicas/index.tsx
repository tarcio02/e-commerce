import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const PoliticaDePrivacidade = () => {
  const navigate = useNavigate()

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <S.Container>
      <S.Content>
        <S.BackLink href="/" onClick={handleBack}>
          ← Voltar
        </S.BackLink>

        <S.Title>Política de Privacidade</S.Title>

        <S.SectionsWrapper>
          <S.Section>
            <S.SectionTitle>1. Compromisso com a Privacidade</S.SectionTitle>
            <S.Paragraph>
              Esta Política de Privacidade descreve como coletamos, utilizamos e protegemos os dados
              pessoais dos usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD –
              Lei nº 13.709/2018).
            </S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>2. Dados Coletados</S.SectionTitle>
            <S.Paragraph>Podemos coletar as seguintes informações:</S.Paragraph>
            <S.List>
              <S.ListItem>Dados de identificação: nome, telefone, e-mail;</S.ListItem>
              <S.ListItem>Dados de entrega: endereço completo;</S.ListItem>
              <S.ListItem>
                Informações de navegação: IP, data e horário de acesso, tipo de dispositivo.
              </S.ListItem>
            </S.List>
            <S.Paragraph style={{ marginTop: '0.5rem' }}>
              Dados de pagamento não são coletados nem armazenados, pois o pagamento é realizado
              diretamente no ambiente do Checkout Pro do Mercado Pago.
            </S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>3. Finalidade do Uso dos Dados</S.SectionTitle>
            <S.Paragraph>Os dados pessoais são utilizados para:</S.Paragraph>
            <S.List>
              <S.ListItem>Processar e gerenciar pedidos;</S.ListItem>
              <S.ListItem>Realizar entregas ou retiradas;</S.ListItem>
              <S.ListItem>Comunicação com o cliente sobre pedidos e suporte;</S.ListItem>
              <S.ListItem>Cumprimento de obrigações legais e regulatórias.</S.ListItem>
            </S.List>
          </S.Section>

          <S.Section>
            <S.SectionTitle>4. Compartilhamento de Dados</S.SectionTitle>
            <S.Paragraph>
              Os dados poderão ser compartilhados apenas quando necessário com:
            </S.Paragraph>
            <S.List>
              <S.ListItem>Plataformas de pagamento (Mercado Pago);</S.ListItem>
              <S.ListItem>Serviços de entrega/logística;</S.ListItem>
              <S.ListItem>Autoridades legais, quando exigido por lei.</S.ListItem>
            </S.List>
            <S.Highlight>Nunca comercializamos dados pessoais.</S.Highlight>
          </S.Section>

          <S.Section>
            <S.SectionTitle>5. Armazenamento e Segurança</S.SectionTitle>
            <S.Paragraph>
              Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra
              acesso não autorizado, perda ou uso indevido.
            </S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>6. Direitos do Titular dos Dados</S.SectionTitle>
            <S.Paragraph>O usuário pode, a qualquer momento:</S.Paragraph>
            <S.List>
              <S.ListItem>Solicitar acesso aos seus dados;</S.ListItem>
              <S.ListItem>Corrigir informações incorretas;</S.ListItem>
              <S.ListItem>Solicitar exclusão ou anonimização, quando permitido por lei;</S.ListItem>
              <S.ListItem>Revogar consentimentos.</S.ListItem>
            </S.List>
            <S.Paragraph style={{ marginTop: '0.5rem' }}>
              As solicitações devem ser feitas pelos canais oficiais de atendimento.
            </S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>7. Cookies e Tecnologias Semelhantes</S.SectionTitle>
            <S.Paragraph>
              Podemos utilizar cookies para melhorar a experiência de navegação, analisar desempenho
              e personalizar conteúdo. O usuário pode gerenciar cookies diretamente em seu
              navegador.
            </S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>8. Retenção dos Dados</S.SectionTitle>
            <S.Paragraph>
              Os dados pessoais serão mantidos apenas pelo tempo necessário para cumprir as
              finalidades descritas ou conforme exigido por lei.
            </S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>9. Alterações nesta Política</S.SectionTitle>
            <S.Paragraph>
              Esta Política de Privacidade pode ser atualizada a qualquer momento. A versão vigente
              estará sempre disponível na plataforma.
            </S.Paragraph>
          </S.Section>

          <S.Section>
            <S.SectionTitle>10. Contato</S.SectionTitle>
            <S.Paragraph>
              Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados
              pessoais, o usuário poderá entrar em contato pelos canais oficiais do e-commerce.
            </S.Paragraph>
          </S.Section>
        </S.SectionsWrapper>
      </S.Content>
    </S.Container>
  )
}

export default PoliticaDePrivacidade
