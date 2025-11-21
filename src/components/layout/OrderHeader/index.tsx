import { Header, Container, Title } from "./styles";

interface OrderHeaderProps {
  title: string;
}

export const OrderHeader = ({ title }: OrderHeaderProps) => {
  return (
    <Header>
      <Container>
        <Title>{title}</Title>
      </Container>
    </Header>
  );
};
