import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import {
  Identification as Entity,
  Tenure as TenureEntity
} from '../../imports/entities';
import { Identification, Tenure as TenureModel } from '../../imports/models';

import { IdentificationService } from '../../services';

@Resolver(() => Entity)
export class IdentificationResolver {
  constructor(private _service: IdentificationService) {}

  @ResolveField(() => TenureEntity, { name: 'validity' })
  async getTenure(@Parent() { id }: Entity): Promise<TenureModel> {
    return await this._service.getTenure(id);
  }

  @Mutation(() => Entity)
  async associateIdentificationWithTenure(
    @Args('identificationId', { type: () => String }) identificationId: string,
    @Args('tenureId', { type: () => String }) tenureId: string
  ): Promise<Identification> {
    return await this._service.associateIdentificationWithTenure(
      identificationId,
      tenureId
    );
  }
}
