import { Injectable } from '@nestjs/common';

import {
  Address,
  Demographics,
  Identification,
  Neo4jNode,
  Person,
  PersonDTO,
  SocialConnection
} from '../../imports/models';
import { Neo4jNodeMapperService } from '../../imports/services';

import { PersonRepository } from '../../repositories';

@Injectable()
export class PersonService {
  constructor(
    private _repository: PersonRepository,
    private _mapNode: Neo4jNodeMapperService
  ) {}

  private extractPeople(result: { person: Neo4jNode<Person> }[]): Person[] {
    return result.map(({ person }) => person).map(this._mapNode.toPerson);
  }

  private extractAddress(result: { address: Neo4jNode<Address> }[]): Address[] {
    return result.map(({ address }) => address).map(this._mapNode.toAddress);
  }

  private extractDemographics(
    result: { demographics: Neo4jNode<Demographics> }[]
  ): Demographics[] {
    return result
      .map(({ demographics }) => demographics)
      .map(this._mapNode.toDemographics);
  }

  extractIdentifications(
    result: { identification: Neo4jNode<Identification> }[]
  ): Identification[] {
    return result
      .map(({ identification }) => identification)
      .map(this._mapNode.toIdentification);
  }

  extractSocialConnections(
    result: { socialConnection: Neo4jNode<SocialConnection> }[]
  ): SocialConnection[] {
    return result
      .map(({ socialConnection }) => socialConnection)
      .map(this._mapNode.toSocialConnection);
  }

  async getPerson(person: Person): Promise<Person> {
    const result = await this._repository.getPerson(person);
    return (
      this.extractPeople(
        (<unknown>result) as { person: Neo4jNode<Person> }[]
      ).at(0) ?? new Person({ id: '' })
    );
  }

  async getPeople(): Promise<Person[]> {
    const result = await this._repository.getPeople();
    return this.extractPeople(
      (<unknown>result) as { person: Neo4jNode<Person> }[]
    );
  }

  async getAddress(person: Person): Promise<Address> {
    const result = await this._repository.getAddress(person);
    return (
      this.extractAddress(
        (<unknown>result) as { address: Neo4jNode<Address> }[]
      ).at(0) ?? new Address({ id: '' })
    );
  }

  async getDemographics(person: Person): Promise<Demographics> {
    const result = await this._repository.getDemographics(person);
    return (
      this.extractDemographics(
        (<unknown>result) as { demographics: Neo4jNode<Demographics> }[]
      ).at(0) ?? new Demographics({ id: '' })
    );
  }

  async getIdentifications(person: Person): Promise<Identification[]> {
    const result = await this._repository.getIdentifications(person);
    return this.extractIdentifications(
      (<unknown>result) as { identification: Neo4jNode<Identification> }[]
    );
  }

  async getSocialConnections(person: Person): Promise<SocialConnection[]> {
    const result = await this._repository.getSocialConnections(person);
    return this.extractSocialConnections(
      (<unknown>result) as { socialConnection: Neo4jNode<SocialConnection> }[]
    );
  }

  async createPerson(person: PersonDTO): Promise<Person> {
    const id = new Person({ ...person }).generateUUID();
    const result = await this._repository.createPerson(id, person);
    return (
      this.extractPeople(
        (<unknown>result) as { person: Neo4jNode<Person> }[]
      ).at(0) ?? new Person({ id: '' })
    );
  }

  async updatePerson(id: string, person: PersonDTO): Promise<Person> {
    const result = await this._repository.updatePerson(id, person);
    return (
      this.extractPeople(
        (<unknown>result) as { person: Neo4jNode<Person> }[]
      ).at(0) ?? new Person({ id: '' })
    );
  }

  async deletePerson(id: string): Promise<Person> {
    const result = await this._repository.deletePerson(id);
    return (
      this.extractPeople(
        (<unknown>result) as { person: Neo4jNode<Person> }[]
      ).at(0) ?? new Person({ id: '' })
    );
  }
}
