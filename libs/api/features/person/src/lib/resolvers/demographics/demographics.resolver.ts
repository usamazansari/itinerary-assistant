import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Demographics as Entity } from '../../imports/entities';
import { Demographics } from '../../imports/models';

import { DemographicsInput } from '../../inputs';
import { DemographicsService } from '../../services';

@Resolver(() => Entity)
export class DemographicsResolver {
  constructor(private _service: DemographicsService) {}

  @Query(() => Entity)
  async getDemographics(
    @Args('id', { type: () => String }) id: string
  ): Promise<Demographics> {
    return await this._service.getDemographics(id);
  }

  @Mutation(() => Entity)
  async createDemographics(
    @Args('demographics', { type: () => DemographicsInput })
    demographics: Demographics
  ): Promise<Demographics> {
    return await this._service.createDemographics(demographics);
  }

  @Mutation(() => Entity)
  async updateDemographics(
    @Args('id', { type: () => String }) id: string,
    @Args('demographics', { type: () => DemographicsInput })
    demographics: Demographics
  ): Promise<Demographics> {
    return await this._service.updateDemographics(id, demographics);
  }

  @Mutation(() => Boolean)
  async deleteDemographics(
    @Args('id', { type: () => String }) id: string
  ): Promise<boolean> {
    return await this._service.deleteDemographics(id);
  }

  @Mutation(() => Entity)
  async associateDemographicsWithPerson(
    @Args('demographicsId', { type: () => String }) demographicsId: string,
    @Args('personId', { type: () => String }) personId: string
  ): Promise<Demographics> {
    return await this._service.associateDemographicsWithPerson(
      demographicsId,
      personId
    );
  }
}
