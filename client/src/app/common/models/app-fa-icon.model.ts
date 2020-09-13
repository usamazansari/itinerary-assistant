type AppFaIconStyle =
  | 'fas'
  | 'far'
  | 'fab';

type AppFaIconSize =
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

type AppFaIconRotate =
  | 90
  | 180
  | 270;

type AppFaIconFlip =
  | 'horizontal'
  | 'vertical'
  | 'both';

type AppFaIconPull =
  | 'left'
  | 'right';

interface AppFaIconStackIconModel {
  icon: AppFaIconModel;
  stackItemSize?: AppFaIconSize;
}

export interface AppFaIconModel {
  style: AppFaIconStyle;
  name: string;
  morph?: {
    size?: AppFaIconSize;
    rotate?: AppFaIconRotate;
    flip?: AppFaIconFlip;
    fixedWidth?: boolean;
    animate?: {
      spin?: boolean;
      pulse?: boolean;
    };
    border?: boolean;
    pull?: AppFaIconPull;
  };
  powerTx?: string;
  mask?: AppFaIconModel;
  inverse?: boolean;
}

export interface AppFaIconLayerModel {
  fixedWidth?: boolean;
  icons: AppFaIconModel[];
  counter?: string;
}

export interface AppFaIconStackModel {
  background: AppFaIconStackIconModel;
  foreground: AppFaIconStackIconModel;
}
