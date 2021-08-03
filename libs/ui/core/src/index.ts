export * from './lib/core.module';

export {} from './lib/models/core.model';
export { IconModel, ICON_STUB } from './lib/models/icon/icon.model';
export { RouterPayloadModel } from './lib/models/router/router.model';
export { ImageModel, IMAGE_STUB } from './lib/models/image/image.model';

export { AUTHOR, APPLICATION_NAME, FIREBASE_CONFIG } from './lib/constants';
export {} from './lib/constants/clipboard/clipboard.constants';
export {} from './lib/constants/router/router.constants';
export {} from './lib/constants/snackbar/snackbar.constants';

export { ClipboardService } from './lib/services/clipboard/clipboard.service';
export { RouterService } from './lib/services/router/router.service';
export { SnackbarService } from './lib/services/snackbar/snackbar.service';
