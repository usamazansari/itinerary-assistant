// TODO: Usama Ansari - Update the footer

import { Icon, Image, SnackbarMessage } from '../imports';

export type FooterIconType = Icon | Image | null;

/**
 * Footer Link Model.
 *
 * @export
 * @interface IFooterLink
 */
export interface IFooterLink {
  /**
   * Name of the footer link
   *
   * @type {(string)}
   * @memberof IFooterLink
   */
  name: string;

  /**
   * URL of the footer link
   *
   * @type {(string)}
   * @memberof IFooterLink
   */
  url: string;

  /**
   * Icon of the footer link
   *
   * @type {FooterIconType}
   * @memberof IFooterLink
   */
  icon: FooterIconType;
}

/**
 * Stub for Footer Link model.
 *
 * ```ts
 * const FooterLinkStub: IFooterLink = {
 *   name : '',
 *   url  : '',
 *   icon : null
 * }
 * ```
 */
const FooterLinkStub: IFooterLink = {
  name: '',
  url: '',
  icon: null
};

/**
 * Footer Model class.
 *
 * @private Interface for internal use
 * @interface FooterLink
 */
export class FooterLink implements IFooterLink {
  name: string;
  url: string;
  icon: FooterIconType;

  /**
   * ### Footer Link
   *
   * Creates an instance of FooterLink.
   *
   * ```ts
   * const FooterLink: IFooterLink = new FooterLink({
   *   name : '',
   *   url  : '',
   *   icon : null
   * });
   * ```
   *
   * @param {IFooterLink} [init={ ...FooterLinkStub }]
   * @memberof FooterLink
   */
  constructor(
    init: IFooterLink = { ...FooterLinkStub }
  ) {
    this.name = init.name;
    this.url = init.url;
    this.icon = init.icon;
  }
}

/**
 * Assets for `FooterComponent`
 *
 * ```ts
 * interface IFooterAssets {
 *   madeWith    : string;
 *   heart       : FooterLink;
 *   using       : string;
 *   angular     : FooterLink;
 *   tailwind    : FooterLink;
 *   fontawesome : FooterLink;
 *   firebase    : FooterLink;
 *   nx          : FooterLink;
 *   by          : string;
 *   author      : string;
 *   github      : FooterLink;
 *   linkedin    : FooterLink;
 *   discord     : FooterLink;
 *   email       : FooterLink;
 *   location    : FooterLink;
 * }
 * ```
 *
 * @export
 * @interface IFooterAssets
 */
export interface IFooterAssets {
  /**
   * Footer text - `Made with`
   *
   * @type {(string)}
   * @memberof IFooterAssets
   */
  madeWith: string;

  /**
   * Spreading Love
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  heart: FooterLink;

  /**
   * Footer text - `using`
   *
   * @type {(string)}
   * @memberof IFooterAssets
   */
  using: string;

  /**
   * Angular
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  angular: FooterLink;

  /**
   * Tailwind
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  tailwind: FooterLink;

  /**
   * Font Awesome
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  fontawesome: FooterLink;

  /**
   * Firebase
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  firebase: FooterLink;

  /**
   * Nx
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  nx: FooterLink;

  /**
   * by
   *
   * @type {(string)}
   * @memberof IFooterAssets
   */
  by: string;

  /**
   * GitHub
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  github: FooterLink;

  /**
   * LinkedIn
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  linkedin: FooterLink;

  /**
   * Discord
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  discord: FooterLink;

  /**
   * Email
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  email: FooterLink;

  /**
   * Location
   *
   * @type {FooterLink}
   * @memberof IFooterAssets
   */
  location: FooterLink;
}

/**
 * Stub for Footer Assets.
 *
 * ```ts
 * const FooterAssetsStub: IFooterAssets = {
 *   madeWith    : '',
 *   heart       : new FooterLink(),
 *   using       : '',
 *   angular     : new FooterLink(),
 *   tailwind    : new FooterLink(),
 *   fontawesome : new FooterLink(),
 *   firebase    : new FooterLink(),
 *   nx          : new FooterLink(),
 *   by          : '',
 *   github      : new FooterLink(),
 *   linkedin    : new FooterLink(),
 *   discord     : new FooterLink(),
 *   email       : new FooterLink(),
 *   location    : new FooterLink()
 * }
 * ```
 */
const FooterAssetsStub: IFooterAssets = {
  madeWith: '',
  heart: new FooterLink(),
  using: '',
  angular: new FooterLink(),
  tailwind: new FooterLink(),
  fontawesome: new FooterLink(),
  firebase: new FooterLink(),
  nx: new FooterLink(),
  by: '',
  github: new FooterLink(),
  linkedin: new FooterLink(),
  discord: new FooterLink(),
  email: new FooterLink(),
  location: new FooterLink()
};

/**
 * Footer Model class.
 *
 * @export
 * @class FooterAssets
 * @implements {IFooterAssets}
 */
export class FooterAssets implements IFooterAssets {
  madeWith: string;
  heart: FooterLink;
  using: string;
  angular: FooterLink;
  tailwind: FooterLink;
  fontawesome: FooterLink;
  firebase: FooterLink;
  nx: FooterLink;
  by: string;
  author: string;
  github: FooterLink;
  linkedin: FooterLink;
  discord: FooterLink;
  email: FooterLink;
  location: FooterLink;

  /**
   * ### Footer Assets
   *
   * Creates an instance of FooterAssets.
   *
   * ```ts
   * const FooterAssets: IFooterAssets = new FooterAssets({
   *   madeWith    : '',
   *   heart       : new FooterLink(),
   *   using       : '',
   *   angular     : new FooterLink(),
   *   tailwind    : new FooterLink(),
   *   fontawesome : new FooterLink(),
   *   firebase    : new FooterLink(),
   *   nx          : new FooterLink(),
   *   by          : '',
   *   author      : '',
   *   github      : new FooterLink(),
   *   linkedin    : new FooterLink(),
   *   discord     : new FooterLink(),
   *   email       : new FooterLink(),
   *   location    : new FooterLink()
   * });
   * ```
   * @param {IFooterAssets} [init={ ...FooterAssetsStub }]
   * @memberof FooterAssets
   */
  constructor(
    init: IFooterAssets = { ...FooterAssetsStub }
  ) {
    this.madeWith = init.madeWith;
    this.heart = init.heart;
    this.using = init.using;
    this.angular = init.angular;
    this.tailwind = init.tailwind;
    this.fontawesome = init.fontawesome;
    this.firebase = init.firebase;
    this.nx = init.nx;
    this.by = init.by;
    this.author = '';
    this.github = init.github;
    this.linkedin = init.linkedin;
    this.discord = init.discord;
    this.email = init.email;
    this.location = init.location;
  }
}

/**
 * Footer Data
 *
 * ```ts
 * interface FooterData {
 *   fullname : string;
 *   github   : string;
 *   linkedin : string;
 *   discord  : string;
 *   email    : string;
 *   location : string;
 * }
 * ```
 *
 * @export
 * @interface FooterData
 */
export interface FooterData {
  /**
   * Name of the Author - `Usama Ansari`
   *
   * @type {(string)}
   * @memberof FooterData
   */
  fullname: string;

  /**
   * GitHub Account - `usama251993`
   *
   * @type {string}
   * @memberof FooterData
   */
  github: string;

  /**
   * LinkedIn Account - `usama-ansari-81380080`
   *
   * @type {string}
   * @memberof FooterData
   */
  linkedin: string;

  /**
   * Discord ID - `usama251993#5438`
   *
   * @type {string}
   * @memberof FooterData
   */
  discord: string;

  /**
   * Email ID - `usama251993@gmail.com`
   *
   * @type {string}
   * @memberof FooterData
   */
  email: string;

  /**
   * Location - https://goo.gl/maps/X6syXXRrRML4FUgc6
   *
   * @type {string}
   * @memberof FooterData
   */
  location: string;
}

/**
 * Stub for Footer Data.
 *
 * ```ts
 * const FooterDataStub: IFooterData = {
 *   fullname : '',
 *   github   : '',
 *   linkedin : '',
 *   discord  : '',
 *   email    : '',
 *   location : ''
 * }
 * ```
 */
const FooterDataStub: FooterData = {
  fullname: '',
  github: '',
  linkedin: '',
  discord: '',
  email: '',
  location: ''
};

/**
 * Footer Data Model class.
 *
 * @export
 * @class FooterData
 */
export class FooterData {
  fullname: string;
  github: string;
  linkedin: string;
  discord: string;
  email: string;
  location: string;

  constructor(
    init: FooterData = { ...FooterDataStub }
  ) {
    this.fullname = init.fullname;
    this.github = init.github;
    this.linkedin = init.linkedin;
    this.discord = init.discord;
    this.email = init.email;
    this.location = init.location;
  }
}

interface IFooterSnackbarMessage {
  success: SnackbarMessage;
  fail: SnackbarMessage;
}

const FooterSnackbarMessageStub: IFooterSnackbarMessage = {
  success: new SnackbarMessage(),
  fail: new SnackbarMessage()
};

export class FooterSnackbarMessage implements IFooterSnackbarMessage {
  success: SnackbarMessage;
  fail: SnackbarMessage;

  constructor(
    init: IFooterSnackbarMessage = { ...FooterSnackbarMessageStub }
  ) {
    this.success = init.success;
    this.fail = init.fail;
  }
}

interface IFooterStrings {
  snackbar: {
    discord: FooterSnackbarMessage;
    email: FooterSnackbarMessage;
  };
}

const FooterStringsStub: IFooterStrings = {
  snackbar: {
    discord: new FooterSnackbarMessage(),
    email: new FooterSnackbarMessage()
  }
};


export class FooterStrings implements IFooterStrings {
  snackbar: {
    discord: FooterSnackbarMessage;
    email: FooterSnackbarMessage;
  };

  constructor(
    init: IFooterStrings = { ...FooterStringsStub }
  ) {
    this.snackbar = {
      discord: init.snackbar.discord,
      email: init.snackbar.email
    };
  }
}
