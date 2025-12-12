import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Wallet } from 'lucide-react';
import { motion, useTransform, type MotionValue } from 'motion/react';

interface CardProps {
  i: number;
  title: string;
  description: string;
  features: string[];
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  features,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-[calc(50vh-300px)] flex h-[600px] items-center justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(${i * 25}px)`,
        }}
        className="relative flex h-[600px] w-full max-w-[1440px] origin-top flex-col overflow-hidden rounded-[32px] border border-[#E7E7E7] bg-white p-12 shadow-xl md:flex-row"
      >
        {/* Left Content */}
        <div className="z-10 flex flex-1 flex-col justify-between pr-8">
          <div className="flex flex-col gap-6">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-blue-50">
              <Wallet className="size-8 text-[#005DF5]" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#00112c]">{title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">{description}</p>
            </div>

            <div className="mt-4 flex items-center gap-6">
              <div className="h-[100px] w-[2px] rounded-full bg-gray-100"></div>
              <div className="flex flex-col gap-4">
                {features.map((feature, idx) => (
                  <p key={idx} className="text-base font-medium text-gray-600">
                    {feature}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <Button
            className="w-fit rounded-full px-8 py-6 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105"
            style={{
              background:
                'linear-gradient(90deg, rgb(0, 93, 245) 0%, rgb(0, 93, 245) 100%), linear-gradient(127.079deg, rgb(0, 93, 245) 23.29%, rgb(51, 221, 255) 102.5%)',
            }}
          >
            了解更多
            <div className="ml-2 flex size-5 items-center justify-center rounded-full bg-white/20">
              <ArrowRight className="size-3" />
            </div>
          </Button>
        </div>

        {/* Right Content - Visuals */}
        <div className="relative h-full w-[600px] shrink-0">
          {/* Background Card */}
          <div className="absolute right-0 top-8 h-[400px] w-full rounded-2xl bg-[#F7F9FB] p-8">
            <div className="absolute left-12 top-12">
              <p className="text-sm text-gray-400">成功交易金额</p>
              <p className="mt-1 text-2xl font-extrabold text-black">98,050.00 USD</p>

              {/* Fake Chart Lines */}
              <div className="mt-8 space-y-8">
                <div className="h-px w-64 bg-gray-200"></div>
                <div className="h-px w-64 bg-gray-200"></div>
                <div className="h-px w-64 bg-gray-200"></div>
                <div className="h-px w-64 bg-gray-200"></div>
              </div>

              {/* Fake Chart Bars */}
              <div className="absolute left-0 top-32 flex h-[180px] items-end gap-6">
                <div className="h-20 w-8 rounded-t-lg bg-gray-200"></div>
                <div className="h-32 w-8 rounded-t-lg bg-gray-200"></div>
                <div className="h-44 w-8 rounded-t-lg bg-gray-200"></div>
                <div className="h-52 w-8 rounded-t-lg bg-[#005DF5] shadow-lg shadow-blue-500/20"></div>
              </div>
            </div>
          </div>

          {/* Floating Phone UI */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -left-4 top-20 w-[240px] overflow-hidden rounded-[24px] border-[6px] border-black bg-white shadow-2xl"
          >
            {/* Phone Header */}
            <div className="flex h-6 w-full items-center justify-between px-4 pt-1">
              <div className="text-[10px] font-bold">9:41</div>
              <div className="flex gap-1">
                <div className="h-3 w-3 rounded-full bg-black opacity-20"></div>
              </div>
            </div>

            {/* Phone Content */}
            <div className="flex flex-col items-center p-4">
              <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-green-100">
                <ShieldCheck className="size-6 text-green-600" />
              </div>
              <div className="mb-6 text-center">
                <p className="text-xs text-gray-400">Payment Successful</p>
                <p className="text-xl font-bold">USD 80.00</p>
              </div>

              <div className="w-full space-y-2 rounded-lg bg-gray-50 p-3">
                <div className="flex justify-between text-[10px]">
                  <span className="text-gray-500">Item</span>
                  <span className="font-bold">100 Coins</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-gray-500">Transaction ID</span>
                  <span className="font-bold">TOKEN...3205</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-gray-500">Method</span>
                  <span className="font-bold">DANA</span>
                </div>
              </div>
            </div>

            {/* Bottom Home Indicator */}
            <div className="mx-auto mb-2 mt-4 h-1 w-20 rounded-full bg-black opacity-20"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
