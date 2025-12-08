import picture1Png from '@/assets/images/picture1.png';
import picture4Png from '@/assets/images/picture4.png';

import MaxW from '@/components/common/MaxW';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

const CARD_COUNT = 4;
const IMAGE_PROGRESS_RANGE = 0.2; // 每张图占 0.2 的滚动进度

const list = [
  {
    date: '18,Nov,2025',
    title: 'FuturePay community events provide oppo...',
    image: picture1Png,
  },
  {
    date: '18,Nov,2025',
    title: 'FuturePay community events provide oppo...',
    image: picture1Png,
  },
  {
    date: '18,Nov,2025',
    title: 'FuturePay community events provide oppo...',
    image: picture4Png,
  },
];

const ScreenContent5 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 监听容器的滚动进度
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // 平滑滚动：在用户停止滚动时继续有一点惯性
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.5 });

  // 容器缩放与位移
  const containerScale = useTransform(smoothProgress, [0, 0.8], [0.5, 1]);
  const containerY = useTransform(smoothProgress, [0, 0.8], [100, 0]);

  // 标题动画
  const Title = () => {
    const scale = useTransform(smoothProgress, [0.2, 0.5], [3, 1]);
    const opacity = useTransform(smoothProgress, [0.2, 0.5], [0, 1]);
    const filter = useTransform(smoothProgress, [0.2, 0.5], ['blur(10px)', 'blur(0px)']);
    const color = useTransform(smoothProgress, [0.2, 0.5], ['#005DF5', '#FFFFFF']);

    return (
      <motion.div
        className="text-red text-[72px] font-bold"
        style={{ scale, opacity, filter, color }}
      >
        Connect with FuturePay <br /> builders
      </motion.div>
    );
  };

  // 内容区域动画
  const Content = () => {
    const opacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);
    const y = useTransform(smoothProgress, [0.8, 1], [100, 0]);

    return (
      <MaxW>
        <motion.div style={{ opacity, y }}>
          <div className="mt-8 text-2xl text-gray-400">
            FuturePay community events provide opportunities to connect,
            <br />
            network, and share ideas
          </div>
          <div className="mt-28 grid grid-cols-3 gap-6">
            {list.map((item, index) => (
              <motion.div
                key={index}
                className="group relative min-h-[250px] overflow-hidden rounded-[32px] border border-[#181D28] p-8 text-left text-white shadow-[0_20px_80px_-40px_rgba(0,0,0,0.6)] transition-colors"
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              >
                <img
                  {...item.image}
                  className="absolute left-0 top-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-[hsla(0,0%,0%,0.55)] px-4 py-2 text-base transition-colors group-hover:bg-black/70">
                      {item.date}
                    </span>
                  </div>
                  <div className="text-lg transition-transform duration-300 group-hover:translate-y-[-2px]">
                    {item.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </MaxW>
    );
  };

  // 背景大图视差
  const CardImage = ({ index }: { index: number }) => {
    const start = IMAGE_PROGRESS_RANGE * index;
    const end = IMAGE_PROGRESS_RANGE * (index + 1);

    const scale = useTransform(smoothProgress, [start, end], [0.8, 1]);
    const y = useTransform(smoothProgress, [start, end], ['100%', '0%']);

    return (
      <motion.div className="absolute left-0 top-0 h-full w-full" style={{ scale, y }}>
        <img {...picture1Png} alt="picture" className="size-full object-cover" />
      </motion.div>
    );
  };

  return (
    <div style={{ height: '300vh' }} ref={containerRef} className="relative">
      <div className="sticky top-20 h-[80vh] w-full overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-[32px]"
          style={{ scale: containerScale, y: containerY }}
        >
          {Array.from({ length: CARD_COUNT }).map((_, index) => (
            <CardImage index={index} key={index} />
          ))}
        </motion.div>
        <div className="absolute left-1/2 z-10 h-full w-full -translate-x-1/2 py-24 text-center text-white">
          <Title />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default ScreenContent5;
