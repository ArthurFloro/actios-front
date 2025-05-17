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
    <main className="flex flex-col items-center p-24  ">
      <div className="p-2">
        <p className="font-bold text-xl">Eventos em destaque</p>
      </div>

      <div className="bg-transparent w-[38rem] rounded">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full rounded-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full rounded h-[300px] object-cover"
                  width={600}
                  height={300}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex gap-2 mt-4">
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
