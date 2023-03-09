/**
 * Base Fontsize
 */
// htmlのcssプロパティからfont-sizeを取得して、単位のpxを除去する
const html = document.documentElement;
const baseFontSize = Number(window.getComputedStyle(html).getPropertyValue('font-size').slice(0, -2));

// カスタムプロパティに設定
html.style.setProperty('--base-font-size', baseFontSize);
