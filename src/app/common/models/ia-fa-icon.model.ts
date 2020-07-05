type IaFaIconStyle =
  | 'fas'
  | 'far'
  | 'fab';

type IaFaIconSize =
  | 'xs'
  | 'sm'
  | 'lg'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x';

type IaFaIconRotate =
  | 90
  | 180
  | 270;

type IaFaIconFlip =
  | 'horizontal'
  | 'vertical'
  | 'both';

type IaFaIconPull =
  | 'left'
  | 'right';

interface IaFaIconStackIconModel {
  icon: IaFaIconModel;
  stackItemSize?: IaFaIconSize;
}

export interface IaFaIconModel {
  style: IaFaIconStyle;
  name: string;
  morph?: {
    size?: IaFaIconSize;
    rotate?: IaFaIconRotate;
    flip?: IaFaIconFlip;
    fixedWidth?: boolean;
    animate?: {
      spin?: boolean;
      pulse?: boolean;
    };
    border?: boolean;
    pull?: IaFaIconPull;
  };
  powerTx?: string;
  mask?: IaFaIconModel;
  inverse?: boolean;
}

export interface IaFaIconLayerModel {
  fixedWidth?: boolean;
  icons: IaFaIconModel[];
  counter?: string;
}

export interface IaFaIconStackModel {
  background: IaFaIconStackIconModel;
  foreground: IaFaIconStackIconModel;
}
