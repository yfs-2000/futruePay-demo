import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function Test() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 监听容器的滚动进度
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"] // 当容器从顶部开始离开视口时触发
  });

  // 根据滚动进度转换各种属性
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]); // 缩小到 80%
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]); // 向下移动 300px
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"] // 模糊度从 0 到 10px
  );
  


  return (
    <div className="bg-white">
       
      {/* 滚动时离开视口这个组件需要模糊 并且向下  缩小一点 */}
      <motion.div
        ref={containerRef}
        style={{
          scale,
          y,
          filter,
        }}
      >
        <div className="flex gap-4 pt-20 overflow-x-auto px-4 py-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Card 1 */}
          <div className="h-[400px] min-w-[320px] shrink-0 flex flex-col justify-between rounded-[30px] bg-[#FF2E56] p-8 text-white">
            <div className="text-6xl font-bold">700k+</div>
            <div className="space-y-6">
              <p className="text-2xl font-medium">in the Discord server</p>
              <button className="w-full rounded-full bg-white/20 py-4 text-lg font-semibold backdrop-blur-sm transition hover:bg-white/30">
                Join our Discord server
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-[400px] min-w-[320px] shrink-0 overflow-hidden rounded-[30px] bg-indigo-600 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            {/* Placeholder for image content */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="text-3xl font-bold">Community</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="h-[400px] min-w-[320px] shrink-0 flex flex-col rounded-[30px] bg-[#0A1128] p-8 text-white relative overflow-hidden">
            <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 translate-x-1/4 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="text-[#4D8AFF] text-6xl font-bold mb-auto">$5M+</div>
            {/* Chart simplified */}
            <div className="h-32 w-full flex items-end gap-2 opacity-50">
                 <div className="w-full bg-blue-500 h-[20%] rounded-t"></div>
                 <div className="w-full bg-blue-500 h-[40%] rounded-t"></div>
                 <div className="w-full bg-blue-500 h-[60%] rounded-t"></div>
                 <div className="w-full bg-blue-500 h-[80%] rounded-t"></div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="h-[400px] min-w-[320px] shrink-0 flex flex-col justify-end rounded-[30px] bg-[#FF6B2C] p-8 text-white">
            <div className="text-6xl font-bold mb-2">80+</div>
          </div>
            {/* Card 4 */}
            <div className="h-[400px] min-w-[320px] shrink-0 flex flex-col justify-end rounded-[30px] bg-[#FF6B2C] p-8 text-white">
            <div className="text-6xl font-bold mb-2">80+</div>
          </div>
            {/* Card 4 */}
            <div className="h-[400px] min-w-[320px] shrink-0 flex flex-col justify-end rounded-[30px] bg-[#FF6B2C] p-8 text-white">
            <div className="text-6xl font-bold mb-2">80+</div>
          </div>
            {/* Card 4 */}
            <div className="h-[400px] min-w-[320px] shrink-0 flex flex-col justify-end rounded-[30px] bg-[#FF6B2C] p-8 text-white">
            <div className="text-6xl font-bold mb-2">80+</div>
          </div>
        </div>
      </motion.div>

     {/* 尾部组合 */}
      <div className="flex    relative z-10 justify-between items-center bg-blue-500 h-[3000px]">
        
      </div>
    </div>
  );
}

export default Test;