import { IconStub } from '../imports';
import type {
  FooterAssetsModel,
  FooterDataModel,
  FooterLinkModel,
  FooterSnackbarMessageModel,
  FooterStringsModel
} from '..';

/**
 * Stub for `FooterLink`
 *
 * ```ts
 * const FooterLinkStub: FooterLink = {
 *   icon : { ...IconStub },
 *   name : '',
 *   url  : ''
 * };
 * ```
 *
 */
const FooterLinkStub: FooterLinkModel = {
  icon: { ...IconStub },
  name: '',
  url: ''
};

/**
 * Stub for `FooterAssetsModel`
 *
 * ```ts
 * const FooterAssetsStub: FooterAssetsModel = {
 *   madeWith    : '',
 *   heart       : FooterLinkStub,
 *   using       : '',
 *
 *   angular     : FooterLinkStub,
 *   tailwind    : FooterLinkStub,
 *   fontawesome : FooterLinkStub,
 *   firebase    : FooterLinkStub,
 *   nx          : FooterLinkStub,
 *
 *   by          : '',
 *
 *   github      : FooterLinkStub,
 *   linkedin    : FooterLinkStub,
 *   discord     : FooterLinkStub,
 *   email       : FooterLinkStub,
 *   location    : FooterLinkStub
 * };
 * ```
 */
export const FooterAssetsStub: FooterAssetsModel = {
  madeWith: '',
  heart: { ...FooterLinkStub },
  using: '',

  angular: { ...FooterLinkStub },
  tailwind: { ...FooterLinkStub },
  fontawesome: { ...FooterLinkStub },
  firebase: { ...FooterLinkStub },
  nx: { ...FooterLinkStub },

  by: '',

  github: { ...FooterLinkStub },
  linkedin: { ...FooterLinkStub },
  discord: { ...FooterLinkStub },
  email: { ...FooterLinkStub },
  location: { ...FooterLinkStub }
};

/**
 * Stub for `FooterDataModel`
 *
 * ```ts
 * const FooterDataStub: FooterDataModel = {
 *   fullname : '',
 *   github   : '',
 *   linkedin : '',
 *   discord  : '',
 *   email    : '',
 *   location : ''
 * };
 * ```
 */
export const FooterDataStub: FooterDataModel = {
  fullname: '',
  github: '',
  linkedin: '',
  discord: '',
  email: '',
  location: ''
};

/**
 * Stub for `FooterSnackbarMessageModel`
 *
 * ```ts
 * const FooterSnackbarMessageStub: FooterSnackbarMessageModel = {
 *   success : { action: '', message: '' },
 *   fail    : { action: '', message: '' }
 * };
 * ```
 */
const FooterSnackbarMessageStub: FooterSnackbarMessageModel = {
  success: { action: '', message: '' },
  fail: { action: '', message: '' }
};

/**
 * Stub for `FooterStringsModel`
 *
 * ```ts
 * const FooterStringsStub: FooterStringsModel = {
 *   snackbar  : {
 *     discord : { ...FooterSnackbarMessageStub },
 *     email   : { ...FooterSnackbarMessageStub }
 *   }
 * }
 * ```
 */
export const FooterStringsStub: FooterStringsModel = {
  snackbar: {
    discord: { ...FooterSnackbarMessageStub },
    email: { ...FooterSnackbarMessageStub }
  }
};

/**
 * Footer Assets
 */
export const FooterAssets: FooterAssetsModel = {
  madeWith: 'Made with',

  heart: {
    name: '',
    url: '',
    icon: { style: 'fas', name: 'heart' } // fetch icon names and styles from constants
  },

  using: 'using',

  angular: {
    name: 'Angular',
    url: 'https://angular.io/',
    icon: { style: 'fab', name: 'angular' }
  },
  tailwind: {
    name: 'Tailwind',
    url: 'https://tailwindcss.com/',
    icon: { src: 'assets/media/images/tailwindcss.svg', alt: 'Tailwind' }
  },
  fontawesome: {
    name: 'Font Awesome',
    url: 'https://fontawesome.com/',
    icon: { style: 'fab', name: 'fort-awesome-alt' }
  },
  nx: {
    name: 'Nx',
    url: 'https://nx.dev/',
    icon: { src: 'assets/media/images/nx.svg', alt: 'Nx' }
  },
  firebase: {
    name: 'Nx',
    url: 'https://nx.dev/',
    icon: { src: 'assets/media/images/firebase.svg', alt: 'Nx' }
  },

  by: 'by',

  github: {
    name: 'GitHub',
    url: '',
    icon: { style: 'fab', name: 'github' }
  },
  linkedin: {
    name: 'LinkedIn',
    url: '',
    icon: { style: 'fab', name: 'linkedin' }
  },
  discord: {
    name: 'Discord',
    url: '',
    icon: { style: 'fab', name: 'discord' }
  },
  email: {
    name: 'E-mail',
    url: '',
    icon: { style: 'fas', name: 'envelope-open-text' }
  },
  location: {
    name: 'Location',
    url: '',
    icon: { style: 'fas', name: 'map-marker-alt' }
  }
};

export const FooterStrings: FooterStringsModel = {
  snackbar: {
    discord: {
      success: {
        message: 'Discord ID Copied!',
        action: '👍'
      },
      fail: {
        message: 'Some problem accessing the Clipboard',
        action: '🙁'
      }
    },
    email: {
      success: {
        message: 'Email ID Copied!',
        action: '👍'
      },
      fail: {
        message: 'Some problem accessing the Clipboard',
        action: '🙁'
      }
    }
  }
};
