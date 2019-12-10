var pageTpl = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><link rel="shortcut icon" href="/imgs/dog.ico"><link rel="stylesheet" href="/index.css"><title>Document</title></head><body><div id="header" class="header"><div class="header-wrap"><a class="logo" href="/"><img src="/imgs/dog_128px.png" /></a><div class="nav"><a href="/">首页</a><a href="/article-list">文章列表</a><a href="/note.html">note</a><a href="">关于</a></div></div></div><div id="root" class="root"></div><div id="footer" class="footer"><div class="footer-wrap"><a href="http://www.beian.miit.gov.cn/" target="_blank">浙ICP备19046722号</a></div></div></body></html>';

function getHtml(html) {
    return pageTpl.replace('<div id="root" class="root"></div>', '<div id="root" class="root">' + html + '</div>');
}

module.exports = getHtml;