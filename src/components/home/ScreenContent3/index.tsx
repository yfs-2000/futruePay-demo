import solutionPng from '@/assets/images/solution.png';
import MaxW from '@/components/common/MaxW';
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
      <MaxW>
        <div className="mt-14 flex items-center justify-between gap-20 rounded-[32px] bg-gradient-to-b from-[#071E3B] to-[#030E1C] py-2 pl-20">
          <div className="grid grid-cols-2 gap-10">
            {list.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm">{item.description}</p>
              </div>
            ))}
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
