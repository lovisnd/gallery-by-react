require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片相关信息
let imageDatas = require('json!../data/imageDatas.json');
//利用自执行函数,将图片信息名转换成图片URL路径
imageDatas = (function getImageUrl(imageDataArr){
  for(var i =0;i<imageDataArr.length;i++){
        var singleImageData = imageDataArr[i];
        singleImageData.imageUrl=require('../images/'+singleImageData.fileName);
        imageDataArr[i] = singleImageData;
  }
  return imageDataArr;
})(imageDatas);
var ImageFigure = React.createClass({
  render:function () {
    return <figure>
      <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
      <figcaption>
        <h2>{this.props.data.title}</h2>
      </figcaption>
    </figure>
  }
});
class GalleryByReactApp extends React.Component {
  render() {
  var controllerUnits=[],imgFigures =[];
  imageDatas.forEach(function (value) {
    imgFigures.push(<ImageFigure data={value}/>);
  });
    return (
      <section className="stage">
          <section className="img-sec">
            {imgFigures}
          </section>
          <nav className="controller-nav">
            {controllerUnits}
          </nav>
      </section>
    );
  }
}

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
