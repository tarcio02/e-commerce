import { MessageSquare, Send, X } from 'lucide-react'
import * as S from './styles'

interface Customer {
  idCustomer: string
  customerName: string
  customerPhone: string
  titulo: string
}

interface MessagePreviewModalProps {
  customer: Customer | null
}

function ModalMessage({ customer }: MessagePreviewModalProps) {
  const previewMessage = `Olá ${customer?.customerName.split(' ')[0]}! 👋

Obrigado por ser nosso cliente desde algum. Você já realizou muitos pedidos, conosco.

Temos novidades especiais para você! Confira nossos novos produtos e aproveite condições exclusivas.

Qualquer dúvida, estamos à disposição!

Abraços,
Equipe`

  // const handleOverlayClick = (e: React.MouseEvent) => {
  //   if (e.target === e.currentTarget) {
  //     onOpenChange(false)
  //   }
  // }

  console.log('objeto customer: ' + customer)

  console.log('Nome de usuário: ' + customer?.customerName)

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          <MessageSquare size={20} />
          {customer?.titulo ?? 'Preview de Mensagem'}
        </S.Title>
        <S.Description>
          Visualize a mensagem antes de enviar para {customer?.customerName}
        </S.Description>
      </S.Header>
      <S.MessageContainer>
        <S.CustomerHeader>
          <S.CustomerAvatar>{customer?.customerName.charAt(0)}</S.CustomerAvatar>
          <S.CustomerInfo>
            <S.CustomerName>{customer?.customerName}</S.CustomerName>
            <S.CustomerEmail>{customer?.customerPhone}</S.CustomerEmail>
          </S.CustomerInfo>
        </S.CustomerHeader>

        <S.MessageBubble>
          <S.MessageText>{previewMessage}</S.MessageText>
          <S.MessageTime>Agora</S.MessageTime>
        </S.MessageBubble>
      </S.MessageContainer>
      <S.Footer>
        <S.Button $variant="outline">
          <X size={16} />
          Cancelar
        </S.Button>
        <S.Button>
          <Send size={16} />
          Enviar Mensagem
        </S.Button>
      </S.Footer>{' '}
    </S.Container>
  )
}

export default ModalMessage
