import { BadgeCheck } from 'lucide-react'
import * as S from './styles'

const Sobre = () => {
  return (
    <S.Wrapper>
      <S.AboutSection>
        <S.AboutContent>
          <S.Badge>
            <BadgeCheck />
            Satisfação Garantida
          </S.Badge>
          <h2>
            Excelência em <span className="highlight">Cada Detalhe</span>
          </h2>
          <p>
            Na Sabor da Feira, cada massa é produzida com os mais altos padrões de produção.
            Trabalhamos as melhores massas que transcendem o conceito de sabor.
          </p>

          <S.StatsGrid>
            <S.StatItem>
              <div className="value">+5</div>
              <p>Anos de Mercado</p>
            </S.StatItem>

            <S.StatItem>
              <div className="value">100%</div>
              <p>Satisfação Garantia</p>
            </S.StatItem>

            <S.StatItem>
              <div className="value">5★</div>
              <p>Avaliação Clientes</p>
            </S.StatItem>
          </S.StatsGrid>
        </S.AboutContent>
      </S.AboutSection>
    </S.Wrapper>
  )
}

export default Sobre
