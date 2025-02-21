import React, { useRef, useState } from "react";
import { cn } from "arco-cubes-basic";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import * as Cubes from "arco-cubes-basic";
import type { ThemeConfig } from "arco-cubes-types";

interface CtaButtonProps {
  title: string;
  image: string;
  avatar: string;
  jump_url: string;
}

interface Props {
  datas: {
    cta_list: CtaButtonProps[];
    cta_style: "small" | "grid" | "carousel" | "large";
    use_card_radius?: boolean;
  };
  theme: ThemeConfig;
}

const GeneralCta = ({ datas, theme }: Props) => {
  const { cta_style, use_card_radius = true } = datas;
  const cta_list = datas.cta_list.filter((cta) => !!cta.image);

  const LeftButton = ({ handleClick }: { handleClick: () => void }) => {
    return (
      <ChevronLeft
        className="opacity-0 pc:opacity-100 absolute top-1/2 -translate-y-1/2 left-1 w-8 h-8 text-on-primary bg-primary rounded-full p-2 shadow-md"
        onClick={handleClick}
      />
    );
  };

  const RightButton = ({ handleClick }: { handleClick: () => void }) => {
    return (
      <ChevronRight
        className="opacity-0 pc:opacity-100 absolute top-1/2 -translate-y-1/2 right-1 w-8 h-8 text-on-primary bg-primary rounded-full p-2 shadow-md"
        onClick={handleClick}
      />
    );
  };

  const renderButton = (
    button: CtaButtonProps,
    index: number,
    buttonClass: string,
    imgClass: string
  ) => {
    const { title, image, jump_url } = button;
    const lineStyle =
      cta_style === "large"
        ? "break-all line-clamp-2"
        : "break-all line-clamp-1";
    return (
      <Cubes.Link key={index} href={jump_url} className={buttonClass}>
        <img
          src={image}
          alt={` `}
          className={cn("w-full object-cover rounded-xl", imgClass)}
        />
        <div className="flex justify-between items-center mt-2 mx-1 gap-3">
          <div>
            <div
              className={cn(
                "text-on-primary font-primary font-medium text-base",
                lineStyle
              )}
            >
              {title}
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-on-primary shrink-0" />
        </div>
      </Cubes.Link>
    );
  };

  const renderSmall = () => {
    return (
      <div
        className="flex flex-col"
        style={{ gap: theme.page_config.gap ?? 0 }}
      >
        {cta_list.map((cta, index) => (
          <Cubes.SectionCard
            key={index}
            href={cta.jump_url}
            className={cn(
              "flex items-center gap-3 justify-between",
              use_card_radius ? "rounded-3xl" : "rounded-full"
            )}
          >
            <div className="flex items-center gap-3">
              {cta.avatar && (
                <img
                  src={cta.avatar}
                  alt={" "}
                  className={cn(
                    "flex items-center justify-center w-10 h-10 object-cover shrink-0",
                    use_card_radius ? "rounded-xl" : "rounded-full"
                  )}
                />
              )}
              <div className="flex flex-col">
                <span className="text-base font-normal text-on-primary font-secondary break-all line-clamp-1">
                  {cta.title}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full shrink-0">
              <ArrowUpRight className="w-4 h-4 text-on-primary" />
            </div>
          </Cubes.SectionCard>
        ))}
      </div>
    );
  };

  const renderGrid = () => {
    return (
      <Cubes.SectionCard className="grid gap-3 grid-cols-2">
        {cta_list.map((cta, index) =>
          renderButton(cta, index, "w-full", "aspect-square")
        )}
      </Cubes.SectionCard>
    );
  };

  const RenderLarge = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scroller = () => {
      const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.clientWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setCurrentIndex(newIndex);
      };

      return (
        <Cubes.Link href={cta_list?.[currentIndex]?.jump_url ?? ""}>
          <div className="relative">
            <div
              ref={scrollRef}
              className="w-full overflow-x-auto touch-pan-x scroll-smooth rounded-xl"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                touchAction: "pan-x pan-y",
              }}
              onScroll={handleScroll}
            >
              <div className="flex w-full">
                {cta_list.map((cta, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 select-none"
                      style={{ scrollSnapAlign: "center" }}
                    >
                      <div className="aspect-video">
                        <img
                          src={cta.image}
                          alt={` `}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {cta_list.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 px-4">
                {cta_list.map((_, index) => (
                  <div key={index} className="relative">
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] rounded-full" />
                    <div
                      className={cn(
                        "h-[6px] rounded-full transition-all duration-300 relative z-10",
                        currentIndex === index
                          ? "bg-white w-[6px] h-[6px] border border-white"
                          : "bg-none border border-white w-[6px] h-[6px]"
                      )}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Cubes.Link>
      );
    };

    if (!cta_list?.length) return null;

    return (
      <Cubes.SectionCard className="relative">
        <div className="relative">
          {scroller()}
          {currentIndex > 0 && (
            <LeftButton
              handleClick={() => {
                if (!scrollRef.current) return;
                const itemWidth = scrollRef.current.clientWidth;
                scrollRef.current.scrollTo({
                  left: (currentIndex - 1) * itemWidth,
                  behavior: "smooth",
                });
              }}
            />
          )}
          {currentIndex < cta_list.length - 1 && (
            <RightButton
              handleClick={() => {
                if (!scrollRef.current) return;
                const itemWidth = scrollRef.current.clientWidth;
                scrollRef.current.scrollTo({
                  left: (currentIndex + 1) * itemWidth,
                  behavior: "smooth",
                });
              }}
            />
          )}
        </div>
        <Cubes.Link href={cta_list?.[currentIndex]?.jump_url ?? ""}>
          <div className="flex justify-between items-center mt-2 mx-1 gap-2">
            <div className="text-base font-medium text-on-primary break-all line-clamp-1">
              {cta_list?.[currentIndex]?.title ?? ""}
            </div>
            <ArrowUpRight className="w-4 h-4 text-on-primary shrink-0" />
          </div>
        </Cubes.Link>
      </Cubes.SectionCard>
    );
  };

  const renderCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const rgbColor = theme.global_css?.["--primary"];
    const rgbColorFull = `rgb(${rgbColor?.split(" ").map(Number).join(",")})`;
    const rgbColorAlpha = `rgba(${rgbColor
      ?.split(" ")
      .map(Number)
      .join(",")}, 0)`;

    const handleScroll = () => {
      if (!scrollRef.current) return;
      setScrollPosition(scrollRef.current.scrollLeft);
    };

    const getScrollMetrics = () => {
      if (!scrollRef.current) return null;
      const container = scrollRef.current;
      const firstCard = container.querySelector(
        '[class*="w-[40%]"]'
      ) as HTMLElement;
      if (!firstCard) return null;

      const cardWidth = firstCard.offsetWidth;
      const gap = 4; // gap-1 = 4px
      const containerWidth = container.clientWidth;
      const totalWidth = container.scrollWidth;
      const maxScroll = totalWidth - containerWidth;

      return {
        cardWidth,
        gap,
        containerWidth,
        totalWidth,
        maxScroll,
      };
    };

    const handleScrollLeft = () => {
      const metrics = getScrollMetrics();
      if (!metrics || !scrollRef.current) return;

      const { cardWidth, gap } = metrics;
      const cardUnit = cardWidth + gap;

      // 计算当前第一张卡片的可见比例
      const currentOffset = scrollPosition % cardUnit;
      const visibleRatio = (cardUnit - currentOffset) / cardUnit;

      // 如果第一张卡片可见比例小于 3/4，滚动到这张卡片的起始位置
      // 否则滚动到上一张卡片
      const currentFirstCardIndex = Math.floor(scrollPosition / cardUnit);
      const targetPosition = Math.max(
        0,
        visibleRatio < 0.75
          ? currentFirstCardIndex * cardUnit
          : (currentFirstCardIndex - 1) * cardUnit
      );

      scrollRef.current.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    };

    const handleScrollRight = () => {
      const metrics = getScrollMetrics();
      if (!metrics || !scrollRef.current) return;

      // 计算当前可见的第一个完整卡片的位置
      const { cardWidth, gap, maxScroll } = metrics;
      const cardUnit = cardWidth + gap;
      const currentFirstCardIndex = Math.floor(scrollPosition / cardUnit);
      // 滚动到下一个卡片的起始位置
      const targetPosition = Math.min(
        maxScroll,
        (currentFirstCardIndex + 1) * cardUnit
      );

      scrollRef.current.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    };

    const metrics = getScrollMetrics();
    const showLeftButton = scrollPosition > 0;
    const showRightButton = metrics
      ? scrollPosition < metrics.maxScroll
      : false;
    const maskLeft = `linear-gradient(to right, ${rgbColorFull}, ${rgbColorAlpha})`;
    const maskRight = `linear-gradient(to left, ${rgbColorFull}, ${rgbColorAlpha})`;

    return (
      <Cubes.SectionCard className="relative">
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="w-full overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-1">
              {cta_list.map((cta, index) =>
                renderButton(cta, index, "shrink-0 w-[40%]", "aspect-square")
              )}
            </div>
          </div>
          {/* 左侧渐变遮罩 */}
          {showLeftButton && (
            <div
              className="absolute left-0 top-0 w-[10%] aspect-[1/4] pointer-events-none"
              style={{
                background: maskLeft,
              }}
            />
          )}
          {/* 右侧渐变遮罩 */}
          {showRightButton && (
            <div
              className="absolute right-0 top-0 w-[10%] aspect-[1/4] pointer-events-none"
              style={{
                background: maskRight,
              }}
            />
          )}
          {showLeftButton && <LeftButton handleClick={handleScrollLeft} />}
          {showRightButton && <RightButton handleClick={handleScrollRight} />}
        </div>
      </Cubes.SectionCard>
    );
  };

  if (cta_style === "small") {
    return renderSmall();
  } else if (cta_style === "grid") {
    return renderGrid();
  } else if (cta_style === "large") {
    return RenderLarge();
  } else if (cta_style === "carousel") {
    return renderCarousel();
  } else {
    return null;
  }
};

export default GeneralCta;
