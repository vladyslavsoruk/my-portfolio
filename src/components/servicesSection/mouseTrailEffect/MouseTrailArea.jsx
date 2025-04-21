import React, { useEffect, useRef } from "react";
import "./mouseTrail.css";

export default function MouseTrailArea({
  children,
  width = "100%",
  height = "100%",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    // 1) Получаем все "кружки"
    const circles = container.querySelectorAll(".circle");

    const count = circles.length;
    // массив текущих позиций каждого круга
    const positions = Array.from({ length: count }, () => ({ x: 0, y: 0 }));

    let mouseX = 0;
    let mouseY = 0;

    // 2) Слушаем движение мыши внутри контейнера и выход курсора за пределы
    // контейнера
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    container.addEventListener("mousemove", handleMouseMove);

    const handleMouseEnter = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      positions.forEach((p) => {
        p.x = mouseX;
        p.y = mouseY;
      });
    };
    container.addEventListener("mouseenter", handleMouseEnter);

    // 3) Анимационный цикл
    function animate() {
      // голова "цепи" сразу прыгает в координаты мыши
      positions[0].x = mouseX;
      positions[0].y = mouseY;

      // остальные "кружки" идут за предыдущим с некоторым запаздыванием
      for (let i = 1; i < count; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.6;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.6;
      }

      // расставляем "кружки" по своим позициям
      circles.forEach((circle, i) => {
        // circle.style.backgroundColor = "white";
        const { x, y } = positions[i];
        const scale = (count - i) / count;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
      });

      requestAnimationFrame(animate);
    }
    animate();

    // 4) Убираем слушатели при размонтировании
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className="mouse-trail-area"
      ref={containerRef}
      style={{ width, height }}
    >
      {children}
      <div className="cursor">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="circle" />
        ))}
      </div>
    </div>
  );
}
