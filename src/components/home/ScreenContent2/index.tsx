import MaxW from '@/components/common/MaxW';
import GradientText from '@/components/effect/GradientText';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';

const slidesData = [
  {
    title: '多币种账户',
    description: '所有资产类别的一战式平台',
    image: 'https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
  },
  {
    title: '多币种账户',
    description: '所有资产类别的一战式平台',
    image: 'https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
  },
  {
    title: '多币种账户',
    description: '所有资产类别的一战式平台',
    image: 'https://image.tmdb.org/t/p/w500/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
  },
  {
    title: '多币种账户',
    description: '所有资产类别的一战式平台',
    image: 'https://image.tmdb.org/t/p/w500/iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg',
  },
  {
    title: '多币种账户',
    description: '所有资产类别的一战式平台',
    image: 'https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
  },
];

export default function ScreenContent2() {
  return (
    <div className="bg-[#F7F8FD] py-20 text-center">
      <MaxW>
        <GradientText className="text-[40px] font-bold">探索我们的支付产品</GradientText>
        <div className="mb-16 mt-8 text-xl text-gray-500">
          1,000多种支付方式：数字钱包、移动支付、现金、银行卡，以及横跨非
          <br />
          洲到亚太、拉美到欧盟的银行转账。
        </div>
        <div className="relative mx-auto flex max-w-[1000px]">
          <Swiper
            modules={[EffectCoverflow, Keyboard, Navigation]}
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
                <div className="h-full w-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="bg-linear-to-t absolute bottom-0 left-0 right-0 translate-y-4 from-black/90 to-transparent p-6 text-left text-white transition-transform duration-300 group-hover:translate-y-0">
                    <h2 className="mb-2 text-4xl font-bold">{slide.title}</h2>
                    <p className="line-clamp-3 text-sm">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="screen2-prev absolute left-[-84px] top-1/2 z-20 grid size-[56px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#C7CEDB] bg-white text-black backdrop-blur transition hover:bg-black hover:text-white">
            <ArrowLeft className="h-6 w-6 shrink-0" />
          </div>
          <div className="screen2-next absolute right-[-84px] top-1/2 z-20 grid size-[56px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-[#C7CEDB] bg-white text-black backdrop-blur transition hover:bg-black hover:text-white">
            <ArrowRight className="h-6 w-6 shrink-0" />
          </div>
        </div>
      </MaxW>
    </div>
  );
}
