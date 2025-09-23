import React from 'react';
import { GiLemon } from 'react-icons/gi';

const BalanceGraphic: React.FC = () => {
  return (
    <section className="relative bg-[url('/images/jungle.webp')] bg-cover bg-center before:absolute before:inset-0 before:bg-white/70 before:z-0">
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h2 className="max-w-3xl text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight uppercase">
          WENN DIR DAS LEBEN EINE ZITRONE GIBT, MACH LIMONADE DRAUS.
        </h2>
        <p className="mt-8 text-black text-xl sm:text-2xl md:text-3xl font-medium">— Elbert Hubbard</p>
        <GiLemon className="mt-6 h-12 w-12 text-black" aria-hidden={true} />
      </div>
    </section>
  );
};

export default BalanceGraphic;
