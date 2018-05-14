require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片相关信息
let imageDatas = require('../data/imageDatas.json');
//利用自执行函数,将图片信息名转换成图片URL路径
imageDatas = (function getImageUrl(imageDataArr){
  for(var i =0;i<imageDataArr.length;i++){
        var singleImageData = imageDataArr[i];
        singleImageData.imageUrl=require('../images/'+singleImageData.fileName);
        imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
          <section className="img-sec">

          </section>
          <nav className="controller-nav">

          </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
