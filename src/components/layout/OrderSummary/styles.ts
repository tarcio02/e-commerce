import styled from "styled-components";
import { Label } from "../../ui/Label";

export const LabelWrapper = styled(Label)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const CouponApplied = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: hsl(var(--accent) / 0.1);
  border-radius: 0.375rem;
`;

export const CouponCode = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const CouponInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PricingRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const PricingLabel = styled.span`
  color: hsl(var(--muted-foreground));
`;

export const PricingValue = styled.span``;

export const DiscountRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: hsl(var(--accent));
  margin-bottom: 0.5rem;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.125rem;
  margin-top: 0.5rem;
`;
