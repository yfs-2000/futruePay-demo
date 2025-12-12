import MaxW from '@/components/common/MaxW';
import GradientText from '@/components/effect/GradientText';
import { useScroll } from 'motion/react';
import { useRef } from 'react';
import { Card } from './Card';

const projects = [
  {
    title: '多币种账户',
    description: '提供跨境、本地等多样化收单方式，支持API、收银台等多场景对接模式。',
    features: ['海量支付方式', '快速对接集成', '极致交易优化'],
    color: '#BBACAF',
  },
  {
    title: '全球收单',
    description: '一站式接入全球主流支付方式，提升支付成功率，保障资金安全。',
    features: ['本地化支付习惯', '智能路由系统', '实时风险监控'],
    color: '#977F6D',
  },
  {
    title: '企业发卡',
    description: '灵活创建虚拟卡和实体卡，轻松管理企业支出，实时掌控每一笔交易。',
    features: ['多币种卡段', '实时交易管控', '自动化对账'],
    color: '#C2491D',
  },
];

export default function StackingCards() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start center', 'end end'],
  });

  return (
    <div className="bg-[#F7F8FD] py-20">
      <MaxW>
        <div className="sticky top-[100px] z-10 mb-20 bg-[#F7F8FD] pt-10 text-center">
          <GradientText className="text-[40px] font-bold">探索我们的支付产品</GradientText>
          <div className="mb-8 mt-8 flex justify-center text-xl text-gray-500">
            1,000多种支付方式：数字钱包、移动支付、现金、银行卡，以及横跨非洲到亚太、拉美到欧盟的银行转账。
          </div>
        </div>

        <div ref={container} className="relative z-20">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </MaxW>
    </div>
  );
}
