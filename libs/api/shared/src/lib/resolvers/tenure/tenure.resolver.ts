import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Tenure as Entity } from '../../imports/entities';
import { TenureInput } from '../../inputs';
import { Tenure } from '../../imports/models';

import { TenureService } from '../../services';

@Resolver(() => Entity)
export class TenureResolver {
  constructor(private _service: TenureService) {}

  @Query(() => Entity)
  async getTenure(
    @Args('id', { type: () => String }) id: string
  ): Promise<Tenure> {
    return await this._service.getTenure(id);
  }

  @Mutation(() => Entity)
  async createTenure(
    @Args('tenure', { type: () => TenureInput }) tenure: Tenure
  ): Promise<Tenure> {
    return await this._service.createTenure(tenure);
  }

  @Mutation(() => Entity)
  async updateTenure(
    @Args('id', { type: () => String }) id: string,
    @Args('tenure', { type: () => TenureInput }) tenure: Tenure
  ): Promise<Tenure> {
    return await this._service.updateTenure(id, tenure);
  }

  @Mutation(() => Entity)
  async deleteTenure(
    @Args('id', { type: () => String }) id: string
  ): Promise<Tenure> {
    return await this._service.deleteTenure(id);
  }
}
