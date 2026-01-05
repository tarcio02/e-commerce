import * as S from './styles';

interface MiniChartProps {
data: { day: string; value: number }[];
delay?: number;
}

export function MiniChart({ data, delay = 0 }: MiniChartProps) {
const maxValue = Math.max(...data.map(d => d.value));
const minValue = Math.min(...data.map(d => d.value));
const total = data.reduce((acc, d) => acc + d.value, 0);

// Calcular valores do eixo Y (5 marcações)
const yAxisSteps = 5;
const range = maxValue - minValue;
const stepValue = range / (yAxisSteps - 1);
const yAxisValues = Array.from({ length: yAxisSteps }, (_, i) => 
    Math.round(maxValue - (stepValue * i))
);

const formatValue = (value: number) => {
    if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
};

const getHeightPercent = (value: number) => {
    if (maxValue === minValue) return 50;
    return ((value - minValue) / (maxValue - minValue)) * 100;
};

return (
    <S.Container $delay={delay}>
    <S.Header>
        <S.Label>Vendas - Últimos 7 dias</S.Label>
        <S.Total>
        Total: <strong>R$ {total.toLocaleString('pt-BR')}</strong>
        </S.Total>
    </S.Header>
    
    <S.ChartContainer>
        <S.YAxis>
        {yAxisValues.map((value, index) => (
            <S.YAxisLabel key={index}>R$ {formatValue(value)}</S.YAxisLabel>
        ))}
        </S.YAxis>

        <S.ChartWrapper>
        <S.ChartArea>
            <S.GridLines>
            {yAxisValues.map((_, index) => (
                <S.GridLine key={index} />
            ))}
            </S.GridLines>
            
            <S.BarsContainer>
            {data.map((item, index) => (
                <S.BarWrapper key={item.day}>
                <S.Bar 
                    $height={getHeightPercent(item.value)}
                    $delay={delay + (index * 80)}
                />
                </S.BarWrapper>
            ))}
            </S.BarsContainer>
        </S.ChartArea>

        <S.XAxis>
            {data.map((item) => (
            <S.XAxisLabel key={item.day}>{item.day}</S.XAxisLabel>
            ))}
        </S.XAxis>
        </S.ChartWrapper>
    </S.ChartContainer>
    </S.Container>
);
}
