import React from 'react';

import dynamic from 'next/dynamic';
import { LineConfig } from '@ant-design/plots';

const Line = dynamic(() => import('@ant-design/plots').then(({ Line }) => Line), { ssr: false })


interface ChartProps {
    data: {
        x: string;
        y: number;
        category: string;
    }[];
}

interface ChartProps {
    data: {
        x: string;
        y: number;
        category: string;
    }[];
}

const MultiLineChart: React.FC<ChartProps> = ({ data }) => {
    const config: LineConfig = {
        data,
        height: 400,
        xField: 'x',
        yField: 'y',
        seriesField: 'category',
        // smooth: true,
        legend: {
            position: 'top-left',
        },
    };

    return <Line {...config} />;
};
export default MultiLineChart;
