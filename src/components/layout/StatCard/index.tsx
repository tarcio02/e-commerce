import type { ReactNode } from "react";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import * as S from './styles';

interface StatCardProps {
title: string;
value: string;
comparison?: {
    value: number;
    label: string;
};
icon?: ReactNode;
delay?: number;
}

export function StatCard({ title, value, comparison, icon, delay = 0 }: StatCardProps) {
const getTrendIcon = () => {
    if (!comparison) return null;
    if (comparison.value > 0) return <ArrowUpRight size={14} />;
    if (comparison.value < 0) return <ArrowDownRight size={14} />;
    return <Minus size={14} />;
};

const getTrendVariant = (): 'positive' | 'negative' | 'neutral' => {
    if (!comparison) return 'neutral';
    if (comparison.value > 0) return 'positive';
    if (comparison.value < 0) return 'negative';
    return 'neutral';
};

return (
    <S.Container $delay={delay}>
    <S.Header>
        <S.Label>{title}</S.Label>
        {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
    </S.Header>
    
    <S.Value>{value}</S.Value>
    
    {comparison && (
        <S.ComparisonWrapper>
        <S.TrendBadge $variant={getTrendVariant()}>
            {getTrendIcon()}
            {Math.abs(comparison.value)}%
        </S.TrendBadge>
        <S.ComparisonLabel>{comparison.label}</S.ComparisonLabel>
        </S.ComparisonWrapper>
    )}
    </S.Container>
);
}
