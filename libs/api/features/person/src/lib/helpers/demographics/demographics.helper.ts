import { Injectable } from '@nestjs/common';

import { DemographicsDTO } from '../../imports/models';

@Injectable()
export class DemographicsHelper {
  generateCreateObject(create: { id: string; demographics: DemographicsDTO }) {
    const {
      id,
      demographics: { firstName, lastName, middleName, nickname, salutation }
    } = create;

    let _ = {};
    if (!!firstName) _ = { ..._, firstName };
    if (!!lastName) _ = { ..._, lastName };
    if (!!middleName) _ = { ..._, middleName };
    if (!!nickname) _ = { ..._, nickname };
    if (!!salutation) _ = { ..._, salutation };

    return { id, ..._ };
  }

  generateUpdateObject(demographics: DemographicsDTO) {
    const { firstName, lastName, middleName, nickname, salutation } =
      demographics;

    let _ = {};
    if (!!firstName) _ = { ..._, ['demographics.firstName']: firstName };
    if (!!lastName) _ = { ..._, ['demographics.lastName']: lastName };
    if (!!middleName) _ = { ..._, ['demographics.middleName']: middleName };
    if (!!nickname) _ = { ..._, ['demographics.nickname']: nickname };
    if (!!salutation) _ = { ..._, ['demographics.salutation']: salutation };
    return _;
  }
}
