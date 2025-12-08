import logoDarkPng from '@/assets/logo_dark.png';
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import MaxW from '../common/MaxW';

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const columns = [
    {
      title: '产品',
      links: ['线上收单', '全球收款', '全球支付', '全球账户'],
    },
    {
      title: '解决方案',
      links: ['电子商务', '本地支付', 'Pay by Link'],
    },
    {
      title: '定价方案',
      links: ['全球收单', '全球账户'],
    },
    {
      title: 'API参考',
      links: ['API参考'],
    },
    {
      title: '关于我们',
      links: ['全球支付与收单合作', '联系我们'],
    },
  ];

  const legalLinks = ['服务条款', '隐私政策', '数据保护政策', 'Cookie政策'];

  return (
    <footer className="p-2">
      <div className="relative z-10 overflow-hidden rounded-[32px] bg-[#e8f2ff] px-10 py-20 text-[#14233d]">
        <MaxW>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-3 xl:grid-cols-6"
          >
            {columns.map((col) => (
              <motion.div key={col.title} variants={item} className="space-y-3 text-left">
                <h4 className="text-base font-semibold text-[#0c1a33]">{col.title}</h4>
                <ul className="space-y-2 text-sm text-[#4a5668]">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a className="transition-colors hover:text-[#0f5af2]" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div variants={item} className="space-y-4 text-left">
              <h4 className="text-base font-semibold text-[#0c1a33]">联系我们</h4>
              <div className="text-sm text-[#4a5668]">support@futurebank.global</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2 text-center text-xs text-[#4a5668]">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=FuturePay-Official"
                    alt="微信公众号"
                    className="mx-auto h-24 w-24 rounded-md border border-[#c7d4eb] bg-white p-1"
                  />
                  <div>关注微信公众号</div>
                </div>
                <div className="space-y-2 text-center text-xs text-[#4a5668]">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=FuturePay-Program"
                    alt="微信小程序"
                    className="mx-auto h-24 w-24 rounded-md border border-[#c7d4eb] bg-white p-1"
                  />
                  <div>关注微信小程序</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex flex-col gap-6 border-t border-[#c7d4eb] pt-6 text-sm text-[#4a5668] md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-2 text-[#0c1a33]">
              <img {...logoDarkPng} alt="logo" className="w-[156px]" />
            </div>
            <div className="flex items-center gap-6 text-[#32415d]">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Github, label: 'Github' },
                { Icon: Facebook, label: 'Facebook' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  className="transition-transform hover:-translate-y-0.5 hover:text-[#0f5af2]"
                  href="#"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-4 flex flex-col gap-3 text-xs text-[#00112C] md:flex-row md:items-center md:justify-between"
          >
            <div>© {new Date().getFullYear()} FuturePay Pte. Ltd.</div>
            <div className="flex flex-wrap items-center gap-4">
              {legalLinks.map((text) => (
                <a
                  key={text}
                  className="border-b border-dashed border-[#005DF5] font-medium transition-colors hover:border-[#005DF5] hover:text-[#0f5af2]"
                  href="#"
                >
                  {text}
                </a>
              ))}
            </div>
          </motion.div>
        </MaxW>
      </div>
    </footer>
  );
}
