import { useState } from 'react'
import {
  Package,
  Plus,
  CreditCard,
  Banknote,
  QrCode,
  Truck,
  Edit,
  Trash2,
  Star,
  Image as ImageIcon,
} from 'lucide-react'
import BackDropModal from '../../components/layout/BackdropModal'
import * as S from './styles'

interface Product {
  id: string
  name: string
  price: number
  promotionalPrice?: number
  description: string
  available: boolean
  freeShipping: boolean
  highlighted: boolean
  imageUrl?: string
  isCombo?: boolean
  comboProducts?: string[]
}

type FilterType = 'all' | 'products' | 'combos'

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Camiseta Premium',
    price: 89.9,
    promotionalPrice: 69.9,
    description: 'Camiseta 100% algodão com estampa exclusiva',
    available: true,
    freeShipping: true,
    highlighted: true,
  },
  {
    id: '2',
    name: 'Calça Jeans Slim',
    price: 159.9,
    description: 'Calça jeans com corte slim e acabamento premium',
    available: true,
    freeShipping: false,
    highlighted: false,
  },
  {
    id: '3',
    name: 'Tênis Esportivo',
    price: 299.9,
    promotionalPrice: 249.9,
    description: 'Tênis leve e confortável para atividades físicas',
    available: false,
    freeShipping: true,
    highlighted: false,
  },
]

const initialCombos: Product[] = [
  {
    id: 'combo-1',
    name: 'Kit Verão Completo',
    price: 399.9,
    promotionalPrice: 299.9,
    description: 'Camiseta + Bermuda + Chinelo',
    available: true,
    freeShipping: true,
    highlighted: true,
    isCombo: true,
    comboProducts: ['Camiseta Premium', 'Bermuda Casual', 'Chinelo Comfort'],
  },
]

function AdminCatalogo() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [combos, setCombos] = useState<Product[]>(initialCombos)
  const [filter, setFilter] = useState<FilterType>('all')

  // Checkout settings
  const [checkoutSiteEnabled, setCheckoutSiteEnabled] = useState(true)
  const [checkoutAtendimentoEnabled, setCheckoutAtendimentoEnabled] = useState(true)
  const [pixEnabled, setPixEnabled] = useState(true)
  const [cardEnabled, setCardEnabled] = useState(true)
  const [cashEnabled, setCashEnabled] = useState(false)

  // Modals
  const [productModalOpen, setProductModalOpen] = useState(false)
  const [comboModalOpen, setComboModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [editingCombo, setEditingCombo] = useState<Product | null>(null)

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    promotionalPrice: '',
    description: '',
    available: true,
    freeShipping: false,
    highlighted: false,
    imageUrl: '',
  })

  const [comboFormData, setComboFormData] = useState({
    name: '',
    price: '',
    promotionalPrice: '',
    description: '',
    available: true,
    freeShipping: true,
    highlighted: false,
    imageUrl: '',
    comboProducts: '',
  })

  const handleToggleAvailable = (id: string, isCombo: boolean) => {
    if (isCombo) {
      setCombos((prev) =>
        prev.map((item) => (item.id === id ? { ...item, available: !item.available } : item)),
      )
    } else {
      setProducts((prev) =>
        prev.map((item) => (item.id === id ? { ...item, available: !item.available } : item)),
      )
    }
  }

  const handleToggleFreeShipping = (id: string, isCombo: boolean) => {
    if (isCombo) {
      setCombos((prev) =>
        prev.map((item) => (item.id === id ? { ...item, freeShipping: !item.freeShipping } : item)),
      )
    } else {
      setProducts((prev) =>
        prev.map((item) => (item.id === id ? { ...item, freeShipping: !item.freeShipping } : item)),
      )
    }
  }

  const handleToggleHighlighted = (id: string, isCombo: boolean) => {
    if (isCombo) {
      setCombos((prev) =>
        prev.map((item) => (item.id === id ? { ...item, highlighted: !item.highlighted } : item)),
      )
    } else {
      setProducts((prev) =>
        prev.map((item) => (item.id === id ? { ...item, highlighted: !item.highlighted } : item)),
      )
    }
  }

  const openProductModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product)
      setFormData({
        name: product.name,
        price: product.price.toString(),
        promotionalPrice: product.promotionalPrice?.toString() || '',
        description: product.description,
        available: product.available,
        freeShipping: product.freeShipping,
        highlighted: product.highlighted,
        imageUrl: product.imageUrl || '',
      })
    } else {
      setEditingProduct(null)
      setFormData({
        name: '',
        price: '',
        promotionalPrice: '',
        description: '',
        available: true,
        freeShipping: false,
        highlighted: false,
        imageUrl: '',
      })
    }
    setProductModalOpen(true)
  }

  const openComboModal = (combo?: Product) => {
    if (combo) {
      setEditingCombo(combo)
      setComboFormData({
        name: combo.name,
        price: combo.price.toString(),
        promotionalPrice: combo.promotionalPrice?.toString() || '',
        description: combo.description,
        available: combo.available,
        freeShipping: combo.freeShipping,
        highlighted: combo.highlighted,
        imageUrl: combo.imageUrl || '',
        comboProducts: combo.comboProducts?.join(', ') || '',
      })
    } else {
      setEditingCombo(null)
      setComboFormData({
        name: '',
        price: '',
        promotionalPrice: '',
        description: '',
        available: true,
        freeShipping: true,
        highlighted: false,
        imageUrl: '',
        comboProducts: '',
      })
    }
    setComboModalOpen(true)
  }

  const handleSaveProduct = () => {
    const newProduct: Product = {
      id: editingProduct?.id || `prod-${Date.now()}`,
      name: formData.name,
      price: parseFloat(formData.price) || 0,
      promotionalPrice: formData.promotionalPrice
        ? parseFloat(formData.promotionalPrice)
        : undefined,
      description: formData.description,
      available: formData.available,
      freeShipping: formData.freeShipping,
      highlighted: formData.highlighted,
      imageUrl: formData.imageUrl || undefined,
    }

    if (editingProduct) {
      setProducts((prev) => prev.map((p) => (p.id === editingProduct.id ? newProduct : p)))
    } else {
      setProducts((prev) => [...prev, newProduct])
    }
    setProductModalOpen(false)
  }

  const handleSaveCombo = () => {
    const newCombo: Product = {
      id: editingCombo?.id || `combo-${Date.now()}`,
      name: comboFormData.name,
      price: parseFloat(comboFormData.price) || 0,
      promotionalPrice: comboFormData.promotionalPrice
        ? parseFloat(comboFormData.promotionalPrice)
        : undefined,
      description: comboFormData.description,
      available: comboFormData.available,
      freeShipping: comboFormData.freeShipping,
      highlighted: comboFormData.highlighted,
      imageUrl: comboFormData.imageUrl || undefined,
      isCombo: true,
      comboProducts: comboFormData.comboProducts
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean),
    }

    if (editingCombo) {
      setCombos((prev) => prev.map((c) => (c.id === editingCombo.id ? newCombo : c)))
    } else {
      setCombos((prev) => [...prev, newCombo])
    }
    setComboModalOpen(false)
  }

  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const handleDeleteCombo = (id: string) => {
    setCombos((prev) => prev.filter((c) => c.id !== id))
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  // Filtered items based on filter selection
  const getFilteredItems = () => {
    if (filter === 'products') return products
    if (filter === 'combos') return combos
    return [...products, ...combos]
  }

  const filteredItems = getFilteredItems()

  return (
    <S.Content>
      <S.Header>
        <S.Title>Catálogo e Checkout</S.Title>
        <S.Subtitle>Gerencie seus produtos e configurações de pagamento</S.Subtitle>
      </S.Header>

      {/* Checkout Configuration Section */}
      <S.Container>
        <S.SectionHeader>
          <S.SectionTitle>
            <CreditCard size={20} />
            Configurações do Checkout
          </S.SectionTitle>
        </S.SectionHeader>

        <S.CheckoutGrid>
          <S.CheckoutCard>
            <S.CheckoutCardTitle>Ativar Checkout</S.CheckoutCardTitle>
            <S.ToggleGroup>
              <S.ToggleItem>
                <S.ToggleLabel>Checkout no Site</S.ToggleLabel>
                <S.Toggle
                  $active={checkoutSiteEnabled}
                  onClick={() => setCheckoutSiteEnabled(!checkoutSiteEnabled)}
                >
                  <S.ToggleThumb $active={checkoutSiteEnabled} />
                </S.Toggle>
              </S.ToggleItem>
              <S.ToggleItem>
                <S.ToggleLabel>Checkout no Atendimento</S.ToggleLabel>
                <S.Toggle
                  $active={checkoutAtendimentoEnabled}
                  onClick={() => setCheckoutAtendimentoEnabled(!checkoutAtendimentoEnabled)}
                >
                  <S.ToggleThumb $active={checkoutAtendimentoEnabled} />
                </S.Toggle>
              </S.ToggleItem>
            </S.ToggleGroup>
          </S.CheckoutCard>

          <S.CheckoutCard>
            <S.CheckoutCardTitle>Formas de Pagamento</S.CheckoutCardTitle>
            <S.PaymentOptions>
              <S.PaymentOption $active={pixEnabled} onClick={() => setPixEnabled(!pixEnabled)}>
                <QrCode size={24} />
                <span>PIX</span>
              </S.PaymentOption>
              <S.PaymentOption $active={cardEnabled} onClick={() => setCardEnabled(!cardEnabled)}>
                <CreditCard size={24} />
                <span>Cartão</span>
              </S.PaymentOption>
              <S.PaymentOption $active={cashEnabled} onClick={() => setCashEnabled(!cashEnabled)}>
                <Banknote size={24} />
                <span>Dinheiro</span>
              </S.PaymentOption>
            </S.PaymentOptions>
          </S.CheckoutCard>
        </S.CheckoutGrid>
      </S.Container>

      {/* Products and Combos Section */}
      <S.Container>
        <S.SectionHeader>
          <S.SectionTitle>
            <Package size={20} />
            Produtos e Combos
          </S.SectionTitle>
          <S.ButtonGroup>
            <S.AddButton onClick={() => openProductModal()}>
              <Plus size={18} />
              Adicionar Produto
            </S.AddButton>
            <S.AddButton onClick={() => openComboModal()}>
              <Plus size={18} />
              Adicionar Combo
            </S.AddButton>
          </S.ButtonGroup>
        </S.SectionHeader>

        <S.FilterContainer>
          <S.FilterButton $active={filter === 'all'} onClick={() => setFilter('all')}>
            Todos
          </S.FilterButton>
          <S.FilterButton $active={filter === 'products'} onClick={() => setFilter('products')}>
            Produtos
          </S.FilterButton>
          <S.FilterButton $active={filter === 'combos'} onClick={() => setFilter('combos')}>
            Combos
          </S.FilterButton>
        </S.FilterContainer>

        <S.ProductsGrid>
          {filteredItems.map((item) => (
            <S.ProductCard key={item.id} $isCombo={item.isCombo} $highlighted={item.highlighted}>
              {item.isCombo && <S.ComboTag>COMBO</S.ComboTag>}
              {item.highlighted && (
                <S.HighlightTag>
                  <Star size={12} />
                  DESTAQUE
                </S.HighlightTag>
              )}

              {item.imageUrl && <S.ProductImage src={item.imageUrl} alt={item.name} />}

              <S.ProductHeader>
                <S.ProductName>{item.name}</S.ProductName>
                <S.ProductActions>
                  <S.IconButton
                    $highlight
                    $active={item.highlighted}
                    onClick={() => handleToggleHighlighted(item.id, !!item.isCombo)}
                    title={item.highlighted ? 'Remover destaque' : 'Destacar'}
                  >
                    <Star size={16} />
                  </S.IconButton>
                  <S.IconButton
                    onClick={() => (item.isCombo ? openComboModal(item) : openProductModal(item))}
                  >
                    <Edit size={16} />
                  </S.IconButton>
                  <S.IconButton
                    $danger
                    onClick={() =>
                      item.isCombo ? handleDeleteCombo(item.id) : handleDeleteProduct(item.id)
                    }
                  >
                    <Trash2 size={16} />
                  </S.IconButton>
                </S.ProductActions>
              </S.ProductHeader>

              <S.ProductDescription>{item.description}</S.ProductDescription>

              {item.comboProducts && (
                <S.ComboProducts>
                  {item.comboProducts.map((prod, idx) => (
                    <S.ComboProductItem key={idx}>{prod}</S.ComboProductItem>
                  ))}
                </S.ComboProducts>
              )}

              <S.PriceContainer>
                {item.promotionalPrice ? (
                  <>
                    <S.OriginalPrice>{formatPrice(item.price)}</S.OriginalPrice>
                    <S.PromotionalPrice>{formatPrice(item.promotionalPrice)}</S.PromotionalPrice>
                  </>
                ) : (
                  <S.CurrentPrice>{formatPrice(item.price)}</S.CurrentPrice>
                )}
              </S.PriceContainer>

              <S.ProductToggles>
                <S.ToggleSwitchItem onClick={() => handleToggleAvailable(item.id, !!item.isCombo)}>
                  <S.MiniToggle $active={item.available}>
                    <S.MiniToggleThumb $active={item.available} />
                  </S.MiniToggle>
                  <S.ToggleSwitchLabel $active={item.available}>
                    {item.available ? 'Disponível' : 'Indisponível'}
                  </S.ToggleSwitchLabel>
                </S.ToggleSwitchItem>
                <S.ToggleSwitchItem
                  onClick={() => handleToggleFreeShipping(item.id, !!item.isCombo)}
                >
                  <S.MiniToggle $active={item.freeShipping} $variant="shipping">
                    <S.MiniToggleThumb $active={item.freeShipping} />
                  </S.MiniToggle>
                  <Truck size={14} />
                  <S.ToggleSwitchLabel $active={item.freeShipping} $variant="shipping">
                    {item.freeShipping ? 'Frete Grátis' : 'Com Frete'}
                  </S.ToggleSwitchLabel>
                </S.ToggleSwitchItem>
                <S.ToggleSwitchItem
                  onClick={() => handleToggleHighlighted(item.id, !!item.isCombo)}
                >
                  <S.MiniToggle $active={item.highlighted} $variant="highlight">
                    <S.MiniToggleThumb $active={item.highlighted} />
                  </S.MiniToggle>
                  <Star size={14} />
                  <S.ToggleSwitchLabel $active={item.highlighted} $variant="highlight">
                    Destaque
                  </S.ToggleSwitchLabel>
                </S.ToggleSwitchItem>
              </S.ProductToggles>
            </S.ProductCard>
          ))}
        </S.ProductsGrid>
      </S.Container>

      {/* Product Modal */}
      <BackDropModal isActive={productModalOpen} onClose={() => setProductModalOpen(false)}>
        <S.ContentModal>
          <S.TitleModal>{editingProduct ? 'Editar Produto' : 'Novo Produto'}</S.TitleModal>

          <S.ModalForm>
            <S.FormGroup>
              <S.FormLabel>Nome do Produto</S.FormLabel>
              <S.FormInput
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Camiseta Premium"
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.FormLabel>Foto do Produto (URL)</S.FormLabel>
              <S.ImageInputContainer>
                <ImageIcon size={18} />
                <S.FormInput
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </S.ImageInputContainer>
              {formData.imageUrl && <S.ImagePreview src={formData.imageUrl} alt="Preview" />}
            </S.FormGroup>

            <S.FormRow>
              <S.FormGroup>
                <S.FormLabel>Preço (R$)</S.FormLabel>
                <S.FormInput
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="0.00"
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.FormLabel>Preço Promocional (R$)</S.FormLabel>
                <S.FormInput
                  type="number"
                  value={formData.promotionalPrice}
                  onChange={(e) => setFormData({ ...formData, promotionalPrice: e.target.value })}
                  placeholder="0.00"
                />
              </S.FormGroup>
            </S.FormRow>
            <S.FormGroup>
              <S.FormLabel>Descrição</S.FormLabel>
              <S.FormTextarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descreva o produto..."
              />
            </S.FormGroup>
            <S.ModalToggleRow>
              <S.ModalToggleItem
                onClick={() => setFormData({ ...formData, available: !formData.available })}
              >
                <S.ModalToggle $active={formData.available}>
                  <S.ModalToggleThumb $active={formData.available} />
                </S.ModalToggle>
                <S.ModalToggleLabel>Disponível</S.ModalToggleLabel>
              </S.ModalToggleItem>
              <S.ModalToggleItem
                onClick={() => setFormData({ ...formData, freeShipping: !formData.freeShipping })}
              >
                <S.ModalToggle $active={formData.freeShipping} $variant="shipping">
                  <S.ModalToggleThumb $active={formData.freeShipping} />
                </S.ModalToggle>
                <Truck size={16} />
                <S.ModalToggleLabel>Frete Grátis</S.ModalToggleLabel>
              </S.ModalToggleItem>
              <S.ModalToggleItem
                onClick={() => setFormData({ ...formData, highlighted: !formData.highlighted })}
              >
                <S.ModalToggle $active={formData.highlighted} $variant="highlight">
                  <S.ModalToggleThumb $active={formData.highlighted} />
                </S.ModalToggle>
                <Star size={16} />
                <S.ModalToggleLabel>Destaque</S.ModalToggleLabel>
              </S.ModalToggleItem>
            </S.ModalToggleRow>
            <S.ModalActions>
              <S.CancelButton onClick={() => setProductModalOpen(false)}>Cancelar</S.CancelButton>
              <S.SaveButton onClick={handleSaveProduct}>
                {editingProduct ? 'Salvar Alterações' : 'Adicionar Produto'}
              </S.SaveButton>
            </S.ModalActions>
          </S.ModalForm>
        </S.ContentModal>
      </BackDropModal>

      {/* Combo Modal */}

      <BackDropModal isActive={comboModalOpen} onClose={() => setComboModalOpen(false)}>
        <S.ContentModal>
          <S.TitleModal>{editingCombo ? 'Editar Combo' : 'Novo Combo Promocional'}</S.TitleModal>

          <S.ModalForm>
            <S.FormGroup>
              <S.FormLabel>Nome do Combo</S.FormLabel>
              <S.FormInput
                value={comboFormData.name}
                onChange={(e) => setComboFormData({ ...comboFormData, name: e.target.value })}
                placeholder="Ex: Kit Verão Completo"
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.FormLabel>Foto do Combo (URL)</S.FormLabel>
              <S.ImageInputContainer>
                <ImageIcon size={18} />
                <S.FormInput
                  value={comboFormData.imageUrl}
                  onChange={(e) => setComboFormData({ ...comboFormData, imageUrl: e.target.value })}
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </S.ImageInputContainer>
              {comboFormData.imageUrl && (
                <S.ImagePreview src={comboFormData.imageUrl} alt="Preview" />
              )}
            </S.FormGroup>

            <S.FormGroup>
              <S.FormLabel>Produtos do Combo (separados por vírgula)</S.FormLabel>
              <S.FormInput
                value={comboFormData.comboProducts}
                onChange={(e) =>
                  setComboFormData({ ...comboFormData, comboProducts: e.target.value })
                }
                placeholder="Ex: Camiseta, Bermuda, Chinelo"
              />
            </S.FormGroup>
            <S.FormRow>
              <S.FormGroup>
                <S.FormLabel>Preço Original (R$)</S.FormLabel>
                <S.FormInput
                  type="number"
                  value={comboFormData.price}
                  onChange={(e) => setComboFormData({ ...comboFormData, price: e.target.value })}
                  placeholder="0.00"
                />
              </S.FormGroup>
              <S.FormGroup>
                <S.FormLabel>Preço Promocional (R$)</S.FormLabel>
                <S.FormInput
                  type="number"
                  value={comboFormData.promotionalPrice}
                  onChange={(e) =>
                    setComboFormData({ ...comboFormData, promotionalPrice: e.target.value })
                  }
                  placeholder="0.00"
                />
              </S.FormGroup>
            </S.FormRow>
            <S.FormGroup>
              <S.FormLabel>Descrição</S.FormLabel>
              <S.FormTextarea
                value={comboFormData.description}
                onChange={(e) =>
                  setComboFormData({ ...comboFormData, description: e.target.value })
                }
                placeholder="Descreva o combo..."
              />
            </S.FormGroup>
            <S.ModalToggleRow>
              <S.ModalToggleItem
                onClick={() =>
                  setComboFormData({ ...comboFormData, available: !comboFormData.available })
                }
              >
                <S.ModalToggle $active={comboFormData.available}>
                  <S.ModalToggleThumb $active={comboFormData.available} />
                </S.ModalToggle>
                <S.ModalToggleLabel>Disponível</S.ModalToggleLabel>
              </S.ModalToggleItem>
              <S.ModalToggleItem
                onClick={() =>
                  setComboFormData({
                    ...comboFormData,
                    freeShipping: !comboFormData.freeShipping,
                  })
                }
              >
                <S.ModalToggle $active={comboFormData.freeShipping} $variant="shipping">
                  <S.ModalToggleThumb $active={comboFormData.freeShipping} />
                </S.ModalToggle>
                <Truck size={16} />
                <S.ModalToggleLabel>Frete Grátis</S.ModalToggleLabel>
              </S.ModalToggleItem>
              <S.ModalToggleItem
                onClick={() =>
                  setComboFormData({ ...comboFormData, highlighted: !comboFormData.highlighted })
                }
              >
                <S.ModalToggle $active={comboFormData.highlighted} $variant="highlight">
                  <S.ModalToggleThumb $active={comboFormData.highlighted} />
                </S.ModalToggle>
                <Star size={16} />
                <S.ModalToggleLabel>Destaque</S.ModalToggleLabel>
              </S.ModalToggleItem>
            </S.ModalToggleRow>
            <S.ModalActions>
              <S.CancelButton onClick={() => setComboModalOpen(false)}>Cancelar</S.CancelButton>
              <S.SaveButton onClick={handleSaveCombo}>
                {editingCombo ? 'Salvar Alterações' : 'Criar Combo'}
              </S.SaveButton>
            </S.ModalActions>
          </S.ModalForm>
        </S.ContentModal>
      </BackDropModal>
    </S.Content>
  )
}

export default AdminCatalogo
