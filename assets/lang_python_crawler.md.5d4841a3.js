import{_ as s,o as n,c as a,a as l}from"./app.452d243c.js";const A=JSON.parse('{"title":"Python 爬虫入门","description":"","frontmatter":{},"headers":[{"level":2,"title":"获取数据","slug":"获取数据","link":"#获取数据","children":[{"level":3,"title":"requests 模块","slug":"requests-模块","link":"#requests-模块","children":[]},{"level":3,"title":"Response 对象常用属性/方法","slug":"response-对象常用属性-方法","link":"#response-对象常用属性-方法","children":[]}]},{"level":2,"title":"解析数据","slug":"解析数据","link":"#解析数据","children":[{"level":3,"title":"BeautifulSoup","slug":"beautifulsoup","link":"#beautifulsoup","children":[]}]},{"level":2,"title":"提取数据","slug":"提取数据","link":"#提取数据","children":[{"level":3,"title":"BeautifulSoup 对象 & Tag 对象","slug":"beautifulsoup-对象-tag-对象","link":"#beautifulsoup-对象-tag-对象","children":[]}]},{"level":2,"title":"存储数据","slug":"存储数据","link":"#存储数据","children":[{"level":3,"title":"csv 模块","slug":"csv-模块","link":"#csv-模块","children":[]},{"level":3,"title":"openpyxl 模块","slug":"openpyxl-模块","link":"#openpyxl-模块","children":[]}]}],"relativePath":"lang/python/crawler.md","lastUpdated":1678519968000}'),p={name:"lang/python/crawler.md"},e=l(`<h1 id="python-爬虫入门" tabindex="-1">Python 爬虫入门 <a class="header-anchor" href="#python-爬虫入门" aria-hidden="true">#</a></h1><blockquote><p>爬虫四步骤：获取数据、解析数据、提取数据、存储数据</p></blockquote><h2 id="获取数据" tabindex="-1">获取数据 <a class="header-anchor" href="#获取数据" aria-hidden="true">#</a></h2><h3 id="requests-模块" tabindex="-1">requests 模块 <a class="header-anchor" href="#requests-模块" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">headers </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">origin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://y.qq.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 请求来源</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">referer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://y.qq.com/n/yqq/song/004Z8Ihr0JIu5s.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 请求来源，携带的信息比“origin”更丰富</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">user-agent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 标记了请求从什么设备，什么浏览器上发出</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 伪装请求头</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 请求歌曲评论的url参数的前面部分</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">  params </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">g_tk</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">5381</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">needmusiccrit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pagenum</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">str</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pagesize</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">15</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lasthotcommentid</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">song_102065756_3202544866_44059185</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">domain</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">qq.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 将参数封装为字典</span></span>
<span class="line"><span style="color:#A6ACCD;">  res_comments </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> requests</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">params</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">headers</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">headers</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 调用get方法，下载这个字典</span></span>
<span class="line"><span style="color:#A6ACCD;">  json_comments </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> res_comments</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  list_comments </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> json_comments</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">comment</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">commentlist</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> comment </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> list_comments</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">comment</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rootcommentcontent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-----------------------------------</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 好像最好关闭，否则会保持多个连接，容易被封</span></span>
<span class="line"><span style="color:#A6ACCD;">res_comments</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="response-对象常用属性-方法" tabindex="-1">Response 对象常用属性/方法 <a class="header-anchor" href="#response-对象常用属性-方法" aria-hidden="true">#</a></h3><table><thead><tr><th>属性方法</th><th>含义</th></tr></thead><tbody><tr><td>res.status_code</td><td>响应状态码</td></tr><tr><td>res.content</td><td>转为二进制数据，用于图像音视频</td></tr><tr><td>res.text</td><td>字符串数据</td></tr><tr><td>res.encoding</td><td>指定编码方式 utf-8，gbk</td></tr><tr><td>res.json()</td><td>将 response 转为字典/列表</td></tr></tbody></table><h2 id="解析数据" tabindex="-1">解析数据 <a class="header-anchor" href="#解析数据" aria-hidden="true">#</a></h2><p>解析数据让 Python 看得明白 HTML</p><h3 id="beautifulsoup" tabindex="-1">BeautifulSoup <a class="header-anchor" href="#beautifulsoup" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> requests</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> bs4 </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> BeautifulSoup</span></span>
<span class="line"><span style="color:#A6ACCD;">res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> requests</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://localprod.pandateacher.com/python-manuscript/crawler-html/spider-men5.0.html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 把网页解析为BeautifulSoup对象，第2个参数是解析器</span></span>
<span class="line"><span style="color:#A6ACCD;">soup </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">BeautifulSoup</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">res</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">html.parser</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="提取数据" tabindex="-1">提取数据 <a class="header-anchor" href="#提取数据" aria-hidden="true">#</a></h2><h3 id="beautifulsoup-对象-tag-对象" tabindex="-1">BeautifulSoup 对象 &amp; Tag 对象 <a class="header-anchor" href="#beautifulsoup-对象-tag-对象" aria-hidden="true">#</a></h3><p>BeautifulSoup 对象</p><table><thead><tr><th>方法</th><th>作用</th><th>语法</th><th>示例</th></tr></thead><tbody><tr><td>find()</td><td>提取满足要求的首个数据</td><td>BeautifulSoup 对象.find(标签,属性)</td><td>soup.find(&#39;div&#39;,class_=&#39;books&#39;)</td></tr><tr><td>find_all()</td><td>提取满足要求的所有数据</td><td>BeautifulSoup 对象.find_all(标签,属性)</td><td>soup.find_all(&#39;div&#39;,class_=&#39;books&#39;)</td></tr></tbody></table><p>Tag 对象</p><table><thead><tr><th>属性/方法</th><th>作用</th></tr></thead><tbody><tr><td>Tag.find()和 Tag.find_all()</td><td>提取 Tag 中的 Tag</td></tr><tr><td>Tag.text</td><td>提取 Tag 中的文字</td></tr><tr><td>Tag[&#39;属性名&#39;]</td><td>提取 Tag 中这个属性的值</td></tr></tbody></table><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 返回一个Tag类对象</span></span>
<span class="line"><span style="color:#A6ACCD;">item </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> soup</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 返回一个ResultSet类的对象。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 其实是Tag对象以列表结构储存了起来</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 可以把它当做列表来处理</span></span>
<span class="line"><span style="color:#A6ACCD;">items </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> soup</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find_all</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="存储数据" tabindex="-1">存储数据 <a class="header-anchor" href="#存储数据" aria-hidden="true">#</a></h2><h3 id="csv-模块" tabindex="-1">csv 模块 <a class="header-anchor" href="#csv-模块" aria-hidden="true">#</a></h3><table><thead><tr><th></th><th></th><th>b</th><th>+</th><th>b+</th></tr></thead><tbody><tr><td>r(read,读)</td><td>r 只读，指针在开头，文件不存在则报错</td><td>rb 二进制只读</td><td>r+读写</td><td>rb+二进制读写</td></tr><tr><td>w(write,写)</td><td>w 只写，文件不存在则新建，存在则覆盖</td><td>wb 二进制只写</td><td>w+读写</td><td>wb+二进制读写</td></tr><tr><td>a(append,追加)</td><td>a 追加，文件存在指针放在末尾，不存在则新建</td><td>ab 二进制追加</td><td>a+追加且可读</td><td>ab+二进制追加且可读</td></tr></tbody></table><h4 id="写文件" tabindex="-1">写文件 <a class="header-anchor" href="#写文件" aria-hidden="true">#</a></h4><div class="language-py line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> csv</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">csv_file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">demo.csv</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">newline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建csv文件，文件名“demo.csv”、写入模式“w”、</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># newline=&#39;&#39;,避免表格的行与行之间出现空白行</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># encoding=&#39;utf-8&#39;。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">writer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> csv</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writer</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">csv_file</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 用csv.writer()函数创建一个writer对象</span></span>
<span class="line"><span style="color:#A6ACCD;">writer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writerow</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">电影</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">豆瓣评分</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">writer</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">writerow</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">银河护卫队</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">8.0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">csv_file</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="读文件" tabindex="-1">读文件 <a class="header-anchor" href="#读文件" aria-hidden="true">#</a></h4><div class="language-py line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> csv</span></span>
<span class="line"><span style="color:#A6ACCD;">csv_file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">open</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">demo.csv</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">r</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">newline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;font-style:italic;">encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">reader </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> csv</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reader</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">csv_file</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> row </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> reader</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="openpyxl-模块" tabindex="-1">openpyxl 模块 <a class="header-anchor" href="#openpyxl-模块" aria-hidden="true">#</a></h3><h4 id="写文件-1" tabindex="-1">写文件 <a class="header-anchor" href="#写文件-1" aria-hidden="true">#</a></h4><div class="language-py line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> openpyxl</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">wb </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> openpyxl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Workbook</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建新的workbook（工作簿）对象，就是创建新的空的Excel文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">active</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># wb.active就是获取这个工作簿的活动表，通常就是第一个工作表。</span></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">title</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new title</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 给工作表重命名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">漫威宇宙</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">row </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">美国队长</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">钢铁侠</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">蜘蛛侠</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">row</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rows </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">美国队长</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">钢铁侠</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">蜘蛛侠</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">是</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">漫威</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">宇宙</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">经典</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">人物</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#先把要写入的多行内容写成列表，再放进大列表里，赋值给rows。</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> rows</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    sheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">wb</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Marvel.xlsx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="读文件-1" tabindex="-1">读文件 <a class="header-anchor" href="#读文件-1" aria-hidden="true">#</a></h4><div class="language-py line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">wb </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> openpyxl</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load_workbook</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Marvel.xlsx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">sheet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sheetname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> wb</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">sheetnames</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sheetname</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">A1_cell </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> sheet</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">A1_value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> A1_cell</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">value</span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">A1_value</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,30),o=[e];function t(r,c,D,F,y,i){return n(),a("div",null,o)}const b=s(p,[["render",t]]);export{A as __pageData,b as default};
