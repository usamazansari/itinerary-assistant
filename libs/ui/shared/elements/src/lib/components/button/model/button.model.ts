import { Icon } from '../imports';

// TODO: Usama Ansari - Button can have icon / text / style(flat/raised/stroked) / type (button/submit)

interface IButton {
  icon: Icon;
  text: string;
}

const ButtonStub: IButton = {
  icon: new Icon(),
  text: ''
};

export class Button implements IButton {
  icon: Icon;
  text: string;

  constructor(
    init: Partial<IButton> = ButtonStub
  ) {
    this.icon = init.icon ?? ButtonStub.icon;
    this.text = init.text ?? ButtonStub.text;
  }
}
