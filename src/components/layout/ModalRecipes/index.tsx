import { useEffect } from 'react'
import * as S from './styles'

type Modal = {
  image?: string
  title?: string
  preparing?: string[]
  dificult?: string
  time?: string
  servings?: number
}

type PropsModal = {
  ModalItem?: Modal
  show: boolean
  onClose: () => void
}

const ModalRecipes = ({ show, onClose, ModalItem }: PropsModal) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [show])

  if (!show) return null

  return (
    <S.Backdrop
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <S.ScrollArea>
          <S.ImageContainer>
            <S.CloseButton onClick={onClose} aria-label="Fechar modal">
              ✕
            </S.CloseButton>
            <S.RecipeImage src={ModalItem?.image} alt={ModalItem?.title || 'Receita'} />
          </S.ImageContainer>
          <S.Content>
            {ModalItem?.title && <S.Title>{ModalItem.title}</S.Title>}

            <S.InfoContainer>
              {ModalItem?.dificult && (
                <S.InfoBadge>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  {ModalItem.dificult}
                </S.InfoBadge>
              )}
              {ModalItem?.time && (
                <S.InfoBadge>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6V12L16 14" />
                  </svg>
                  {ModalItem.time}
                </S.InfoBadge>
              )}
              {ModalItem?.servings && (
                <S.InfoBadge>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" />
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" />
                  </svg>
                  {ModalItem.servings} {ModalItem.servings === 1 ? 'porção' : 'porções'}
                </S.InfoBadge>
              )}
            </S.InfoContainer>

            {ModalItem?.preparing && ModalItem.preparing.length > 0 && (
              <>
                <S.SectionTitle>Modo de Preparo</S.SectionTitle>
                <S.PreparingList>
                  {ModalItem.preparing.map((step, index) => (
                    <S.PreparingItem key={index}>{step}</S.PreparingItem>
                  ))}
                </S.PreparingList>
              </>
            )}

            <S.Button>Fechar Receita</S.Button>
          </S.Content>
        </S.ScrollArea>
      </S.ModalBox>
    </S.Backdrop>
  )
}

export default ModalRecipes
