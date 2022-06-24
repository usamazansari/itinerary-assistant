import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';

// import {
//   Address as AddressEntity,
//   Demographics as DemographicsEntity,
//   Identification as IdentificationEntity,
//   Person as Entity,
//   SocialConnection as SocialConnectionEntity
// } from '../../imports/entities';
// import {
//   Address as AddressModel,
//   Demographics as DemographicsModel,
//   Identification as IdentificationModel,
//   Person,
//   SocialConnection as SocialConnectionModel
// } from '../../imports/models';

// import { PersonInput } from '../../inputs';
import { PersonService } from '../../services';

// @Resolver(() => Entity)
export class PersonResolver {
  constructor(private _service: PersonService) {}

  // @Query(() => [Entity])
  // async getPeople(): Promise<Person[]> {
  //   return await this._service.getPeople();
  // }

  // @Query(() => Entity)
  // async getPerson(
  //   @Args('id', { type: () => String }) id: string
  // ): Promise<Person> {
  //   return await this._service.getPerson(id);
  // }

  // @ResolveField(() => AddressEntity, { name: 'address' })
  // async getAddress(@Parent() { id }: Entity): Promise<AddressModel> {
  //   return await this._service.getAddress(id);
  // }

  // @ResolveField(() => DemographicsEntity, { name: 'demographics' })
  // async getDemographics(@Parent() { id }: Entity): Promise<DemographicsModel> {
  //   return await this._service.getDemographics(id);
  // }

  // @ResolveField(() => [IdentificationEntity], { name: 'identifications' })
  // async getIdentifications(
  //   @Parent() { id }: Entity
  // ): Promise<IdentificationModel[]> {
  //   return await this._service.getIdentifications(id);
  // }

  // @ResolveField(() => [SocialConnectionEntity], { name: 'socialConnections' })
  // async getSocialConnections(
  //   @Parent() { id }: Entity
  // ): Promise<SocialConnectionModel[]> {
  //   return await this._service.getSocialConnections(id);
  // }

  // @Mutation(() => Entity)
  // async createPerson(
  //   @Args('person', { type: () => PersonInput }) person: Entity
  // ): Promise<Person> {
  //   return await this._service.createPerson(person);
  // }

  // @Mutation(() => Entity)
  // async updatePerson(
  //   @Args('id', { type: () => String }) id: string,
  //   @Args('person', { type: () => PersonInput }) person: Entity
  // ): Promise<Person> {
  //   return await this._service.updatePerson(id, person);
  // }

  // @Mutation(() => Entity)
  // async deletePerson(
  //   @Args('id', { type: () => String }) id: string
  // ): Promise<Person> {
  //   return await this._service.deletePerson(id);
  // }
}
