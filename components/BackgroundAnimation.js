import { useRef, useEffect } from 'react';

const BackgroundAnimation = ({ count = 120 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // --- 画面リサイズ対応 -----------------------------------------------
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // --- マウスポインタ情報 ---------------------------------------------
    const pointer = { x: width / 2, y: height / 2, active: false };

    const handlePointerMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    // --- 粒子生成 ---------------------------------------------------------
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: 1 + Math.random() * 2,
      hue: Math.random() * 360,
    }));

    const INFLUENCE = 120; // マウスが影響を及ぼす半径(px)

    // --- アニメーションループ ------------------------------------------
    const animate = () => {
      // 背景塗りつぶし
      // ctx.fillStyle = "rgba(10, 20, 40, 0.07)";
      // ctx.fillRect(0, 0, width, height);

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0a1428";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        // マウス反発
        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < INFLUENCE * INFLUENCE) {
            const dist = Math.sqrt(distSq) || 1;
            const force = ((INFLUENCE - dist) / INFLUENCE) * 0.6;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // 速度適用 & 減衰
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        // 画面外ラップ
        if (p.x < -p.size) p.x = width + p.size;
        if (p.x > width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = height + p.size;
        if (p.y > height + p.size) p.y = -p.size;

        // 描画
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, 0.85)`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // --- クリーンアップ ---------------------------------------------------
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default BackgroundAnimation;


