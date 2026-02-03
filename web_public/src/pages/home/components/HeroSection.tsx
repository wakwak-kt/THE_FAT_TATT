
import { useEffect, useRef, useState } from 'react';

interface FlyingPizza {
  id: number;
  x: number;
  y: number;
  angle: number;
  speed: number;
}

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(-2000);
  const [velocity, setVelocity] = useState(50);
  const [isSpinning, setIsSpinning] = useState(true);
  const [flyingPizzas, setFlyingPizzas] = useState<FlyingPizza[]>([]);
  const [showPizzas, setShowPizzas] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(Date.now());

  const slotImages = [
    '/images/the-fat-tatt-moji-up.png',
    '/images/piza.png',
    '/images/the-fat-tatt-moji-down.png',
  ];

  useEffect(() => {
    const imageHeight = window.innerHeight / 3;
    const totalHeight = imageHeight * slotImages.length;

    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const spinDuration =6000; // 6秒でスピン
      const slowdownStart = 2500; // 2.5秒後から減速開始

      if (elapsed < spinDuration) {
        setScrollPosition((prev) => prev + velocity);

        // 減速処理
        if (elapsed > slowdownStart) {
          const slowdownProgress = (elapsed - slowdownStart) / (spinDuration - slowdownStart);
          setVelocity((vel) => vel - slowdownProgress * 0.8);
        }
      } else if (isSpinning) {
        // スピン停止 - 中央の画像（インデックス1）が画面中央に来るように位置を調整
        setIsSpinning(false);
        setVelocity(0);

        // 画面の中央
        const screenCenter = window.innerHeight / 2;
        // 中央の画像（piza.png、インデックス1）の中心位置
        const middleImageCenter = imageHeight * 1.5;
        // 中央の画像を画面中央に配置するための位置
        const targetNormalizedPosition = screenCenter - middleImageCenter;

        // normalizedPositionの計算式を考慮してscrollPositionを調整
        // normalizedPosition = ((scrollPosition % totalHeight) + totalHeight) % totalHeight - totalHeight
        // targetNormalizedPosition になるようにscrollPositionを設定
        const targetScrollPosition = targetNormalizedPosition + totalHeight;

        setScrollPosition(targetScrollPosition);

        // ピザを飛ばす
        setTimeout(() => {
          const pizzaCount = 16;
          const newPizzas: FlyingPizza[] = Array.from({ length: pizzaCount }, (_, i) => ({
            id: i,
            x: 0,
            y: 0,
            angle: (360 / pizzaCount) * i,
            speed: 4 + Math.random() * 4,
          }));
          setFlyingPizzas(newPizzas);
          setShowPizzas(true);
        }, 500);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isSpinning, velocity, slotImages.length]);

  // 飛ぶピザのアニメーション
  useEffect(() => {
    if (!showPizzas) return;

    const pizzaAnimationRef = requestAnimationFrame(function animatePizzas() {
      setFlyingPizzas((prev) =>
        prev.map((pizza) => ({
          ...pizza,
          x: pizza.x + Math.cos((pizza.angle * Math.PI) / 180) * pizza.speed,
          y: pizza.y + Math.sin((pizza.angle * Math.PI) / 180) * pizza.speed,
        }))
      );

      requestAnimationFrame(animatePizzas);
    });

    return () => cancelAnimationFrame(pizzaAnimationRef);
  }, [showPizzas]);

  const imageHeight = window.innerHeight / 3;
  const totalHeight = imageHeight * slotImages.length; // 1セットの高さ
  const normalizedPosition = ((scrollPosition % totalHeight) + totalHeight) % totalHeight - totalHeight;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#FEBF00' }}
    >
      {/* 画面全体がスロットレーン */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full"
          style={{
            transform: `translateY(${normalizedPosition}px)`,
            transition: isSpinning ? 'none' : 'transform 0.5s ease-out',
          }}
        >
          {/* 画像を繰り返し表示してループ効果を作る */}
          {[...Array(10)].map((_, setIndex) => (
            <div key={setIndex} className="flex flex-col">
              {slotImages.map((img, i) => {
                const isMojiImage = img.includes('moji-up') || img.includes('moji-down');
                return (
                  <div
                    key={`${setIndex}-${i}`}
                    className="w-full flex items-center justify-center"
                    style={{
                      height: `${imageHeight}px`,
                    }}
                  >
                    <img
                      src={img}
                      alt=""
                      className={`${isMojiImage ? 'max-w-[85vw]' : 'max-w-[60vw]'} max-h-full object-contain`}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* 飛ぶピザ */}
      {showPizzas && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
          {flyingPizzas.map((pizza) => {
            const distance = Math.sqrt(pizza.x ** 2 + pizza.y ** 2);
            const maxDistance = 800;
            return (
              <img
                key={pizza.id}
                src="/images/piza.png"
                alt=""
                className="absolute transition-opacity duration-300"
                style={{
                  width: '7vw',
                  height: '7vw',
                  minWidth: '70px',
                  minHeight: '70px',
                  transform: `translate(${pizza.x}px, ${pizza.y}px) rotate(${distance * 2}deg)`,
                  opacity: Math.max(0, 1 - distance / maxDistance),
                }}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
