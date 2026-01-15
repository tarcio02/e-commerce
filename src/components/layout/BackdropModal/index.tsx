import * as S from './styles'
import { type JSX } from 'react'
import { X } from 'lucide-react'

type Props = {
  children: JSX.Element
  isActive: boolean
  onClose: () => void
}

const BackdropModal = ({ children, isActive, onClose }: Props) => {
  if (!isActive) return null

  return (
    <S.Backdrop onClick={onClose}>
      <S.ModalBox>
        <S.Close>
          <X size={20} />
        </S.Close>
        {children}
      </S.ModalBox>
    </S.Backdrop>
  )
}

export default BackdropModal
