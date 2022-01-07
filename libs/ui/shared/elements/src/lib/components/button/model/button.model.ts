import { Icon } from '../imports';

enum ButtonStyle {
  default = 'button',
  flat = 'flat',
  raised = 'raised',
  stroked = 'stroked'
}

enum ButtonType {
  button = 'button',
  submit = 'submit'
}

interface IButton {
  icon: Icon;
  text: string;
  style: ButtonStyle;
  type: ButtonType;
}

const ButtonStub: IButton = {
  icon: new Icon(),
  text: '',
  style: ButtonStyle.default,
  type: ButtonType.button
};

export class Button implements IButton {
  icon: Icon;
  text: string;
  style: ButtonStyle;
  type: ButtonType;

  constructor(
    init: Partial<IButton> = ButtonStub
  ) {
    this.icon = init.icon ?? ButtonStub.icon;
    this.text = init.text ?? ButtonStub.text;
    this.style = init.style ?? ButtonStub.style;
    this.type = init.type ?? ButtonStub.type;
  }
}
