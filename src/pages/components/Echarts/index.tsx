import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Echarts: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const myChart = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // 初始化 echarts 实例
      myChart.current = echarts.init(chartRef.current);
      
      // 配置图表选项
      const option = {
        title: {
          text: '用户访问量统计'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['访问量', '注册量', '订单量', '支付量']
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '访问量',
            type: 'line',
            data: [120, 200, 150, 80, 70, 110, 130],
            smooth: true
          },
          {
            name: '注册量',
            type: 'line',
            data: [60, 80, 90, 40, 50, 70, 80],
            smooth: true
          },
          {
            name: '订单量',
            type: 'line',
            data: [30, 50, 70, 35, 40, 60, 70],
            smooth: true
          },
          {
            name: '支付量',
            type: 'line',
            data: [25, 45, 60, 30, 35, 55, 65],
            smooth: true
          }
        ]
      };

      // 设置图表选项
      myChart.current.setOption(option);

      // 响应窗口大小变化
      const handleResize = () => {
        if (myChart.current) {
          myChart.current.resize();
        }
      };

      window.addEventListener('resize', handleResize);

      // 清理函数
      return () => {
        window.removeEventListener('resize', handleResize);
        if (myChart.current) {
          myChart.current.dispose();
        }
      };
    }
  }, []);

  return (
    <div 
      ref={chartRef} 
      style={{ width: '85%', height: '400px', marginTop: '100px' }}
    >
    </div>
  );
};

export default Echarts;