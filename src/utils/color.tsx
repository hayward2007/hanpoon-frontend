class GrayScale {
  0: string = '#FFFFFF';
  100: string = '#F5F5F5';
  200: string = '#F2F3F5';
  300: string = '#EAEBED';
  600: string = '#ADADAD';
  700: string = '#8E8E8E';
  1000: string = '#000000';
}

class NavigationBarColor {
  private gray: GrayScale = new GrayScale();
  selected: string = this.gray[1000];
  unselected: string = this.gray[600];
  background: string = this.gray[0];
  border: string = this.gray[300];
}

export default class Color {
  static gray: GrayScale = new GrayScale();
  static white: string = this.gray[0];
  static black: string = this.gray[1000];
  static brand: string = '#4C96EE';
  static background: string = this.gray[200];

  static navigationbar: NavigationBarColor = new NavigationBarColor();
}
