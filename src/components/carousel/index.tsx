"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  images: StaticImageData[];
}

export default function Carrossel({ images }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    plugin.current?.play();
  }, [api]);

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
   <main className="flex flex-col items-center p-8 justify-center w-full">
  <div className="p-4">
    <p className="font-bold text-3xl text-center">Eventos em destaque</p>
  </div>

  <div className="w-full max-w-screen-xl px-4">
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className="w-full rounded-2xl overflow-hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover rounded-2xl"
              width={1280}
              height={600}
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>

  <div className="flex gap-2 mt-6">
    {Array.from({ length: count }).map((_, index) => (
      <button
        key={index}
        onClick={() => api?.scrollTo(index)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          current === index + 1 ? "bg-yellow-500 scale-125" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</main>

  );
}
