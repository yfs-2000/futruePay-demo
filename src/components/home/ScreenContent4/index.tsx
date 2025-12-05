import resourcePng from '@/assets/images/resource.png';
import MaxW from '@/components/common/MaxW';
import MagicBento, { type BentoCardProps } from '@/components/effect/MagicBento';
import { cn } from '@/lib/utils';

const ScreenContent4 = () => {
  const list: BentoCardProps[] = [
    {
      color: '#3251EF',
      title: '产品文档',
      description: '了解更多产品信息，浏览FuturePay可为您提供的全方位服务。',
      image: resourcePng,
      className: 'col-span-2',
    },
    {
      color: '#3251EF',
      title: 'API文档',
      description: '了解更多产品信息，浏览FuturePay可为您提供的全方位服务。',
    },
    {
      color: '#3251EF',
      title: '知识中心',
      description: '了解更多产品信息，浏览FuturePay可为您提供的全方位服务。',
    },
  ];
  return (
    <div className="bg-[#0F34EE] py-20 text-center text-background">
      <MaxW>
        <div className="mb-4 text-xl">资源</div>
        <div className="mb-14 text-[40px] font-bold">在这里,找到解决之道</div>
        <div className="mx-auto max-w-[1000px]">
          <MagicBento
            glowColor="100, 137, 207"
            spotlightRadius={50}
            wrapperClassName="grid grid-cols-2 gap-2"
            cardData={list}
            renderItem={(item) => (
              <div
                key={item.title}
                className={cn('flex min-h-[270px] overflow-hidden text-left', item.className)}
              >
                {item.image && (
                  <img
                    {...item.image}
                    alt={item.title}
                    className="h-full w-[316px] shrink-0 object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <h3 className="text-[28px] font-bold">{item.title}</h3>
                    <p className="mt-4 text-base">{item.description}</p>
                  </div>
                  <a className="text-base underline">阅读全文</a>
                </div>
              </div>
            )}
          />
        </div>
      </MaxW>
    </div>
  );
};

export default ScreenContent4;
