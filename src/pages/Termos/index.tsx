import { useNavigate } from 'react-router-dom'
import * as S from './styles'

const TermosDeUso = () => {
  const navigate = useNavigate()

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <S.Container>
      <S.BackLink href="/" onClick={handleBack}>
        ← Voltar
      </S.BackLink>
      <S.Title>Termos de Uso</S.Title>

      <S.Section>
        <S.SectionTitle>1. Aceitação dos Termos</S.SectionTitle>
        <S.Paragraph>
          Ao acessar e utilizar este e-commerce de alimentos, o usuário declara que leu, compreendeu
          e concorda integralmente com estes Termos de Uso. Caso não concorde, não deverá utilizar a
          plataforma.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>2. Objeto do Serviço</S.SectionTitle>
        <S.Paragraph>
          Este e-commerce tem como finalidade a divulgação e venda de alimentos para consumo. Os
          pedidos são realizados online e o pagamento é processado exclusivamente por meio do
          Checkout Pro do Mercado Pago, não havendo processamento direto de pagamentos dentro desta
          plataforma.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>3. Cadastro do Usuário</S.SectionTitle>
        <S.Paragraph>
          Para realizar pedidos, o usuário poderá fornecer dados pessoais verdadeiros, completos e
          atualizados. O usuário é responsável pelas informações prestadas e por manter a
          confidencialidade de seus dados de acesso, quando aplicável.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>4. Pedidos e Disponibilidade</S.SectionTitle>
        <S.Paragraph>
          Os produtos exibidos estão sujeitos à disponibilidade de estoque. Reservamo-nos o direito
          de cancelar pedidos em caso de indisponibilidade, erro de preço, falhas operacionais ou
          suspeita de fraude, com a devida comunicação ao cliente.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>5. Pagamentos</S.SectionTitle>
        <S.Paragraph>
          Os pagamentos são realizados em ambiente seguro do Mercado Pago (Checkout Pro). Este
          e-commerce não armazena dados bancários ou de cartões de crédito dos usuários. As
          condições de parcelamento, taxas e prazos são definidos pelo Mercado Pago.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>6. Entrega e Retirada</S.SectionTitle>
        <S.Paragraph>
          Os prazos, valores e modalidades de entrega ou retirada são informados no momento da
          compra. Eventuais atrasos decorrentes de fatores externos (clima, trânsito, força maior)
          não caracterizam descumprimento contratual.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>7. Cancelamentos, Trocas e Reembolsos</S.SectionTitle>
        <S.Paragraph>
          Cancelamentos e reembolsos seguem as regras do Código de Defesa do Consumidor e as
          políticas do Mercado Pago. Em produtos alimentícios, especialmente perecíveis, podem
          existir restrições legais para troca ou devolução após a entrega.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>8. Responsabilidades</S.SectionTitle>
        <S.Paragraph>
          Este e-commerce se compromete a fornecer informações claras sobre produtos e serviços. Não
          nos responsabilizamos por:
        </S.Paragraph>
        <S.List>
          <S.ListItem>Uso indevido da plataforma pelo usuário;</S.ListItem>
          <S.ListItem>Informações incorretas fornecidas pelo cliente;</S.ListItem>
          <S.ListItem>Falhas no serviço do Mercado Pago ou de terceiros.</S.ListItem>
        </S.List>
      </S.Section>

      <S.Section>
        <S.SectionTitle>9. Propriedade Intelectual</S.SectionTitle>
        <S.Paragraph>
          Todo o conteúdo da plataforma (textos, marcas, logotipos, imagens) é protegido por
          direitos autorais e não pode ser reproduzido sem autorização prévia.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>10. Modificações dos Termos</S.SectionTitle>
        <S.Paragraph>
          Estes Termos de Uso podem ser alterados a qualquer momento. A versão atualizada estará
          sempre disponível na plataforma.
        </S.Paragraph>
      </S.Section>

      <S.Section>
        <S.SectionTitle>11. Legislação Aplicável</S.SectionTitle>
        <S.Paragraph>
          Aplica-se a legislação brasileira, especialmente o Código de Defesa do Consumidor. Fica
          eleito o foro do domicílio do consumidor para dirimir eventuais controvérsias.
        </S.Paragraph>
      </S.Section>
    </S.Container>
  )
}

export default TermosDeUso
