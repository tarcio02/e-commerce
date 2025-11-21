import styled from "styled-components";

// Card: "rounded-lg border bg-card text-card-foreground shadow-sm"
export const Card = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #E6E6E6;
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
`;

// CardHeader: "flex flex-col space-y-1.5 p-6"
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem; /* space-y-1.5 */
  padding: 1.5rem; /* p-6 */
`;

// CardTitle: "text-2xl font-semibold leading-none tracking-tight"
export const CardTitle = styled.h3`
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600; /* font-semibold */
  line-height: 1; /* leading-none */
  letter-spacing: -0.025em; /* tracking-tight */
`;

// CardDescription: "text-sm text-muted-foreground"
export const CardDescription = styled.p`
  font-size: 0.875rem; /* text-sm */
  line-height: 1.25rem;
  color: hsl(var(--muted-foreground));
`;

// CardContent: "p-6 pt-0"
export const CardContent = styled.div`
  padding: 1.5rem;
  padding-top: 0;
`;

// CardFooter: "flex items-center p-6 pt-0"
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-top: 0;
`;