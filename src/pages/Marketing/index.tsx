import { useState } from 'react'
import {
  Sparkles,
  ShoppingBag,
  TrendingUp,
  Users,
  DollarSign,
  Rocket,
  MessageCircle,
  Tag,
  X,
  Pencil,
  Pause,
  Play,
  Check,
  Clock,
  Target,
  Send,
} from 'lucide-react'
import * as S from './styles'
import InsightIA from '../../components/layout/InsightIA'
import { StatCard } from '../../components/layout/StatCard'

const metrics = [
  {
    label: 'Pedidos Gerados',
    value: '142',
    comparison: 18,
    delay: 150,
    icon: ShoppingBag,
  },
  {
    label: 'ROI',
    value: '340%',
    comparison: 25,
    delay: 200,
    icon: TrendingUp,
  },
  {
    label: 'Clientes Novos',
    value: '38',
    comparison: -5,
    delay: 250,
    icon: Users,
  },
  {
    label: 'Vendas (R$)',
    value: 'R$ 8.450',
    comparison: 12,
    delay: 350,
    icon: DollarSign,
  },
]

type CampaignType = 'campaign' | 'offer'
type TargetAudience = 'inactive' | 'active' | 'never_bought'
type OfferObjective = 'promotion' | 'personalized_promotion' | 'free_shipping' | 'product_showcase'

interface Campaign {
  id: string
  type: CampaignType
  title: string
  objective: string
  paused: boolean
  aiGenerated: boolean
  // Campaign specific
  budget?: string
  // Offer specific
  targetAudience?: TargetAudience[]
  offerObjective?: OfferObjective
  scheduledDate?: string
  scheduledTime?: string
  // Results
  results: {
    impressions?: number
    clicks?: number
    conversions?: number
    sent?: number
    delivered?: number
    opened?: number
  }
}

const initialCampaigns: Campaign[] = [
  {
    id: '1',
    type: 'campaign',
    title: 'Campanha WhatsApp - Novos Clientes',
    objective: 'Redirecionar para WhatsApp',
    paused: false,
    aiGenerated: true,
    budget: 'R$ 150,00',
    results: {
      impressions: 2340,
      clicks: 187,
      conversions: 23,
    },
  },
  {
    id: '2',
    type: 'offer',
    title: 'Reativação - Clientes Inativos',
    objective: 'Lançar promoção',
    paused: false,
    aiGenerated: true,
    targetAudience: ['inactive'],
    offerObjective: 'promotion',
    scheduledDate: '2024-01-15',
    scheduledTime: '18:00',
    results: {
      sent: 156,
      delivered: 148,
      opened: 89,
    },
  },
]

interface BoostFormData {
  campaignName: string
  objective: string
  audience: string
  budget: string
  duration: string
  adText: string
}

interface OfferFormData {
  offerName: string
  objective: OfferObjective
  targetAudience: TargetAudience[]
  message: string
  scheduledDate: string
  scheduledTime: string
}

export default function Marketing() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns)
  const [showBoostModal, setShowBoostModal] = useState(false)
  const [showOfferModal, setShowOfferModal] = useState(false)

  const [boostForm, setBoostForm] = useState<BoostFormData>({
    campaignName: 'Campanha Meta - Delivery Express',
    objective: 'Conversões via WhatsApp',
    audience: 'Pessoas interessadas em delivery de comida na região',
    budget: 'R$ 200,00',
    duration: '7 dias',
    adText:
      '🍔 Fome? A gente resolve! Peça agora pelo WhatsApp e ganhe 10% de desconto no primeiro pedido. Entrega rápida e comida fresquinha!',
  })

  const [offerForm, setOfferForm] = useState<OfferFormData>({
    offerName: 'Disparo Promocional',
    objective: 'promotion',
    targetAudience: ['inactive'],
    message:
      '🎉 Sentimos sua falta! Que tal um cupom especial de 15% OFF para matar a saudade? Use o código VOLTEI15 no seu próximo pedido. Válido por 48h!',
    scheduledDate: '',
    scheduledTime: '',
  })

  const handleTogglePause = (id: string) => {
    setCampaigns((prev) => prev.map((c) => (c.id === id ? { ...c, paused: !c.paused } : c)))
  }

  const handleBoostSubmit = () => {
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      type: 'campaign',
      title: boostForm.campaignName,
      objective: boostForm.objective,
      paused: false,
      aiGenerated: false,
      budget: boostForm.budget,
      results: {
        impressions: 0,
        clicks: 0,
        conversions: 0,
      },
    }
    setCampaigns((prev) => [...prev, newCampaign])
    setShowBoostModal(false)
  }

  const handleOfferSubmit = () => {
    const objectiveLabels: Record<OfferObjective, string> = {
      promotion: 'Lançar promoção',
      personalized_promotion: 'Promoção personalizada',
      free_shipping: 'Frete grátis',
      product_showcase: 'Divulgação de produtos',
    }

    const newOffer: Campaign = {
      id: Date.now().toString(),
      type: 'offer',
      title: offerForm.offerName,
      objective: objectiveLabels[offerForm.objective],
      paused: false,
      aiGenerated: false,
      targetAudience: offerForm.targetAudience,
      offerObjective: offerForm.objective,
      scheduledDate: offerForm.scheduledDate,
      scheduledTime: offerForm.scheduledTime,
      results: {
        sent: 0,
        delivered: 0,
        opened: 0,
      },
    }
    setCampaigns((prev) => [...prev, newOffer])
    setShowOfferModal(false)
  }

  const toggleTargetAudience = (audience: TargetAudience) => {
    setOfferForm((prev) => ({
      ...prev,
      targetAudience: prev.targetAudience.includes(audience)
        ? prev.targetAudience.filter((a) => a !== audience)
        : [...prev.targetAudience, audience],
    }))
  }

  const getAudienceLabel = (audiences: TargetAudience[]) => {
    const labels: Record<TargetAudience, string> = {
      inactive: 'Clientes inativos',
      active: 'Clientes ativos',
      never_bought: 'Nunca compraram',
    }
    return audiences.map((a) => labels[a]).join(', ')
  }

  return (
    <S.Content>
      <InsightIA insight="Siga os insights da IA para poder vender mais e gastar somente o necessário." />

      <S.MetricsGrid>
        {metrics.map((metric) => (
          <StatCard
            title={metric.label}
            value={metric.value}
            comparison={{ value: metric.comparison, label: 'vs. semana passada' }}
            delay={metric.delay}
            icon={<metric.icon />}
          />
        ))}
      </S.MetricsGrid>

      <S.SectionTitle>Ações de Marketing</S.SectionTitle>
      <S.ActionsButtonsGrid>
        <S.ActionButton onClick={() => setShowBoostModal(true)}>
          <Rocket size={18} />
          Impulsionar Vendas
        </S.ActionButton>
        <S.ActionButton onClick={() => setShowOfferModal(true)}>
          <Tag size={18} />
          Criar uma Oferta
        </S.ActionButton>
      </S.ActionsButtonsGrid>

      <S.ContainerGrid>
        <S.Header>
          <S.ContainerHeader>
            <S.Title>Todas as Campanhas</S.Title>
            <S.SummaryItem>
              <S.SummaryLabel>Total Campanhas:</S.SummaryLabel>
              <S.SummaryValue>{5}</S.SummaryValue>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryLabel>Campanhas Ativas</S.SummaryLabel>
              <S.SummaryValue>3</S.SummaryValue>
            </S.SummaryItem>
          </S.ContainerHeader>
        </S.Header>
        <S.CampaignsGrid>
          {campaigns.map((campaign) => (
            <S.CampaignCard key={campaign.id} $paused={campaign.paused}>
              <S.CampaignHeader>
                <S.CampaignInfo>
                  <S.CampaignType $type={campaign.type}>
                    {campaign.type === 'campaign' ? 'Campanha Meta' : 'Disparo WhatsApp'}
                    {campaign.aiGenerated && (
                      <S.AIBadge>
                        <Sparkles size={10} />
                        IA
                      </S.AIBadge>
                    )}
                  </S.CampaignType>
                  <S.CampaignTitle>{campaign.title}</S.CampaignTitle>
                  <S.CampaignObjective>
                    <Target size={12} style={{ marginRight: 4, display: 'inline' }} />
                    {campaign.objective}
                  </S.CampaignObjective>
                </S.CampaignInfo>
                <S.CampaignActions>
                  <S.StatusBadge $active={!campaign.paused}>
                    {campaign.paused ? 'Pausada' : 'Ativa'}
                  </S.StatusBadge>
                  <S.CampaignActionBtn $variant="edit">
                    <Pencil size={14} />
                  </S.CampaignActionBtn>
                  <S.CampaignActionBtn
                    $variant="pause"
                    onClick={() => handleTogglePause(campaign.id)}
                  >
                    {campaign.paused ? <Play size={14} /> : <Pause size={14} />}
                  </S.CampaignActionBtn>
                </S.CampaignActions>
              </S.CampaignHeader>

              <S.CampaignDetails>
                {campaign.type === 'campaign' && campaign.budget && (
                  <S.CampaignDetail>
                    <S.DetailLabel>Verba</S.DetailLabel>
                    <S.DetailValue>{campaign.budget}</S.DetailValue>
                  </S.CampaignDetail>
                )}
                {campaign.type === 'offer' && (
                  <>
                    {campaign.targetAudience && (
                      <S.CampaignDetail>
                        <S.DetailLabel>Público-alvo</S.DetailLabel>
                        <S.DetailValue>{getAudienceLabel(campaign.targetAudience)}</S.DetailValue>
                      </S.CampaignDetail>
                    )}
                    {campaign.scheduledDate && campaign.scheduledTime && (
                      <S.CampaignDetail>
                        <S.DetailLabel>Agendamento</S.DetailLabel>
                        <S.DetailValue>
                          <Clock size={12} style={{ marginRight: 4, display: 'inline' }} />
                          {campaign.scheduledDate} às {campaign.scheduledTime}
                        </S.DetailValue>
                      </S.CampaignDetail>
                    )}
                  </>
                )}
              </S.CampaignDetails>

              <S.CampaignResults>
                {campaign.type === 'campaign' ? (
                  <>
                    <S.ResultItem>
                      <S.ResultLabel>Impressões</S.ResultLabel>
                      <S.ResultValue>
                        {campaign.results.impressions?.toLocaleString()}
                      </S.ResultValue>
                    </S.ResultItem>
                    <S.ResultItem>
                      <S.ResultLabel>Cliques</S.ResultLabel>
                      <S.ResultValue>{campaign.results.clicks?.toLocaleString()}</S.ResultValue>
                    </S.ResultItem>
                    <S.ResultItem>
                      <S.ResultLabel>Conversões</S.ResultLabel>
                      <S.ResultValue>
                        {campaign.results.conversions?.toLocaleString()}
                      </S.ResultValue>
                    </S.ResultItem>
                  </>
                ) : (
                  <>
                    <S.ResultItem>
                      <S.ResultLabel>Enviadas</S.ResultLabel>
                      <S.ResultValue>{campaign.results.sent?.toLocaleString()}</S.ResultValue>
                    </S.ResultItem>
                    <S.ResultItem>
                      <S.ResultLabel>Entregues</S.ResultLabel>
                      <S.ResultValue>{campaign.results.delivered?.toLocaleString()}</S.ResultValue>
                    </S.ResultItem>
                    <S.ResultItem>
                      <S.ResultLabel>Abertas</S.ResultLabel>
                      <S.ResultValue>{campaign.results.opened?.toLocaleString()}</S.ResultValue>
                    </S.ResultItem>
                  </>
                )}
              </S.CampaignResults>
            </S.CampaignCard>
          ))}
        </S.CampaignsGrid>
      </S.ContainerGrid>

      {/* Modal Impulsionar Vendas */}
      {showBoostModal && (
        <S.ModalOverlay onClick={() => setShowBoostModal(false)}>
          <S.ModalContainer onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>
                <Rocket size={20} />
                Impulsionar Vendas
                <S.AIBadge>
                  <Sparkles size={10} />
                  Pré-preenchido por IA
                </S.AIBadge>
              </S.ModalTitle>
              <S.ModalCloseBtn onClick={() => setShowBoostModal(false)}>
                <X size={18} />
              </S.ModalCloseBtn>
            </S.ModalHeader>

            <S.ModalBody>
              <S.FormGroup>
                <S.FormLabel>Nome da Campanha</S.FormLabel>
                <S.FormInput
                  value={boostForm.campaignName}
                  onChange={(e) =>
                    setBoostForm((prev) => ({ ...prev, campaignName: e.target.value }))
                  }
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.FormLabel>Objetivo</S.FormLabel>
                <S.FormSelect
                  value={boostForm.objective}
                  onChange={(e) => setBoostForm((prev) => ({ ...prev, objective: e.target.value }))}
                >
                  <option value="Conversões via WhatsApp">Conversões via WhatsApp</option>
                  <option value="Tráfego para o site">Tráfego para o site</option>
                  <option value="Alcance máximo">Alcance máximo</option>
                  <option value="Engajamento">Engajamento</option>
                </S.FormSelect>
              </S.FormGroup>

              <S.FormGroup>
                <S.FormLabel>Público-alvo</S.FormLabel>
                <S.FormInput
                  value={boostForm.audience}
                  onChange={(e) => setBoostForm((prev) => ({ ...prev, audience: e.target.value }))}
                />
              </S.FormGroup>

              <S.FormRow>
                <S.FormGroup>
                  <S.FormLabel>Orçamento</S.FormLabel>
                  <S.FormInput
                    value={boostForm.budget}
                    onChange={(e) => setBoostForm((prev) => ({ ...prev, budget: e.target.value }))}
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <S.FormLabel>Duração</S.FormLabel>
                  <S.FormSelect
                    value={boostForm.duration}
                    onChange={(e) =>
                      setBoostForm((prev) => ({ ...prev, duration: e.target.value }))
                    }
                  >
                    <option value="3 dias">3 dias</option>
                    <option value="7 dias">7 dias</option>
                    <option value="14 dias">14 dias</option>
                    <option value="30 dias">30 dias</option>
                  </S.FormSelect>
                </S.FormGroup>
              </S.FormRow>

              <S.FormGroup>
                <S.FormLabel>Texto do Anúncio</S.FormLabel>
                <S.FormTextarea
                  value={boostForm.adText}
                  onChange={(e) => setBoostForm((prev) => ({ ...prev, adText: e.target.value }))}
                />
              </S.FormGroup>
            </S.ModalBody>

            <S.ModalFooter>
              <S.ModalCancelBtn onClick={() => setShowBoostModal(false)}>Cancelar</S.ModalCancelBtn>
              <S.ModalSubmitBtn onClick={handleBoostSubmit}>
                <Rocket size={16} />
                Impulsionar Vendas
              </S.ModalSubmitBtn>
            </S.ModalFooter>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}

      {/* Modal Criar Oferta */}
      {showOfferModal && (
        <S.ModalOverlay onClick={() => setShowOfferModal(false)}>
          <S.ModalContainer onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>
                <MessageCircle size={20} />
                Criar uma Oferta
              </S.ModalTitle>
              <S.ModalCloseBtn onClick={() => setShowOfferModal(false)}>
                <X size={18} />
              </S.ModalCloseBtn>
            </S.ModalHeader>

            <S.ModalBody>
              <S.FormGroup>
                <S.FormLabel>Nome da Oferta</S.FormLabel>
                <S.FormInput
                  value={offerForm.offerName}
                  onChange={(e) => setOfferForm((prev) => ({ ...prev, offerName: e.target.value }))}
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.FormLabel>Objetivo do Disparo</S.FormLabel>
                <S.RadioGroup>
                  {[
                    { value: 'promotion', label: 'Lançar Promoção' },
                    { value: 'personalized_promotion', label: 'Promoção Personalizada' },
                    { value: 'free_shipping', label: 'Frete Grátis' },
                    { value: 'product_showcase', label: 'Divulgação de Produtos' },
                  ].map((option) => (
                    <S.RadioOption
                      key={option.value}
                      $selected={offerForm.objective === option.value}
                    >
                      <input
                        type="radio"
                        name="objective"
                        value={option.value}
                        checked={offerForm.objective === option.value}
                        onChange={(e) =>
                          setOfferForm((prev) => ({
                            ...prev,
                            objective: e.target.value as OfferObjective,
                          }))
                        }
                      />
                      {option.label}
                    </S.RadioOption>
                  ))}
                </S.RadioGroup>
              </S.FormGroup>

              <S.FormGroup>
                <S.FormLabel>Contatos Alvos</S.FormLabel>
                <S.CheckboxGroup>
                  {[
                    { value: 'inactive', label: 'Clientes inativos (sem compra há +20 dias)' },
                    { value: 'active', label: 'Clientes ativos' },
                    { value: 'never_bought', label: 'Nunca compraram' },
                  ].map((option) => (
                    <S.CheckboxOption
                      key={option.value}
                      $selected={offerForm.targetAudience.includes(option.value as TargetAudience)}
                      onClick={() => toggleTargetAudience(option.value as TargetAudience)}
                    >
                      <S.CheckboxIndicator
                        $checked={offerForm.targetAudience.includes(option.value as TargetAudience)}
                      >
                        {offerForm.targetAudience.includes(option.value as TargetAudience) && (
                          <Check size={14} />
                        )}
                      </S.CheckboxIndicator>
                      {option.label}
                    </S.CheckboxOption>
                  ))}
                </S.CheckboxGroup>
              </S.FormGroup>

              <S.FormGroup>
                <S.FormLabel>Mensagem</S.FormLabel>
                <S.FormTextarea
                  value={offerForm.message}
                  onChange={(e) => setOfferForm((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Digite a mensagem que será enviada..."
                />
              </S.FormGroup>

              <S.FormRow>
                <S.FormGroup>
                  <S.FormLabel>Data do Disparo</S.FormLabel>
                  <S.FormInput
                    type="date"
                    value={offerForm.scheduledDate}
                    onChange={(e) =>
                      setOfferForm((prev) => ({ ...prev, scheduledDate: e.target.value }))
                    }
                  />
                </S.FormGroup>
                <S.FormGroup>
                  <S.FormLabel>Hora do Disparo</S.FormLabel>
                  <S.FormInput
                    type="time"
                    value={offerForm.scheduledTime}
                    onChange={(e) =>
                      setOfferForm((prev) => ({ ...prev, scheduledTime: e.target.value }))
                    }
                  />
                </S.FormGroup>
              </S.FormRow>
            </S.ModalBody>

            <S.ModalFooter>
              <S.ModalCancelBtn onClick={() => setShowOfferModal(false)}>Cancelar</S.ModalCancelBtn>
              <S.ModalSubmitBtn onClick={handleOfferSubmit}>
                <Send size={16} />
                Agendar Disparo
              </S.ModalSubmitBtn>
            </S.ModalFooter>
          </S.ModalContainer>
        </S.ModalOverlay>
      )}
    </S.Content>
  )
}
