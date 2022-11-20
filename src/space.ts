export type MouseState = {
  pressed: 'left' | 'right' | 'none';
  x: number;
  y: number;
  r: number;
};

class Space {
  mouseState: MouseState = { pressed: 'none', x: 0, y: 0, r: 20 };

  constructor() {}

  step() {}

  render() {}

  setMouseState(mouseState: MouseState) {
    this.mouseState = mouseState;
  }
}

export default Space;
