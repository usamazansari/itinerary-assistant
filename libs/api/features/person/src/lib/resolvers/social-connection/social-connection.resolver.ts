import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

import {
  SocialConnection as Entity,
  Tenure as TenureEntity
} from '../../imports/entities';
import { SocialConnection, Tenure as TenureModel } from '../../imports/models';

import { SocialConnectionInput } from '../../inputs';
import { SocialConnectionService } from '../../services';

@Resolver(() => Entity)
export class SocialConnectionResolver {
  constructor(private _service: SocialConnectionService) {}

  @Query(() => Entity)
  async getSocialConnection(
    @Args('id', { type: () => String }) id: string
  ): Promise<SocialConnection> {
    return await this._service.getSocialConnection(id);
  }

  @Mutation(() => Entity)
  async createSocialConnection(
    @Args('socialConnection', { type: () => SocialConnectionInput })
    socialConnection: SocialConnection
  ): Promise<SocialConnection> {
    return await this._service.createSocialConnection(socialConnection);
  }

  @Mutation(() => Entity)
  async updateSocialConnection(
    @Args('id', { type: () => String }) id: string,
    @Args('socialConnection', { type: () => SocialConnectionInput })
    socialConnection: SocialConnection
  ): Promise<SocialConnection> {
    return await this._service.updateSocialConnection(id, socialConnection);
  }

  @Mutation(() => Boolean)
  async deleteSocialConnection(
    @Args('id', { type: () => String }) id: string
  ): Promise<boolean> {
    return await this._service.deleteSocialConnection(id);
  }

  @Mutation(() => Entity)
  async associateSocialConnectionWithPerson(
    @Args('socialConnectionId', { type: () => String })
    socialConnectionId: string,
    @Args('personId', { type: () => String }) personId: string
  ): Promise<SocialConnection> {
    return await this._service.associateSocialConnectionWithPerson(
      socialConnectionId,
      personId
    );
  }
}
