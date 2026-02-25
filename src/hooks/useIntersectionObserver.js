// ============================================================
// useIntersectionObserver.js — 自訂 Hook：偵測元素是否進入可視區域
//
// 用途：實現「滾動進場動畫」，當元素進入畫面時觸發 is-visible 樣式
//
// 參數（options 物件）：
//   triggerOnce {boolean} → true 時，元素一旦可見就停止觀察（一次性觸發）
//   threshold   {number}  → 元素需顯示的比例才觸發（預設 0.1 = 10%）
//   root / rootMargin     → IntersectionObserver 標準選項
//
// 回傳值（陣列）：
//   [elementRef, isVisible]
//   elementRef  → 綁定至目標 DOM 元素的 ref（使用 ref={elementRef}）
//   isVisible   → 布林值，表示元素目前是否在可視區域內
//
// 使用範例：
//   const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true });
//   <div ref={ref} className={isVisible ? 'is-visible' : ''}>...</div>
// ============================================================

import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(options = {}) {
  // 建立綁定至目標 DOM 元素的 ref
  const elementRef = useRef(null);

  // 追蹤元素是否在可視區域內的狀態
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 建立 IntersectionObserver，callback 接收第一個（也是唯一的）entry
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // 元素進入可視區域
        setIsVisible(true);
        if (options.triggerOnce) {
          // triggerOnce 模式：可見後停止觀察，避免重複觸發
          observer.unobserve(entry.target);
        }
      } else if (!options.triggerOnce) {
        // 非 triggerOnce 模式：元素離開可視區域時重設狀態
        setIsVisible(false);
      }
    }, {
      threshold: 0.1,    // 預設：元素顯示 10% 即觸發
      ...options         // 允許外部覆蓋 threshold、root、rootMargin 等選項
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement); // 開始觀察目標元素
    }

    // Cleanup：元件卸載時停止觀察，避免記憶體洩漏
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  // 當關鍵選項改變時重新建立 observer
  }, [options.triggerOnce, options.threshold, options.root, options.rootMargin]);

  return [elementRef, isVisible];
}
