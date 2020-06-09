import React, { Component } from 'react';




// const CanvasBase = () => {
//   const cv = useRef(null);


//   return (
//     <div>
//       <canvas ref={cv}></canvas>
//     </div>
    
//   )
// }

interface CanvasState {
  canvasRef: any;
}

interface CanvasBase{
  canvasRef: any;
}

interface CanvasProps {
  count: number;
}

class CanvasBase extends Component<CanvasProps, CanvasState> {
  // constructor() {
  //   super({});
    
  // }

  componentDidMount = () => {
    this.initCanvas();
  }

  canvasRefCb = (el: any) => {
    this.canvasRef = el;
  }

  initCanvas = () => {
    console.log('this.canvasRef', this.canvasRef);
    const canvas = this.canvasRef;
    if (canvas && canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (10, 10, 55, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (30, 30, 55, 50);
    }
  }

  render() {
    const { count } = this.props;

    return (
      <div>
        <canvas ref={this.canvasRefCb}></canvas>
        <div>{count}</div>
      </div>
    )
  }
}

export default CanvasBase;