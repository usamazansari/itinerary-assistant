import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import {
  Identification as Entity,
  Tenure as TenureEntity
} from '../../imports/entities';
import { Identification, Tenure as TenureModel } from '../../imports/models';

import { IdentificationInput } from '../../inputs';
import { IdentificationService } from '../../services';

@Resolver(() => Entity)
export class IdentificationResolver {
  constructor(private _service: IdentificationService) {}

  @Query(() => Entity)
  async getIdentification(
    @Args('id', { type: () => String }) id: string
  ): Promise<Identification> {
    return await this._service.getIdentification(id);
  }

  @ResolveField(() => TenureEntity, { name: 'validity' })
  async getTenure(@Parent() { id }: Entity): Promise<TenureModel> {
    return await this._service.getTenure(id);
  }

  @Mutation(() => Entity)
  async createIdentification(
    @Args('identification', { type: () => IdentificationInput })
    identification: Identification
  ): Promise<Identification> {
    return await this._service.createIdentification(identification);
  }

  @Mutation(() => Entity)
  async updateIdentification(
    @Args('id', { type: () => String }) id: string,
    @Args('identification', { type: () => IdentificationInput })
    identification: Identification
  ): Promise<Identification> {
    return await this._service.updateIdentification(id, identification);
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
