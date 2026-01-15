import { useState } from 'react'
import {
  Sparkles,
  X,
  Send,
  Check,
  MessageSquare,
  ShoppingCart,
  Target,
  Repeat2,
} from 'lucide-react'
import * as S from './styles'
import InsightIA from '../../components/layout/InsightIA'
import { StatCard } from '../../components/layout/StatCard'

type ClassificationType = 'duvida' | 'reclamacao' | 'erro_pedido'

interface ConversationLog {
  id: string
  customerName: string
  date: string
  classification: ClassificationType
  aiSummary: string
  conversationResult: string
  aiSuggestion: string
}

const classificationLabels: Record<ClassificationType, string> = {
  duvida: 'Dúvida',
  reclamacao: 'Reclamação',
  erro_pedido: 'Erro no Pedido',
}

const aiMessages: Record<ClassificationType, string> = {
  duvida:
    'Olá! Vi que você teve uma dúvida recentemente. Conseguiu resolver? Se precisar de mais ajuda, é só me chamar!',
  reclamacao:
    'Olá! Lamentamos pela experiência negativa. Queremos muito resolver isso para você. Podemos conversar sobre o que aconteceu?',
  erro_pedido:
    'Olá! Identificamos um problema no seu pedido e queremos resolver isso imediatamente. Estamos verificando a situação e em breve entraremos em contato com a solução.',
}

const mockLogs: ConversationLog[] = [
  {
    id: '1',
    customerName: 'Maria Silva',
    date: '06/01/2026',
    classification: 'duvida',
    aiSummary:
      'Cliente perguntou sobre prazo de entrega para a região Sul. Foi informada que leva de 3 a 5 dias úteis.',
    conversationResult: 'O cliente teve sua dúvida sanada e solicitou um pedido.',
    aiSuggestion:
      'Enviar cupom de 10% de desconto para o próximo pedido como agradecimento pela preferência.',
  },
  {
    id: '2',
    customerName: 'João Santos',
    date: '06/01/2026',
    classification: 'reclamacao',
    aiSummary:
      'Cliente insatisfeito com atraso na entrega. Pedido estava previsto para ontem e ainda não chegou.',
    conversationResult: 'Explicamos a demora e o cliente compreendeu a situação.',
    aiSuggestion:
      'Oferecer frete grátis no próximo pedido como compensação pelo transtorno causado.',
  },
  {
    id: '3',
    customerName: 'Ana Costa',
    date: '06/01/2026',
    classification: 'erro_pedido',
    aiSummary:
      'Produto enviado diferente do solicitado. Cliente pediu camiseta M e recebeu tamanho P.',
    conversationResult: 'Oferecemos a troca e um novo pedido foi gerado sem custos adicionais.',
    aiSuggestion: 'Adicionar um brinde exclusivo na entrega como pedido de desculpas pelo erro.',
  },
  {
    id: '4',
    customerName: 'Pedro Lima',
    date: '05/01/2026',
    classification: 'reclamacao',
    aiSummary:
      'Reclamação sobre qualidade do produto. Após análise, foi oferecido reembolso que foi aceito.',
    conversationResult: 'Explicamos a demora e o cliente compreendeu a situação.',
    aiSuggestion: 'Enviar voucher de 15% para reconquistar a confiança do cliente.',
  },
  {
    id: '5',
    customerName: 'Carla Mendes',
    date: '05/01/2026',
    classification: 'duvida',
    aiSummary: 'Dúvida sobre formas de pagamento disponíveis. Cliente optou por PIX com desconto.',
    conversationResult: 'O cliente teve sua dúvida sanada e solicitou um pedido.',
    aiSuggestion: 'Informar sobre programa de fidelidade para aumentar recorrência de compras.',
  },
  {
    id: '6',
    customerName: 'Roberto Alves',
    date: '05/01/2026',
    classification: 'erro_pedido',
    aiSummary:
      'Pedido duplicado gerado por erro no sistema. Um dos pedidos foi cancelado e reembolsado.',
    conversationResult: 'Oferecemos a troca e um novo pedido foi gerado sem custos adicionais.',
    aiSuggestion: 'Oferecer desconto exclusivo de 20% como compensação pelo inconveniente.',
  },
  {
    id: '7',
    customerName: 'Fernanda Souza',
    date: '04/01/2026',
    classification: 'duvida',
    aiSummary:
      'Cliente perguntando sobre política de troca. Aguardando resposta sobre produto específico.',
    conversationResult: 'O cliente teve sua dúvida sanada e solicitou um pedido.',
    aiSuggestion: 'Enviar guia completo de políticas por email para facilitar futuras consultas.',
  },
  {
    id: '8',
    customerName: 'Lucas Oliveira',
    date: '04/01/2026',
    classification: 'reclamacao',
    aiSummary: 'Produto chegou danificado. Cliente enviou fotos e aguarda posicionamento.',
    conversationResult: 'Explicamos a demora e o cliente compreendeu a situação.',
    aiSuggestion: 'Priorizar reenvio com embalagem reforçada e incluir cupom de desconto.',
  },
  {
    id: '9',
    customerName: 'Patricia Gomes',
    date: '04/01/2026',
    classification: 'duvida',
    aiSummary: 'Dúvida sobre rastreamento do pedido. Link de acompanhamento foi reenviado.',
    conversationResult: 'O cliente teve sua dúvida sanada e solicitou um pedido.',
    aiSuggestion: 'Configurar notificações automáticas de rastreamento para este cliente.',
  },
  {
    id: '10',
    customerName: 'Bruno Santos',
    date: '03/01/2026',
    classification: 'erro_pedido',
    aiSummary: 'Endereço de entrega incorreto no cadastro. Foi corrigido e pedido redirecionado.',
    conversationResult: 'Oferecemos a troca e um novo pedido foi gerado sem custos adicionais.',
    aiSuggestion: 'Sugerir validação de endereço na próxima compra para evitar problemas.',
  },
  {
    id: '11',
    customerName: 'Camila Ferreira',
    date: '03/01/2026',
    classification: 'reclamacao',
    aiSummary: 'Reclamação sobre atendimento anterior. Situação resolvida com cupom de desconto.',
    conversationResult: 'Explicamos a demora e o cliente compreendeu a situação.',
    aiSuggestion: 'Agendar follow-up em 7 dias para garantir satisfação contínua.',
  },
  {
    id: '12',
    customerName: 'Diego Martins',
    date: '03/01/2026',
    classification: 'duvida',
    aiSummary:
      'Cliente perguntou sobre disponibilidade de produto. Foi informado sobre reposição em 5 dias.',
    conversationResult: 'O cliente teve sua dúvida sanada e solicitou um pedido.',
    aiSuggestion: 'Ativar notificação automática quando produto estiver disponível.',
  },
]

const stats = {
  atendimentosHoje: 47,
  atendimentosChange: 12,
  pedidosGerados: 18,
  pedidosChange: 8,
  conversao: 38,
  conversaoChange: -5,
  satisfacao: 92,
  satisfacaoChange: 87,
}

function AdminAtendimentos() {
  const [selectedLog, setSelectedLog] = useState<ConversationLog | null>(null)
  const [message, setMessage] = useState('')
  const [visibleLogs, setVisibleLogs] = useState(10)
  const [selectedCards, setSelectedCards] = useState<Set<string>>(
    new Set(mockLogs.map((log) => log.id)),
  )

  const handleOpenModal = (log: ConversationLog) => {
    setSelectedLog(log)
    setMessage(aiMessages[log.classification])
  }

  const handleCloseModal = () => {
    setSelectedLog(null)
    setMessage('')
  }

  const handleSendMessage = () => {
    console.log('Enviando mensagem para:', selectedLog?.customerName, message)
    handleCloseModal()
  }

  const handleShowMore = () => {
    setVisibleLogs((prev) => prev + 10)
  }

  const handleToggleCard = (id: string) => {
    setSelectedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleToggleAll = () => {
    if (selectedCards.size === mockLogs.length) {
      setSelectedCards(new Set())
    } else {
      setSelectedCards(new Set(mockLogs.map((log) => log.id)))
    }
  }

  const handleBulkSend = () => {
    const selectedLogs = mockLogs.filter((log) => selectedCards.has(log.id))
    console.log(
      'Disparando mensagens para:',
      selectedLogs.map((l) => l.customerName),
    )
    // Here you would handle bulk message sending
  }

  const displayedLogs = mockLogs.slice(0, visibleLogs)

  return (
    <S.Content>
      <S.Header>
        <S.Title>Atendimentos IA</S.Title>
        <S.Subtitle>Acompanhe as conversas e interações com clientes</S.Subtitle>
      </S.Header>

      <InsightIA insight="Siga os insights de IA para melhor sua métricas de atendimento e configurar corretamente seus atendimentos." />

      <S.StatsGrid>
        <StatCard
          title="Atendimentos"
          value={stats.atendimentosHoje}
          comparison={{
            label: 'vs.semana passada',
            value: stats.atendimentosChange,
          }}
          delay={150}
          icon={<MessageSquare size={18} />}
        />

        <StatCard
          title="Pedidos Gerados"
          value={stats.pedidosGerados}
          comparison={{
            label: 'vs. semana passada',
            value: stats.pedidosChange,
          }}
          delay={200}
          icon={<ShoppingCart size={18} />}
        />

        <StatCard
          title="Taxa de Conversão"
          value={stats.conversao}
          comparison={{
            label: 'vs. semana passada',
            value: stats.conversaoChange,
          }}
          delay={250}
          icon={<Repeat2 size={18} />}
        />

        <StatCard
          title="Taxa de satisfação"
          value={stats.satisfacao}
          comparison={{
            label: 'vs. semana passada',
            value: stats.satisfacaoChange,
          }}
          delay={300}
          icon={<Target size={18} />}
        />
      </S.StatsGrid>

      <S.LogsSection>
        <S.LogsSectionHeader>
          <S.LogsSectionTitle>Principais Conversas</S.LogsSectionTitle>
          <S.BulkActionsContainer>
            <S.SelectAllButton onClick={handleToggleAll}>
              <S.Checkbox $checked={selectedCards.size === mockLogs.length}>
                {selectedCards.size === mockLogs.length && <Check size={12} />}
              </S.Checkbox>
              {selectedCards.size === mockLogs.length ? 'Desmarcar Todos' : 'Marcar Todos'}
            </S.SelectAllButton>
            <S.BulkSendButton onClick={handleBulkSend} disabled={selectedCards.size === 0}>
              <Send size={14} />
              Disparar Mensagem ({selectedCards.size})
            </S.BulkSendButton>
          </S.BulkActionsContainer>
        </S.LogsSectionHeader>

        <S.LogsGrid>
          {displayedLogs.map((log) => (
            <S.LogCard key={log.id} $selected={selectedCards.has(log.id)}>
              <S.CardHeader>
                <S.CardCheckbox
                  $checked={selectedCards.has(log.id)}
                  onClick={() => handleToggleCard(log.id)}
                >
                  {selectedCards.has(log.id) && <Check size={12} />}
                </S.CardCheckbox>
                <S.CardCustomerInfo>
                  <S.LogCustomerName>{log.customerName}</S.LogCustomerName>
                  <S.LogDate>{log.date}</S.LogDate>
                </S.CardCustomerInfo>
                <S.ClassificationBadge $type={log.classification}>
                  {classificationLabels[log.classification]}
                </S.ClassificationBadge>
              </S.CardHeader>

              <S.CardBody>
                <S.SummaryBox>
                  <S.SummaryLabel>Resumo da conversa:</S.SummaryLabel>
                  <S.SummaryText>{log.aiSummary}</S.SummaryText>
                </S.SummaryBox>

                <S.ResultBox>
                  <S.ResultLabel>Resultado da conversa:</S.ResultLabel>
                  <S.ResultText>{log.conversationResult}</S.ResultText>
                </S.ResultBox>

                <S.AISuggestionBox>
                  <S.AISuggestionIcon>
                    <Sparkles size={16} />
                  </S.AISuggestionIcon>
                  <S.AISuggestionContent>
                    <S.AISuggestionLabel>Sugestão de IA:</S.AISuggestionLabel>
                    <S.AISuggestionText>{log.aiSuggestion}</S.AISuggestionText>
                  </S.AISuggestionContent>
                </S.AISuggestionBox>
              </S.CardBody>

              <S.CardFooter>
                <S.SendMessageButton onClick={() => handleOpenModal(log)}>
                  <Sparkles size={14} />
                  Executar sugestão de IA
                </S.SendMessageButton>
              </S.CardFooter>
            </S.LogCard>
          ))}
        </S.LogsGrid>

        {visibleLogs < mockLogs.length && (
          <S.ShowMoreButton onClick={handleShowMore}>Mostrar mais</S.ShowMoreButton>
        )}
      </S.LogsSection>

      {selectedLog && (
        <S.ModalOverlay onClick={handleCloseModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>Mensagem para {selectedLog.customerName}</S.ModalTitle>
              <S.ModalCloseButton onClick={handleCloseModal}>
                <X size={20} />
              </S.ModalCloseButton>
            </S.ModalHeader>
            <S.ModalBody>
              <S.MessageLabel>Mensagem personalizada por IA:</S.MessageLabel>
              <S.MessageTextarea value={message} onChange={(e) => setMessage(e.target.value)} />
            </S.ModalBody>
            <S.ModalFooter>
              <S.CancelButton onClick={handleCloseModal}>Cancelar</S.CancelButton>
              <S.ConfirmButton onClick={handleSendMessage}>
                <Send size={14} style={{ marginRight: '0.5rem', display: 'inline' }} />
                Enviar Mensagem
              </S.ConfirmButton>
            </S.ModalFooter>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Content>
  )
}

export default AdminAtendimentos
