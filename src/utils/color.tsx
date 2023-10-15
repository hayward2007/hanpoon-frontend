class White {
  100: string = '#FFFFFF';
}
class Grey {
  100: string = '#F5F5F5';
  200: string = '#EAEBED';
  600: string = '#ADADAD';
  700: string = '#8E8E8E';
}

class Black {
  100: string = '#000000';
}

class NavigationBarColor {
  private static grey: Grey = new Grey();
  selected: string = new White()[100];
  unselected: string = NavigationBarColor.grey[600];
  background: string = new Black()[100];
  border: string = NavigationBarColor.grey[200];
}

export default class Color {
  static white: string = new White()[100];
  static black: string = new Black()[100];
  static grey: Grey = new Grey();

  static navigationBarColor: NavigationBarColor = new NavigationBarColor();
  static backGroundColor: string = '#F2F3F5';
}
