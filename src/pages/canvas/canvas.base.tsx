import React, { Component } from 'react';

// interface CanvasProps {
//   count: number;
// }

class CanvasBase extends Component {
  private canvasRef!: HTMLCanvasElement | null;

  componentDidMount = () => {
    this.initCanvas();
  }

  canvasRefCb = (el: HTMLCanvasElement|null):void => {
    this.canvasRef = el;
  }

  initCanvas = () => {
    console.log('this.canvasRef', this.canvasRef);
    const canvas = this.canvasRef;
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
      }
    }
  }
  

  render() {
    // const { count } = this.props;

    return (
      <div>
        <canvas ref={this.canvasRefCb}></canvas>
        {/* <div>{count}</div> */}
      </div>
    )
  }
}

export default CanvasBase;