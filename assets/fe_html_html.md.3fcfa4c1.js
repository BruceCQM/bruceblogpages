import{_ as s,o as n,c as a,a as l}from"./app.452d243c.js";const F=JSON.parse('{"title":"HTML","description":"","frontmatter":{},"headers":[{"level":2,"title":"noscript 标签","slug":"noscript-标签","link":"#noscript-标签","children":[]},{"level":2,"title":"获取 html head body 标签","slug":"获取-html-head-body-标签","link":"#获取-html-head-body-标签","children":[]},{"level":2,"title":"!DOCTYPE 的作用","slug":"doctype-的作用","link":"#doctype-的作用","children":[]},{"level":2,"title":"em 和 rem 的区别","slug":"em-和-rem-的区别","link":"#em-和-rem-的区别","children":[]}],"relativePath":"fe/html/html.md","lastUpdated":1678519968000}'),e={name:"fe/html/html.md"},p=l(`<h1 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-hidden="true">#</a></h1><h2 id="noscript-标签" tabindex="-1"><code>noscript</code> 标签 <a class="header-anchor" href="#noscript-标签" aria-hidden="true">#</a></h2><p><code>noscript</code> 标签是一个古老的标签，当初被引入的目的是帮助老旧的浏览器平滑升级更替，早期的浏览器不支持 JavaScript，因此使用 <code>noscript</code> 标签显示替代的内容</p><p><code>noscript</code> 标签在下面两种情况下起作用：</p><ul><li>浏览器不支持 JavaScript</li><li>浏览器支持 JavaScript，但被禁用</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">noscript</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 老铁，这个页面需要 JavaScript 支持啊 </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">noscript</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>网站不能强制开启 JavaScript，但增加提示还是比较用户友好的。</p><h2 id="获取-html-head-body-标签" tabindex="-1">获取 <code>html head body</code> 标签 <a class="header-anchor" href="#获取-html-head-body-标签" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">documentElement</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">head</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="doctype-的作用" tabindex="-1"><code>!DOCTYPE</code> 的作用 <a class="header-anchor" href="#doctype-的作用" aria-hidden="true">#</a></h2><p>DOCTYPE 是文档类型 document type 的缩写，指明浏览器使用哪种 HTML 规范来解析页面。</p><p>若不添加，则采用混杂模式，每种浏览器都采用自身的方式解析渲染页面，导致页面效果可能不同。</p><p>添加之后，采用标准模式，每种浏览器都按照统一的 HTML 标准解析渲染页面。</p><h4 id="相关链接" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接" aria-hidden="true">#</a></h4><p><a href="https://blog.csdn.net/qq_38128179/article/details/80758192" target="_blank" rel="noreferrer">深入理解 DOCTYPE 的作用</a></p><h2 id="em-和-rem-的区别" tabindex="-1"><code>em</code> 和 <code>rem</code> 的区别 <a class="header-anchor" href="#em-和-rem-的区别" aria-hidden="true">#</a></h2><p>区别：参照物不同。</p><p><code>em</code>：</p><ul><li>元素的字体大小 <code>font-size</code> 相对于父元素的 <code>font-size</code></li><li>元素的 <code>width heigth border margin padding</code> 相对于自身的 <code>font-size</code></li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  父元素div</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    子元素p</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">孙元素span</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 40px */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 10px */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 20px */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">span</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 5px */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2em</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 10px */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>rem</code>：</p><ul><li>统一相对于根元素 <code>&lt;html&gt;</code> 的字体大小 <code>font-size</code></li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">html</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2rem</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 32px */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10rem</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 160px */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这两种都可做响应式，但 <code>rem</code> 更方便。</p><h4 id="相关链接-1" tabindex="-1">相关链接 <a class="header-anchor" href="#相关链接-1" aria-hidden="true">#</a></h4><p><a href="https://www.cnblogs.com/wind-lanyan/p/6978084.html" target="_blank" rel="noreferrer">css 中单位 em 和 rem 的区别</a></p>`,27),o=[p];function t(c,r,i,d,y,D){return n(),a("div",null,o)}const m=s(e,[["render",t]]);export{F as __pageData,m as default};
