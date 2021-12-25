import { MatSnackBarConfig } from '@angular/material/snack-bar';

// TODO: Usama Ansari - 🧐 Documentation required

interface ISnackbarMessage<SnackbarData = unknown> {
  message: string;
  action: string;
  config?: MatSnackBarConfig<SnackbarData> | unknown | null;
}

const SnackbarMessageStub: ISnackbarMessage<unknown> = {
  message: '',
  action: '',
  config: null
};

export class SnackbarMessage<SnackbarData = unknown> implements ISnackbarMessage<SnackbarData> {
  message: string;
  action: string;
  config?: MatSnackBarConfig<SnackbarData> | unknown | null;

  constructor(
    init: ISnackbarMessage = { ...SnackbarMessageStub }
  ) {
    this.message = init.message;
    this.action = init.action;
    this.config = init.config;
  }
}
