import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

import {
  Identification as IdentificationEntity,
  Tenure
} from '../../imports/entities';
import { Identification as IdentificationModel } from '../../imports/models';

import { IdentificationService } from '../../services';

@Resolver(() => IdentificationEntity)
export class IdentificationResolver {
  constructor(private _service: IdentificationService) {}

  @ResolveField(() => Tenure, { name: 'validity' })
  async getTenure(
    @Parent() Identification: IdentificationEntity
  ): Promise<Tenure> {
    return await this._service.getTenure(
      new IdentificationModel({ ...Identification })
    );
  }
}
