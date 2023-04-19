import { Card } from 'antd';
import dynamic from 'next/dynamic';


const Pie = dynamic(() => import('@ant-design/plots').then(({ Pie }) => Pie), { ssr: false })

interface DonutChartProps {
    data: { type: string; value: number }[];
}

const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
    const config = {
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
            type: 'inner',
            offset: '-30%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
    };

    return (
        <Card>
            <Pie {...config} />
        </Card>
    );
};

export default DonutChart;
