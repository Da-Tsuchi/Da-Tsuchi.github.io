import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const numLines = 25; // 表示する線の数
const duration = 3; // アニメーションの持続時間（秒）

// 線をランダムに配置するための関数
const generateRandomLines = (num, viewportWidth, viewportHeight) => {
  return Array.from({ length: num }, () => ({
    startX: Math.random() * viewportWidth,
    startY: Math.random() * viewportHeight,
    endX: Math.random() * viewportWidth,
    endY: Math.random() * viewportHeight,
  }));
};

const BackgroundAnimation = () => {
  const viewportWidth = window.innerWidth; // ビューポートの実際の幅
  const viewportHeight = window.innerHeight; // ビューポートの実際の高さ
  const [lines, setLines] = useState(generateRandomLines(numLines, viewportWidth, viewportHeight));

  useEffect(() => {
    const interval = setInterval(() => {
      // 新しい線の位置を設定
      setLines(generateRandomLines(numLines, viewportWidth, viewportHeight));
    }, duration * 1000); // アニメーションの周期で更新

    return () => clearInterval(interval);
  }, [viewportWidth, viewportHeight]);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -10 }}>
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: duration, repeat: Infinity, repeatDelay: (duration * numLines) / lines.length }}
          style={{
            position: 'absolute',
            top: `${Math.min(line.startY, line.endY)}px`,
            left: `${Math.min(line.startX, line.endX)}px`,
            width: '2px',
            height: `${Math.sqrt(Math.pow(line.endX - line.startX, 2) + Math.pow(line.endY - line.startY, 2))}px`,
            backgroundColor: 'gray',
            transformOrigin: 'top left',
            transform: `rotate(${Math.atan2(line.endY - line.startY, line.endX - line.startX)}rad)`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;

