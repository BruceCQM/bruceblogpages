import{_ as e,o as s,c as r,a as t}from"./app.452d243c.js";const n="/bruceblogpages/assets/dev_error.0433d7a2.png",u=JSON.parse('{"title":"vitepress 踩坑记录","description":"","frontmatter":{},"headers":[{"level":2,"title":"运行报错","slug":"运行报错","link":"#运行报错","children":[]}],"relativePath":"fe/vuepress/vitepress.md","lastUpdated":1685502375000}'),a={name:"fe/vuepress/vitepress.md"},d=t('<h1 id="vitepress-踩坑记录" tabindex="-1">vitepress 踩坑记录 <a class="header-anchor" href="#vitepress-踩坑记录" aria-hidden="true">#</a></h1><h2 id="运行报错" tabindex="-1">运行报错 <a class="header-anchor" href="#运行报错" aria-hidden="true">#</a></h2><p>运行 <code>npm run dev</code> 或 <code>npm run build</code> 报 <code>UnhandledPromiseRejectionWarning: Unhandled promise rejection</code> 错误。</p><p><img src="'+n+'" alt="UnhandledPromiseRejectionWarning: Unhandled promise rejection"></p><p>原因：node 版本太低，是 vitepress 最低 node 版本是 16，我使用了 12 版本的。</p><p>解决方法：使用 nvm 切换 node 版本。</p>',6),o=[d];function i(c,p,_,l,h,m){return s(),r("div",null,o)}const f=e(a,[["render",i]]);export{u as __pageData,f as default};
