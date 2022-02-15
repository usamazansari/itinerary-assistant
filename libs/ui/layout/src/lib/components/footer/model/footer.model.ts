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
   * @param {IFooterLink} [init=FooterLinkStub]
   * @memberof FooterLink
   */
  constructor(init: Partial<IFooterLink> = FooterLinkStub) {
    this.name = init.name ?? FooterLinkStub.name;
    this.url = init.url ?? FooterLinkStub.url;
    this.icon = init.icon ?? FooterLinkStub.icon;
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
   * @param {IFooterAssets} [init=FooterAssetsStub]
   * @memberof FooterAssets
   */
  constructor(init: Partial<IFooterAssets> = FooterAssetsStub) {
    this.madeWith = init.madeWith ?? FooterAssetsStub.madeWith;
    this.heart = init.heart ?? FooterAssetsStub.heart;
    this.using = init.using ?? FooterAssetsStub.using;
    this.angular = init.angular ?? FooterAssetsStub.angular;
    this.tailwind = init.tailwind ?? FooterAssetsStub.tailwind;
    this.fontawesome = init.fontawesome ?? FooterAssetsStub.fontawesome;
    this.firebase = init.firebase ?? FooterAssetsStub.firebase;
    this.nx = init.nx ?? FooterAssetsStub.nx;
    this.by = init.by ?? FooterAssetsStub.by;
    this.author = '';
    this.github = init.github ?? FooterAssetsStub.github;
    this.linkedin = init.linkedin ?? FooterAssetsStub.linkedin;
    this.discord = init.discord ?? FooterAssetsStub.discord;
    this.email = init.email ?? FooterAssetsStub.email;
    this.location = init.location ?? FooterAssetsStub.location;
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

  constructor(init: Partial<FooterData> = FooterDataStub) {
    this.fullname = init.fullname ?? FooterDataStub.fullname;
    this.github = init.github ?? FooterDataStub.github;
    this.linkedin = init.linkedin ?? FooterDataStub.linkedin;
    this.discord = init.discord ?? FooterDataStub.discord;
    this.email = init.email ?? FooterDataStub.email;
    this.location = init.location ?? FooterDataStub.location;
  }
}

/**
 * Footer Snackbar Message Model.
 *
 * ```ts
 * interface IFooterSnackbarMessage {
 *   success : SnackbarMessage;
 *   fail    : SnackbarMessage;
 * }
 * ```
 *
 * @interface IFooterSnackbarMessage
 */
interface IFooterSnackbarMessage {
  success: SnackbarMessage;
  fail: SnackbarMessage;
}

/**
 * Stub for Footer Snackbar Message.
 *
 * ```ts
 * const FooterSnackbarMessageStub: IFooterSnackbarMessage = {
 *   success : new SnackbarMessage(),
 *   fail    : new SnackbarMessage()
 * }
 * ```
 */
const FooterSnackbarMessageStub: IFooterSnackbarMessage = {
  success: new SnackbarMessage(),
  fail: new SnackbarMessage()
};

/**
 * Footer Snackbar Message class.
 *
 * @export
 * @class FooterSnackbarMessage
 * @implements {IFooterSnackbarMessage}
 */
export class FooterSnackbarMessage implements IFooterSnackbarMessage {
  success: SnackbarMessage;
  fail: SnackbarMessage;

  /**
   * ### Footer Snackbar Message
   *
   * Creates an instance of FooterSnackbarMessage.
   *
   * ```ts
   * const footerSnackbarMessage = new FooterSnackbarMessage({
   *   success : new SnackbarMessage(),
   *   fail    : new SnackbarMessage()
   * })
   * ```
   *
   * @param {Partial<IFooterSnackbarMessage>} [init=FooterSnackbarMessageStub]
   * @memberof FooterSnackbarMessage
   */
  constructor(
    init: Partial<IFooterSnackbarMessage> = FooterSnackbarMessageStub
  ) {
    this.success = init.success ?? FooterSnackbarMessageStub.success;
    this.fail = init.fail ?? FooterSnackbarMessageStub.fail;
  }
}

/**
 * Footer Strings Model.
 *
 * ```ts
 * interface IFooterStrings {
 *   snackbar  : {
 *     discord : FooterSnackbarMessage;
 *     email   : FooterSnackbarMessage;
 *   };
 * }
 * ```
 *
 * @interface IFooterStrings
 */
interface IFooterStrings {
  snackbar: {
    discord: FooterSnackbarMessage;
    email: FooterSnackbarMessage;
  };
}

/**
 * Stub for Footer Strings.
 *
 * ```ts
 * const FooterStringsStub: IFooterStrings = {
 *   snackbar  : {
 *     discord : new FooterSnackbarMessage(),
 *     email   : new FooterSnackbarMessage()
 *   }
 * }
 * ```
 */
const FooterStringsStub: IFooterStrings = {
  snackbar: {
    discord: new FooterSnackbarMessage(),
    email: new FooterSnackbarMessage()
  }
};

/**
 * Footer Strings class.
 *
 * @export
 * @class FooterStrings
 * @implements {IFooterStrings}
 */
export class FooterStrings implements IFooterStrings {
  snackbar: {
    discord: FooterSnackbarMessage;
    email: FooterSnackbarMessage;
  };

  /**
   * ### Footer Strings
   *
   * Creates an instance of FooterStrings.
   *
   * ```ts
   * const footerStrings: IFooterStrings = new FooterStrings({
   *   snackbar  : {
   *     discord : new FooterSnackbarMessage(),
   *     email   : new FooterSnackbarMessage()
   *   }
   * })
   * ```
   *
   * @param {Partial<IFooterStrings>} [init=FooterStringsStub]
   * @memberof FooterStrings
   */
  constructor(init: Partial<IFooterStrings> = FooterStringsStub) {
    this.snackbar = {
      discord:
        init.snackbar?.discord ?? FooterStringsStub.snackbar.discord,
      email: init.snackbar?.email ?? FooterStringsStub.snackbar.email
    };
  }
}
