import React, { Component } from "react";

//import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

function importAll(r) {
  return r.keys().map(r);
}
const imagesGallery = importAll(require.context('./content/gallery/', false, /\.(png|jpe?g|svg)$/));

class Gallery extends Component {
  render() {

    const images = imagesGallery.map(function (x) {
      return {
        original: x,
        thumbnail: x
      }
    });

    return (
      <ImageGallery items={images} style={{
        height: "500px"
      }} />
    );
  }

}

export default Gallery;