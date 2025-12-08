import solutionPng from '@/assets/images/solution.png';
import MaxW from '@/components/common/MaxW';
import GradientText from '@/components/effect/GradientText';
import { motion } from 'motion/react';

const ScreenContent3 = () => {
  const list = [
    {
      title: '嵌入式金融',
      description: '全球范围内安全且顺利地转移资金实时支持许可金融机构的解决方案',
    },
    {
      title: '数字娱乐',
      description: '全球范围内安全且顺利地转移资金实时支持许可金融机构的解决方案',
    },
    {
      title: '全球收单',
      description: '全球范围内安全且顺利地转移资金实时支持许可金融机构的解决方案',
    },
    {
      title: '薪酬发放',
      description: '全球范围内安全且顺利地转移资金实时支持许可金融机构的解决方案',
    },
  ];
  return (
    <div className="bg-[#FFFFFF] py-20 text-background">
      <MaxW className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          <GradientText className="text-[40px] font-bold">深度整合的行业解决方案</GradientText>
        </motion.div>
        <div className="mt-14 flex items-center justify-between gap-20 overflow-hidden rounded-[32px] bg-gradient-to-b from-[#071E3B] to-[#030E1C] py-2 pl-20">
          <div className="grid grid-cols-2 gap-10">
            {list.map((item, index) => {
              const fromLeft = index % 2 === 0;
              const group = Math.floor(index / 2);
              const baseDuration = 0.36;
              const groupGap = 0.12; // 两组之间的间隔
              const delay = group * (baseDuration + groupGap) + (fromLeft ? 0 : 0.06);
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: baseDuration, ease: 'easeOut', delay }}
                  viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="shrink-0"
            initial={{ scale: 0, rotate: 90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img {...solutionPng} alt="solution" className="size-[500px]" />
          </motion.div>
        </div>
      </MaxW>
    </div>
  );
};

export default ScreenContent3;
