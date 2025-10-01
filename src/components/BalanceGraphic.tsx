import React from 'react';

const BalanceGraphic: React.FC = () => {
  return (
    <section className="relative bg-[url('/images/jungle.webp')] bg-cover bg-center before:absolute before:inset-0 before:bg-white/70 before:z-0">
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h2 className="max-w-3xl text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight uppercase">
          Sei du selbst die Veränderung, die du dir wünschst für diese Welt
        </h2>
        <p className="mt-8 text-black text-xl sm:text-2xl md:text-3xl font-medium">— Mahatma Gandhi</p>
      </div>
    </section>
  );
};

export default BalanceGraphic;
