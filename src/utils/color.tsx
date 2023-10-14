class Grey {
  100: string = '#F5F5F5';
}

class NavigationBarColor {
  selected: string = '#000000';
  unselected: string = '#ADADAD';
  background: string = '#FFFFFF';
  border: string = '#EAEBED';
}

export default class Color {
  static white: string = '#FFFFFF';
  static black: string = '#000000';
  static grey: Grey = new Grey();

  static navigationBarColor: NavigationBarColor = new NavigationBarColor();
  static backGroundColor: string = '#F2F3F5';
}
