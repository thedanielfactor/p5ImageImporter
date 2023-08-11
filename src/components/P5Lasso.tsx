import React, { useState, useRef } from 'react';
import Sketch from 'react-p5';
import FileInput from './FileInput';

let cvs: any;
let img: any;
let pg: any;

export default function P5ImageImporter() {
  const [image, setImage] = useState<string | null>(null);

  function setup(p5: any, canvasParentRef: any) {
    cvs = p5.createCanvas(600, 600).parent(canvasParentRef);
    if (image) {
      p5.loadImage(image, (img: any) => {
        p5.image(img, 0, 0);
      });
    }
  }

  function draw(p5: any) {}

  function mouseReleased() {}

  return (
    <div>
      <FileInput selectImage={setImage} />
      {image && (
        <div>
          <Sketch setup={setup} draw={draw} mouseReleased={mouseReleased}/>
        </div>
      )}
    </div>
  );
}