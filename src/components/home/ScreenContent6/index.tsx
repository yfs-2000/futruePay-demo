import IdentificationPng from '@/assets/images/identification.png';
import picturePng from '@/assets/images/picture2.png';
import GradientText from '@/components/effect/GradientText';
import LogoLoop from '@/components/effect/LogoLoop';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

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
      <motion.div ref={containerRef} style={{ scale, y, filter, willChange: 'transform, filter' }}>
        <div className="text-center">
          <img {...IdentificationPng} alt="identification" className="inline-block w-[120px]" />
          <GradientText className="my-6 text-[40px] font-bold">现在,即刻加入我们</GradientText>
          <div className="flex items-center justify-center gap-4">
            <input
              defaultValue="Example@.com"
              className="h-14 w-[300px] rounded-full border px-6 py-5"
            />
            <div className="flex size-14 cursor-pointer items-center justify-center rounded-full bg-blue-600 p-2 hover:bg-blue-700">
              <ArrowRight className="text-white" />
            </div>
          </div>
        </div>
        <LogoLoop
          className="mt-[100px]"
          logos={Array.from({ length: 10 })}
          speed={80}
          logoHeight={48}
          gap={40}
          hoverSpeed={20}
          fadeOut
          renderItem={() => (
            <div className="size-[344px]">
              <img {...picturePng} className="size-full object-contain" />
            </div>
          )}
        />
      </motion.div>
    </div>
  );
};

export default ScreenContent6;
