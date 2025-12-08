import alipayIcon from '@/assets/icons/alipay.svg';
import antomIcon from '@/assets/icons/antom.svg';
import flutterwaveIcon from '@/assets/icons/flutterwave.svg';
import safetypayIcon from '@/assets/icons/safetypay.svg';
import stripeIcon from '@/assets/icons/stripe.svg';
import visaIcon from '@/assets/icons/visa.svg';
import picturePng from '@/assets/images/picture5.png';
import LogoLoop, { type LogoItem } from '@/components/effect/LogoLoop';
import SplitText from '@/components/effect/SplitText';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const list: LogoItem[] = [
  { src: alipayIcon.src, alt: 'alipay' },
  { src: antomIcon.src, alt: 'antom' },
  { src: flutterwaveIcon.src, alt: 'flutterwave' },
  { src: safetypayIcon.src, alt: 'safetypay' },
  { src: stripeIcon.src, alt: 'stripe' },
  { src: visaIcon.src, alt: 'visa' },
];

const ScreenContent1 = () => {
  return (
    <div className="min-h-[868px] bg-[#0F34EE] pb-6 pt-20 text-center">
      <img
        {...picturePng}
        alt="picture"
        className="mx-auto mt-8 h-[500px] w-[798px] object-contain"
      />
      <div className="text-white">
        <SplitText className="text-[40px] font-bold" text="全球支付一体化账户" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
        >
          <p className="mb-4 mt-3 text-[20px]">
            借助全球领先的金融基础设施，助力业务增长。 在全球范围内实现即时收
            <br />
            款、兑换，并将资金支付至账户、银行卡和电子钱包。
          </p>
        </motion.div>
        <div className="flex items-center justify-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
          >
            <Button className="h-10 w-[124px] rounded-full font-bold">
              免费开户
              <ArrowUpRight />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
          >
            <Button variant="primary" className="h-10 w-[124px] rounded-full font-bold">
              联系销售
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="mt-12">
        <LogoLoop
          logos={list}
          speed={40}
          direction="left"
          logoWidth={194}
          logoHeight={64}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="transparent"
        />
      </div>
    </div>
  );
};

export default ScreenContent1;
