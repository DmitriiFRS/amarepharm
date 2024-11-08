import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { dir } from 'i18next';
import { languages } from '../../i18n/settings';
import NextTopLoader from 'nextjs-toploader';
import SaveReferrer from '@/components/common/SaveReferer';
import '../globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
};

interface RootLayoutProps {
   children: React.ReactNode;
   params: {
      lng: string;
   };
}

export async function generateStaticParams() {
   return languages.map(lng => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: RootLayoutProps) {
   return (
      <html lang={lng} dir={dir(lng)}>
         <body className=' bg-neutral-white'>
            <NextTopLoader
               color='#ffffff'
               initialPosition={0.08}
               crawlSpeed={200}
               height={2}
               showSpinner={false}
               shadow='0 0 10px #fff,0 0 5px #fff'
            />
            <SaveReferrer />
            <div className='flex flex-col min-h-full overflow-x-hidden'>
               <Header lng={lng} />
               {children}
               <Footer lng={lng} />
            </div>
         </body>
      </html>
   );
}
