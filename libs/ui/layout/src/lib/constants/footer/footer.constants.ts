import { IconStub } from '../../imports/models';
import type {
  FooterLink,
  FooterAssetsModel,
  FooterDataModel,
  FooterVMModel
} from '../../models';

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
const FooterLinkStub: FooterLink = {
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
 *   angular     : FooterLinkStub,
 *   tailwind    : FooterLinkStub,
 *   fontawesome : FooterLinkStub,
 *   firebase    : FooterLinkStub,
 *   by          : '',
 *   author      : '',
 *   github      : FooterLinkStub,
 *   linkedin    : FooterLinkStub,
 *   discord     : FooterLinkStub,
 *   email       : FooterLinkStub
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

  by: '',
  author: '',

  github: { ...FooterLinkStub },
  linkedin: { ...FooterLinkStub },
  discord: { ...FooterLinkStub },
  email: { ...FooterLinkStub }
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

// TODO: 🧐 Documentation Required
/**
 * Stub for `FooterVMModel`
 *
 * ```ts
 * const FooterVMStub: FooterVMModel = {
 *   assets : FooterAssetsStub,
 *   data   : FooterDataStub
 * };
 * ```
 */
export const FooterVMStub: FooterVMModel = {
  assets: { ...FooterAssetsStub },
  data: { ...FooterDataStub }
};
