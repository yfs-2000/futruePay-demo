import picturePng from '@/assets/images/picture2.png';
import bgPng from '@/assets/images/picture6.png';
import GradientText from '@/components/effect/GradientText';
import LogoLoop, { type LogoItem } from '@/components/effect/LogoLoop';
import SplitText from '@/components/effect/SplitText';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

const list: LogoItem[] = [
  { src: picturePng.src },
  { src: picturePng.src },
  { src: picturePng.src },
  { src: picturePng.src },
];

const currencyGroups = [
  ['$', '€', '£', '¥', 'A$', 'C$', '₣', '₹', '₩', '฿', '₽', '₺'],
  ['₣', '₹', '₩', '฿', '₽', '₺', '$', '€', '£', '¥', 'A$', 'C$'],
  ['₴', '₦', '₱', '₫', '₡', '₭', '₴', '₦', '₱', '₫', '₡', '₡'],
];

const TickerColumn = ({
  length,
  items,
  delay = 0,
}: {
  length: number;
  items: string[];
  delay?: number;
}) => (
  <motion.div
    initial={{ y: '0px' }} // 初始可见
    animate={{ y: ['0px', `-${36 * (length - 1)}px`] }} // 先上移，再反向往复 32->间隙加上元素高度
    className="flex flex-col gap-3"
    transition={{
      duration: 1,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse', // 动画结束后反向播放，不再跳回起点
      repeatDelay: 4, // 每轮结束后暂停 2s 再继续
      delay,
    }}
  >
    {[...items, ...items].map((item, idx) => (
      <div
        key={`${item}-${idx}`}
        className="flex size-6 items-center justify-center rounded-full bg-[#005DF5] text-sm text-white"
      >
        {item}
      </div>
    ))}
  </motion.div>
);

const ScreenContent6 = () => {
  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);

  // 监听容器的滚动进度
  const { scrollYProgress } = useScroll({
    target: container1Ref,
    offset: ['start start', 'end start'], // 当容器从顶部开始离开视口时触发
  });

  // 监听容器的滚动进度
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2Ref,
    offset: ['start start', 'end start'], // 当容器从顶部开始离开视口时触发
  });

  // 调整 spring 参数，降低抖动；同时限制模糊范围，提升性能
  const smoothProgress1 = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.45,
  });

  const smoothProgress2 = useSpring(scrollYProgress2, {
    stiffness: 140,
    damping: 24,
    mass: 0.45,
  });

  // 根据滚动进度转换各种属性
  const scale1 = useTransform(smoothProgress1, [0, 1], [1, 0.8]);
  const y1 = useTransform(smoothProgress1, [0, 1], [0, 300]);
  const filter1 = useTransform(smoothProgress1, [0, 1], ['blur(0px)', 'blur(6px)']);

  const y2 = useTransform(smoothProgress2, [0, 1], [0, 400]);
  const scale2 = useTransform(smoothProgress2, [0, 1], [1, 0.8]);
  const filter2 = useTransform(smoothProgress2, [0, 0.1], ['blur(0px)', 'blur(2px)']);

  return (
    <div className="pt-44">
      <motion.div ref={container1Ref} style={{ scale: scale1, y: y1, filter: filter1 }}>
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          >
            <div className="mx-auto mt-6 grid h-9 w-32 rounded-full border border-[#005DF5] px-3 py-1">
              <div className="grid grid-cols-3 gap-3 overflow-hidden">
                {currencyGroups.map((group, idx) => (
                  <TickerColumn length={group.length} key={idx} items={group} delay={idx * 0.2} />
                ))}
              </div>
            </div>
            <GradientText className="my-6 text-[40px] font-bold">现在,即刻加入我们</GradientText>
          </motion.div>
          <div className="flex items-center justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            >
              <input
                defaultValue="Example@.com"
                className="h-14 w-[300px] rounded-full border px-6 py-5"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            >
              <div className="flex size-14 cursor-pointer items-center justify-center rounded-full bg-blue-600 p-2 hover:bg-blue-700">
                <ArrowRight className="text-white" />
              </div>
            </motion.div>
          </div>
        </div>
        <LogoLoop
          logos={list}
          speed={120}
          direction="left"
          logoWidth={334}
          logoHeight={334}
          gap={40}
          hoverSpeed={0}
          scaleOnHover={true}
          fadeOut
          fadeOutColor="transparent"
        />
      </motion.div>
      <motion.div
        ref={container2Ref}
        style={{ filter: filter2, scale: scale2, y: y2 }}
        className="p-2"
        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      >
        <div className="relative left-0 top-0 min-h-[720px] w-full overflow-hidden rounded-[32px]">
          <img {...bgPng} alt="bg" className="absolute left-0 top-0 size-full object-cover" />
          <div className="absolute left-1/2 top-1/2 flex h-[314px] w-full max-w-[1048px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-[hsla(0,0%,100%,0.2)] bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.25)] backdrop-blur-[18px]">
            <div>
              <div className="text-center text-[#005DF5]">
                <SplitText className="text-[40px] font-bold" text="开启全球领先的支付体验" />
                <p className="mb-4 mt-3 text-base font-medium">
                  选择 FuturePay ，一站式轻松管理全球资金
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                >
                  <input
                    defaultValue="Example@.com"
                    className="h-14 w-[300px] rounded-full border px-6 py-5"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                >
                  <div className="flex size-14 cursor-pointer items-center justify-center rounded-full bg-blue-600 p-2 hover:bg-blue-700">
                    <ArrowRight className="text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ScreenContent6;
