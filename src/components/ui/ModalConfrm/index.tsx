import { AlertTriangle, Trash2, Truck } from 'lucide-react'
import * as S from './styles'

type PropsConfirm = {
  onClose: () => void
  onConfirm: (orderId?: string, label?: 'shipped' | 'canceled' | '') => void
  label?: 'shipped' | 'canceled' | ''
  orderId?: string
}

function ModalConfirm({ onClose, onConfirm, label, orderId }: PropsConfirm) {
  const isShipped = label === 'shipped'

  return (
    <S.ModalContainer onClick={(e) => e.stopPropagation()}>
      <S.IconWrapper $isShipped={isShipped}>
        {isShipped ? <Truck /> : <AlertTriangle size={24} />}
      </S.IconWrapper>

      <S.Title>Confirmar {isShipped ? 'Envio' : 'Cancelamento'}</S.Title>
      <S.Description>
        Você deseja {isShipped ? 'Enviar' : 'Cancelar'} o pedido{' '}
        <S.CustomerName>{orderId}</S.CustomerName>?
      </S.Description>

      <S.ButtonGroup>
        <S.Button onClick={onClose}>Cancelar</S.Button>
        <S.Button $variant={label} onClick={() => onConfirm(orderId, label)}>
          {isShipped ? (
            'Enviar'
          ) : (
            <>
              <Trash2 size={16} />
              Excluir
            </>
          )}
        </S.Button>
      </S.ButtonGroup>
    </S.ModalContainer>
  )
}

export default ModalConfirm
