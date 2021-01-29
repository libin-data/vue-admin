const config = {
  link:  'http://www.qq.com', // 网址，默认使用window.location.href
  title: '标题',  // 标题，默认读取document.title 
  desc:  '分享描述', // 描述, 默认读取<meta name="description" content="desc" />
  imgUrl: 'http://backtonature.github.io/project/m-share/demo1.png' // 图片, 默认取网页中第一个img标签
  types: ['wx', 'wxline', 'qq', 'qzone', 'sina'], // 启用的社交分享,默认为全部启用
  infoMap: { // 针对不同平台设定不同分享内容
    wx: {
      link: '分享到微信的链接', // 覆盖分享到微信的链接
      title: '分享到微信的标题', // 覆盖分享到微信的标题
      desc: '分享到微信的描述', // 覆盖分享到微信的标题
      imgUrl: '分享到微信的图片链接' // 覆盖分享到微信的图片链接
    }
  },
  fnDoShare(type) {
    // 执行分享的回调，type为'wx', 'wxline', 'qq', 'qzone', 'sina'
  }
};
document.querySelector('#share').addEventListener('click',function(){
	Mshare.popup(config)
})