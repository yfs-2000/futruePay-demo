import picturePng from '@/assets/images/picture3.png';
import MaxW from '@/components/common/MaxW';
import GradientText from '@/components/effect/GradientText';
import { ArrowLeft, ArrowRight, Database } from 'lucide-react';
import { motion } from 'motion/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

const slidesData = [
  {
    title: '多币种账户',
    description: '所有资产类别的一战式平台',
    image: picturePng,
  },
  {
    title: '多币种账户',
    description: '所有资产类别的一战式平台',
    image: picturePng,
  },
  {
    title: '多币种账户',
    description: '所有资产类别的一战式平台',
    image: picturePng,
  },
  {
    title: '多币种账户',
    description: '所有资产类别的一战式平台',
    image: picturePng,
  },
  {
    title: '多币种账户',
    description: '所有资产类别的一战式平台',
    image: picturePng,
  },
];

export default function ScreenContent2() {
  return (
    <div className="bg-[#F7F8FD] py-20 text-center">
      <MaxW>
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
        >
          <GradientText className="text-[40px] font-bold">探索我们的支付产品</GradientText>
          <div className="mb-16 mt-8 flex justify-center text-xl text-gray-500">
            1,000多种支付方式：数字钱包、移动支付、现金、银行卡，以及横跨非洲到亚太、拉美到欧盟的银行转账。
          </div>
        </motion.div>
        <div className="relative mx-auto flex max-w-[1000px]">
          <Swiper
            modules={[EffectCoverflow, Autoplay, Keyboard, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            speed={600}
            mousewheel={{
              thresholdDelta: 50,
              sensitivity: 1,
            }}
            keyboard={{
              enabled: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.screen2-next',
              prevEl: '.screen2-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index} className="group relative overflow-hidden rounded-2xl">
                <div className="h-full w-full p-8">
                  <img
                    {...slide.image}
                    alt={slide.title}
                    className="absolute left-0 top-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="relative z-10 flex h-full flex-col justify-between text-left">
                    <div className="inline-flex size-12 items-center justify-center rounded-full bg-[#005DF5]">
                      <Database className="size-6 text-white" />
                    </div>
                    <div className="bg-linear-to-t translate-y-0 from-black/90 to-transparent text-[#005DF5] transition-transform duration-300 group-hover:-translate-y-4">
                      <h2 className="mb-6 text-3xl font-bold">{slide.title}</h2>
                      <p className="line-clamp-3 text-sm">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="screen2-prev group absolute left-[-84px] top-1/2 z-20 grid size-[56px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#C7CEDB] bg-white text-black backdrop-blur transition hover:bg-black hover:text-white">
            <ArrowLeft className="h-6 w-6 shrink-0 group-hover:scale-110" />
          </div>
          <div className="screen2-next group absolute right-[-84px] top-1/2 z-20 grid size-[56px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#C7CEDB] bg-white text-black backdrop-blur transition hover:bg-black hover:text-white">
            <ArrowRight className="h-6 w-6 shrink-0 group-hover:scale-110" />
          </div>
        </div>
      </MaxW>
    </div>
  );
}
