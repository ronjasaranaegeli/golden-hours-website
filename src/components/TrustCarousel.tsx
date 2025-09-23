import { useMemo } from 'react';
import clsx from 'clsx';
import './TrustCarousel.css';

const TOTAL_IMAGES = 60;

const TrustCarousel = () => {
  const screenshots = useMemo(
    () =>
      Array.from({ length: TOTAL_IMAGES }, (_, index) => ({
        src: `/images/golden-hours-testimonial-screenshots/golden-hours-testimonial-screenshot-${index + 1}.jpg`,
        alt: `Testimonial Screenshot ${index + 1}`,
      })),
    []
  );

  const midpoint = Math.ceil(screenshots.length / 2);
  const topRow = screenshots.slice(0, midpoint);
  const bottomRow = screenshots.slice(midpoint);

  const renderRow = (
    images: typeof screenshots,
    direction: 'left' | 'right',
    duration: number
  ) => {
    const duplicated = images.concat(images);

    return (
      <div className="trust-carousel-row" aria-hidden>
        <div
          className={clsx(
            'trust-carousel-track flex items-center gap-4 sm:gap-6 lg:gap-8',
            direction === 'right'
              ? 'trust-carousel-track-reverse'
              : 'trust-carousel-track-forward'
          )}
          style={{ animationDuration: `${duration}s` }}
        >
          {duplicated.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="rounded-xl overflow-hidden shadow-md bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/10"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                width={320}
                height={400}
                className="h-32 w-auto object-cover sm:h-36 md:h-40 lg:h-44 xl:h-48"
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 33vw"
              />
            </figure>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-forest-500 mb-3">Echte Resultate</p>
          <h2 className="font-serif text-3xl md:text-4xl text-forest-900 font-medium">
            Momente der Transformation
          </h2>
        </div>

        <div className="trust-carousel-wrapper relative overflow-hidden rounded-3xl border border-golden-100 bg-gradient-to-br from-golden-50/40 via-white to-golden-50/30 px-4 py-10 md:px-6 md:py-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent"></div>

          <div className="space-y-6 md:space-y-8">
            {renderRow(topRow, 'left', 102)}
            {renderRow(bottomRow, 'right', 114)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCarousel;
