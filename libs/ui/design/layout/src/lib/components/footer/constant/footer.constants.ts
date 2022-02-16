import { Icon, Image, SnackbarMessage } from '../imports';
import {
  FooterAssets,
  FooterLink,
  FooterSnackbarMessage,
  FooterStrings
} from '..';

/**
 * Footer Assets
 */
export const _FooterAssets: FooterAssets = new FooterAssets({
  madeWith: 'Made with',

  heart: new FooterLink({
    name: '',
    url: '',
    icon: new Icon({
      style: 'fas',
      name: 'heart'
    })
  }),

  using: 'using',

  angular: new FooterLink({
    name: 'Angular',
    url: 'https://angular.io/',
    icon: new Icon({
      style: 'fab',
      name: 'angular'
    })
  }),
  tailwind: new FooterLink({
    name: 'Tailwind',
    url: 'https://tailwindcss.com/',
    icon: new Image({
      src: 'assets/media/images/tailwindcss.svg',
      alt: 'Tailwind'
    })
  }),
  fontawesome: new FooterLink({
    name: 'Font Awesome',
    url: 'https://fontawesome.com/',
    icon: new Icon({
      style: 'fab',
      name: 'fort-awesome-alt'
    })
  }),
  nx: new FooterLink({
    name: 'Nx',
    url: 'https://nx.dev/',
    icon: new Image({
      src: 'assets/media/images/nx.svg',
      alt: 'Nx'
    })
  }),
  firebase: new FooterLink({
    name: 'Nx',
    url: 'https://nx.dev/',
    icon: new Image({
      src: 'assets/media/images/firebase.svg',
      alt: 'Firebase'
    })
  }),

  by: 'by',

  github: new FooterLink({
    name: 'GitHub',
    url: '',
    icon: new Icon({
      style: 'fab',
      name: 'github'
    })
  }),
  linkedin: new FooterLink({
    name: 'LinkedIn',
    url: '',
    icon: new Icon({
      style: 'fab',
      name: 'linkedin'
    })
  }),
  discord: new FooterLink({
    name: 'Discord',
    url: '',
    icon: new Icon({
      style: 'fab',
      name: 'discord'
    })
  }),
  email: new FooterLink({
    name: 'E-mail',
    url: '',
    icon: new Icon({
      style: 'fas',
      name: 'envelope-open-text'
    })
  }),
  location: new FooterLink({
    name: 'Location',
    url: '',
    icon: new Icon({
      style: 'fas',
      name: 'map-marker-alt'
    })
  })
});

export const _FooterStrings: FooterStrings = new FooterStrings({
  snackbar: {
    discord: new FooterSnackbarMessage({
      success: new SnackbarMessage({
        message: 'Discord ID Copied!',
        action: '👍'
      }),
      fail: new SnackbarMessage({
        message: 'Some problem accessing the Clipboard',
        action: '🙁'
      })
    }),
    email: new FooterSnackbarMessage({
      success: new SnackbarMessage({
        message: 'Email ID Copied!',
        action: '👍'
      }),
      fail: new SnackbarMessage({
        message: 'Some problem accessing the Clipboard',
        action: '🙁'
      })
    })
  }
});
