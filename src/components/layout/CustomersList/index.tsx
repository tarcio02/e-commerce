import { useState, useMemo } from 'react'
import * as S from './styles'

interface Customer {
  id: string
  name: string
  phone: string
  lastOrderDate: string
  totalOrders: number
  averageTicket: number
  status: 'ativo' | 'inativo'
}

interface CustomersListProps {
  customers: Customer[]
  onCustomerClick: (customer: Customer) => void
}

const ITEMS_PER_PAGE = 10

function CustomersList({ customers, onCustomerClick }: CustomersListProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  // const getInitials = (name: string) => {
  //   return name
  //     .split(' ')
  //     .map((n) => n[0])
  //     .join('')
  //     .slice(0, 2)
  //     .toUpperCase()
  // }

  const filteredCustomers = useMemo(() => {
    if (!searchTerm.trim()) return customers
    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [customers, searchTerm])

  const visibleCustomers = filteredCustomers.slice(0, visibleCount)
  const hasMore = visibleCount < filteredCustomers.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
  }

  return (
    <S.Container>
      <S.Header>
        <S.ContainerHeader>
          <S.Title>Lista de Clientes</S.Title>
          <S.SummaryItem>
            <S.SummaryLabel>Total de Clientes:</S.SummaryLabel>
            <S.SummaryValue>{customers.length}</S.SummaryValue>
          </S.SummaryItem>
          <S.SummaryItem>
            <S.SummaryLabel>Taxa de Satisfação:</S.SummaryLabel>
            <S.SummaryValue>98%</S.SummaryValue>
          </S.SummaryItem>
        </S.ContainerHeader>
        <S.SearchInput
          type="text"
          placeholder="Pesquisar cliente..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setVisibleCount(ITEMS_PER_PAGE)
          }}
        />
      </S.Header>
      <S.Table>
        <S.TableHead>
          <tr>
            <S.TableHeader>Nome</S.TableHeader>
            <S.TableHeader>Telefone</S.TableHeader>
            <S.TableHeader>Último Pedido</S.TableHeader>
            <S.TableHeader>Total Pedidos</S.TableHeader>
            <S.TableHeader>Ticket Médio</S.TableHeader>
            <S.TableHeader>Status</S.TableHeader>
          </tr>
        </S.TableHead>
        <tbody>
          {visibleCustomers.map((customer) => (
            <S.TableRow key={customer.id} onClick={() => onCustomerClick(customer)}>
              <S.TableCell>
                <S.Name>{customer.name}</S.Name>
              </S.TableCell>
              <S.TableCell>{customer.phone}</S.TableCell>
              <S.TableCell>{customer.lastOrderDate}</S.TableCell>
              <S.TableCell>
                <S.NumericValue>{customer.totalOrders}</S.NumericValue>
              </S.TableCell>
              <S.TableCell>
                <S.NumericValue>{formatCurrency(customer.averageTicket)}</S.NumericValue>
              </S.TableCell>
              <S.TableCell>
                <S.StatusBadge $status={customer.status}>
                  {customer.status === 'ativo' ? 'Ativo' : 'Inativo'}
                </S.StatusBadge>
              </S.TableCell>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>
      {hasMore && (
        <S.Footer>
          <S.LoadMoreButton onClick={handleLoadMore}>Mostrar mais 10 clientes</S.LoadMoreButton>
        </S.Footer>
      )}
    </S.Container>
  )
}

export default CustomersList
