import { Injectable } from '@nestjs/common';

import { SocialConnectionDTO } from '../../imports/models';

@Injectable()
export class SocialConnectionHelper {
  generateCreateObject(create: {
    id: string;
    socialConnection: SocialConnectionDTO;
  }) {
    const {
      id,
      socialConnection: { name, url }
    } = create;

    let _ = {};
    if (!!name) _ = { ..._, name };
    if (!!url) _ = { ..._, url };

    return { id, ..._ };
  }

  generateUpdateObject(socialConnection: SocialConnectionDTO) {
    const { name, url } = socialConnection;

    let _ = {};
    if (!!name) _ = { ..._, ['socialConnection.name']: name };
    if (!!url) _ = { ..._, ['socialConnection.url']: url };
    return _;
  }
}
