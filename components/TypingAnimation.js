import React, { useEffect, useState } from 'react';
import styles from './TypingAnimation.module.css'; // スタイルを適切にインポート
import BackgroundAnimation from './BackgroundAnimation'; // BackgroundAnimation コンポーネントをインポート

const TypingAnimation = () => {
    const [text, setText] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const fullText = "  Hiroto Tsuchida's Page";
    const typingDelay = 100;
    let index = 0;

    useEffect(() => {
        const timer = setInterval(() => {
            setText((prev) => prev + fullText.charAt(index));
            index++;
            if (index === fullText.length) {
                clearInterval(timer);
                setIsCompleted(true); // テキスト表示完了時にtrueに設定
            }
        }, typingDelay);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.typingAnimationContainer} style={{ position: 'relative', width: '100%', height: '100vh', zIndex: 1 }}>
            {isCompleted ? <BackgroundAnimation /> : null} {/* 条件付きで背景アニメーションを表示 */}
            <div style={{ position: 'relative', zIndex: 0 }}>
            <strong>{text}</strong>
            </div>
        </div>
    );
}

export default TypingAnimation;