interface Props {
   lng: string;
}

const AchievmentsGrid: React.FC<Props> = ({ lng }) => {
   return (
      <article className='grid grid-cols-1 md:grid-cols-3 text-neutral-white'>
         <div className='md:col-span-2'>
            <div className='text-[42px] leading-[119%] tracking-tightest md:border-[rgba(255,_255,_255,_0.2)] md:border-b-0 md:mb-8 md:pr-2 lg:text-[56px]'>
               Чего добилась наша компания с момента основания
            </div>
         </div>
         <div className='md:col-span-1 border-b border-[rgba(255,_255,_255,_0.2)] mt-10 md:mt-0 md:border-b-0 md:border-l md:flex md:items-center md:pl-10'>
            <div className='flex flex-col gap-2 mb-[32px]'>
               <span className='font-medium text-[56px] tracking-tightest lg:text-[80px]'>3+</span>
               <span className='leading-143% lg:text-[16px] lg:leading-150%'>Лет на рынке</span>
            </div>
         </div>
         <div className='md:col-span-1 border-b border-[rgba(255,_255,_255,_0.2)] md:border-t md:border-b-0'>
            <div className='flex flex-col gap-2 mb-[32px] mt-[32px]'>
               <span className='font-medium text-[56px] tracking-tightest lg:text-[80px]'>53</span>
               <span className='leading-143% lg:text-[16px] lg:leading-150%'>Преппарата в портфеле</span>
            </div>
         </div>
         <div className='md:col-span-1 border-b border-[rgba(255,_255,_255,_0.2)] md:border-t md:border-l md:border-b-0 md:pl-10'>
            <div className='flex flex-col gap-2 mb-[32px] mt-[32px]'>
               <span className='font-medium text-[56px] tracking-tightest lg:text-[80px]'>56</span>
               <span className='leading-143% lg:text-[16px] lg:leading-150%'>
                  Городов с региональныит представителями
               </span>
            </div>
         </div>
         <div className='md:col-span-1 md:border-[rgba(255,_255,_255,_0.2)] md:border-t md:border-l md:pl-10'>
            <div className='flex flex-col gap-2 mb-[32px] mt-[32px]'>
               <span className='font-medium text-[56px] tracking-tightest lg:text-[80px]'>4 000+</span>
               <span className='leading-143% lg:text-[16px] lg:leading-150%'>Аптек продают продукцию компании</span>
            </div>
         </div>
      </article>
   );
};

export default AchievmentsGrid;
