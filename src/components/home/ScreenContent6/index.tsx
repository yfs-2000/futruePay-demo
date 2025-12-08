import IdentificationPng from '@/assets/images/identification.png';
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

const ScreenContent6 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 监听容器的滚动进度
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'], // 当容器从顶部开始离开视口时触发
  });

  // 调整 spring 参数，降低抖动；同时限制模糊范围，提升性能
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.45,
  });

  // 根据滚动进度转换各种属性
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.8]); // 缩小到 80%
  const y = useTransform(smoothProgress, [0, 1], [0, 300]); // 向下移动 300px
  const filter = useTransform(smoothProgress, [0, 1], ['blur(0px)', 'blur(6px)']); // 降低滤镜开销

  return (
    <div className="pt-44">
      <motion.div ref={containerRef} style={{ scale, y, filter }}>
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          >
            <img {...IdentificationPng} alt="identification" className="inline-block w-[120px]" />
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
      <div className="p-2">
        <div className="relative left-0 top-0 min-h-[660px] w-full overflow-hidden rounded-[32px]">
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
      </div>
    </div>
  );
};

export default ScreenContent6;
