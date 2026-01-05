import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import * as S from './styles';

type Status = "healthy" | "attention" | "critical";

interface BusinessStatusProps {
status: Status;
message: string;
delay?: number;
}

const statusConfig = {
healthy: {
    icon: CheckCircle2,
    label: "Saudável",
},
attention: {
    icon: AlertTriangle,
    label: "Atenção",
},
critical: {
    icon: XCircle,
    label: "Precisa Agir",
},
};

export function BusinessStatus({ status, message, delay = 0 }: BusinessStatusProps) {
const config = statusConfig[status];
const Icon = config.icon;

return (
    <S.Container $delay={delay}>
    <S.Label>Status do Negócio</S.Label>
    
    <S.StatusBox $status={status}>
        <S.StatusContent>
        <S.IconWrapper $status={status}>
            <Icon size={20} />
        </S.IconWrapper>
        <S.StatusTextWrapper>
            <S.StatusLabel>{config.label}</S.StatusLabel>
            <S.StatusMessage>{message}</S.StatusMessage>
        </S.StatusTextWrapper>
        </S.StatusContent>
    </S.StatusBox>
    </S.Container>
);
}