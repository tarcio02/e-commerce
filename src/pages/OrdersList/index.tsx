import { useMemo, useState } from 'react'
import OrderCard from '../../components/layout/CardOrder'
import { Package, Filter } from 'lucide-react'
import Button from '../../components/ui/Button/Index'
import {
  PageContainer,
  Main,
  PageHeader,
  TitleWrapper,
  IconWrapper,
  Title,
  Subtitle,
  FiltersWrapper,
  OrdersGrid,
  BadgeFilter,
  EmptyORdersStyles,
} from './styles'
import { useGetOrderHistoryQuery } from '../../services/OrderStatus.api'
import { useNavigate, useLocation } from 'react-router-dom'
import { clearCart } from '../../features/cart/cart.slices'
import { useAppDispatch } from '../../app/hooks'

type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
type FilterType = 'all' | 'in-progress' | 'pending' | 'delivered'

const OrdersList = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  const origem = location.state?.fromPreview

  if (origem) {
    dispatch(clearCart())
  }

  const { data: orders, isError, isLoading } = useGetOrderHistoryQuery()

  const [activeFilter, setActiveFilter] = useState<FilterType>('all')

  const filteredOrders = useMemo(() => {
    if (!orders) return []

    return orders.filter((order) => {
      if (activeFilter === 'all') return true
      if (activeFilter === 'in-progress') {
        const inProgressStatuses: OrderStatus[] = ['pending', 'confirmed', 'shipped']
        return inProgressStatuses.includes(order.status as OrderStatus)
      }
      if (activeFilter === 'pending') return order.status === 'pending'
      if (activeFilter === 'delivered') return order.status === 'delivered'
      return true
    })
  }, [orders, activeFilter])

  if (isLoading) return <div>Carregando pedidos...</div>
  if (isError) return <div>Erro ao carregar pedidos.</div>

  const EmptyOrders = () => (
    <EmptyORdersStyles>
      <p>Você ainda não fez nenhum pedido!</p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Ver Produtos
      </Button>
    </EmptyORdersStyles>
  )

  return (
    <PageContainer>
      <Main>
        <PageHeader>
          <TitleWrapper>
            <IconWrapper>
              <Package />
            </IconWrapper>
            <Title>Meus Pedidos</Title>
          </TitleWrapper>
          <Subtitle>Acompanhe todos os seus pedidos e histórico de compras</Subtitle>
        </PageHeader>

        <FiltersWrapper>
          <BadgeFilter>
            <Filter className="h-4 w-4 mr-2" />
            Filtrar por:
          </BadgeFilter>
          <Button
            variant={activeFilter === 'all' ? 'outline' : 'ghost'}
            size="sm"
            className={
              activeFilter === 'all'
                ? 'border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground'
                : ''
            }
            onClick={() => setActiveFilter('all')}
          >
            Todos
          </Button>
          <Button
            variant={activeFilter === 'in-progress' ? 'outline' : 'ghost'}
            size="sm"
            onClick={() => setActiveFilter('in-progress')}
          >
            Em andamento
          </Button>
          <Button
            variant={activeFilter === 'pending' ? 'outline' : 'ghost'}
            size="sm"
            onClick={() => setActiveFilter('pending')}
          >
            Pendente
          </Button>
          <Button
            variant={activeFilter === 'delivered' ? 'outline' : 'ghost'}
            size="sm"
            onClick={() => setActiveFilter('delivered')}
          >
            Entregues
          </Button>
        </FiltersWrapper>

        <OrdersGrid>
          {filteredOrders.length === 0 ? (
            <EmptyOrders />
          ) : (
            filteredOrders.map((order, index) => (
              <OrderCard key={order.id} order={order} index={index} />
            ))
          )}
        </OrdersGrid>

        {/* <PaginationWrapper>
          <PaginationContainer>
            <Button variant="outline" size="sm" disabled>
              Anterior
            </Button>
            <Button
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Próximo
            </Button>
          </PaginationContainer>
        </PaginationWrapper> */}
      </Main>
    </PageContainer>
  )
}

export default OrdersList
