import{_ as s,o as a,c as n,a as l}from"./app.07239b4b.js";const y=JSON.parse('{"title":"css","description":"","frontmatter":{},"headers":[{"level":2,"title":"css 盒子模型","slug":"css-盒子模型","link":"#css-盒子模型","children":[]},{"level":2,"title":"css 百分比","slug":"css-百分比","link":"#css-百分比","children":[]},{"level":2,"title":"css 定位","slug":"css-定位","link":"#css-定位","children":[{"level":3,"title":"静态定位 static","slug":"静态定位-static","link":"#静态定位-static","children":[]},{"level":3,"title":"相对定位 relative","slug":"相对定位-relative","link":"#相对定位-relative","children":[]},{"level":3,"title":"绝对定位 absolute","slug":"绝对定位-absolute","link":"#绝对定位-absolute","children":[]},{"level":3,"title":"固定定位 fixed","slug":"固定定位-fixed","link":"#固定定位-fixed","children":[]}]}],"relativePath":"interview/css.md","lastUpdated":1720006870000}'),e={name:"interview/css.md"},p=l(`<h1 id="css" tabindex="-1">css <a class="header-anchor" href="#css" aria-hidden="true">#</a></h1><h2 id="css-盒子模型" tabindex="-1">css 盒子模型 <a class="header-anchor" href="#css-盒子模型" aria-hidden="true">#</a></h2><p>css 盒子模型是 css 布局的基础。每个盒子由四个部分组成：内容（content）、内边距（padding）、边框（border）、外边距（margin）。</p><p>css 盒子模型分为两种：</p><ul><li><p>标准盒子模型：在标准盒子模型当中，盒子的宽度和高度是指内容 content 的宽高，不包括内边距、边框。因此设置内边距和边框，会把盒子撑大。</p></li><li><p>怪异盒子模型（IE盒子模型）：在怪异盒子模型当中，盒子的宽高包括了内边距和边框。因此设置内边距和边框，不会把盒子撑大。</p></li></ul><p>可以通过设置 <code>box-sizing</code> 属性来改变盒子模型。</p><ul><li><p><code>content-box</code>：标准盒子模型，默认值。</p></li><li><p><code>border-box</code>：怪异盒子模型。</p></li></ul><h2 id="css-百分比" tabindex="-1">css 百分比 <a class="header-anchor" href="#css-百分比" aria-hidden="true">#</a></h2><p>css 不同属性的百分比值，参照的基准不一样。</p><ol><li><p>参照<strong>父元素宽度</strong>：padding、margin、width、text-indent。</p></li><li><p>参照<strong>父元素高度</strong>：height。</p></li><li><p>参照<strong>父元素相同属性</strong>：font-size、line-height。</p></li><li><p>相对定位的元素，top、bottom 参照的是父元素**内容（content）**的高度，left、right 参照的是父元素内容的宽度。</p></li><li><p>绝对定位的元素，参照的分别是<strong>最近的定位元素包含 padding 的高度和宽度</strong>。绝对定位的元素以最近的设置了定位的元素为参照元素，只要 position 不是 static 就算是设置了定位，因为 static 是默认值。</p></li></ol><h2 id="css-定位" tabindex="-1">css 定位 <a class="header-anchor" href="#css-定位" aria-hidden="true">#</a></h2><h3 id="静态定位-static" tabindex="-1">静态定位 static <a class="header-anchor" href="#静态定位-static" aria-hidden="true">#</a></h3><p>默认定位，相当于没有定位。</p><h3 id="相对定位-relative" tabindex="-1">相对定位 relative <a class="header-anchor" href="#相对定位-relative" aria-hidden="true">#</a></h3><ul><li>相对于元素原本的位置进行偏移</li><li>元素会浮起来，脱离标准流，但仍然占据原本的位置</li></ul><h3 id="绝对定位-absolute" tabindex="-1">绝对定位 absolute <a class="header-anchor" href="#绝对定位-absolute" aria-hidden="true">#</a></h3><ul><li>相对于最近的具有定位属性的父元素进行偏移，若没有，则相对于 <code>body</code> 进行偏移</li><li>元素脱离标准流，且不占据原本的位置</li><li>通常是“子绝父相”</li></ul><h3 id="固定定位-fixed" tabindex="-1">固定定位 fixed <a class="header-anchor" href="#固定定位-fixed" aria-hidden="true">#</a></h3><ul><li>相对于浏览器窗口进行偏移</li><li>不会随着浏览器窗口的滚动而滚动</li><li>可用于创建固定头部、底部</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// 创建全屏遮罩</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mask</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fixed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.25</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-hidden="true">#</a></h4><p><a href="https://blog.csdn.net/weixin_38055381/article/details/81558288" target="_blank" rel="noreferrer">CSS 的几种定位详解</a></p>`,22),t=[p];function o(i,r,c,d,h,C){return a(),n("div",null,t)}const u=s(e,[["render",o]]);export{y as __pageData,u as default};
