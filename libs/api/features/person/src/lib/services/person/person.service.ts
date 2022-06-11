import { Injectable } from '@nestjs/common';

import {
  Address,
  Demographics,
  Identification,
  Neo4jNode,
  Person,
  SocialConnection
} from '../../imports/models';
import { Neo4jNodeMapperService } from '../../imports/services';

import { PersonRepository } from '../../repositories';

@Injectable()
export class PersonService {
  #person!: Person;
  #people!: Person[];
  #address!: Address;
  #demographics!: Demographics;

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
    this.#person =
      this.extractPeople(
        (<unknown>result) as { person: Neo4jNode<Person> }[]
      ).at(0) ?? new Person({});

    return this.#person;
  }

  async getPeople(): Promise<Person[]> {
    const result = await this._repository.getPeople();
    this.#people = this.extractPeople(
      (<unknown>result) as { person: Neo4jNode<Person> }[]
    );
    return this.#people;
  }

  async getAddress(person: Person): Promise<Address> {
    const result = await this._repository.getAddress(person);
    this.#address =
      this.extractAddress(
        (<unknown>result) as { address: Neo4jNode<Address> }[]
      ).at(0) ?? new Address({});

    return this.#address;
  }

  async getDemographics(person: Person): Promise<Demographics> {
    const result = await this._repository.getDemographics(person);
    this.#demographics =
      this.extractDemographics(
        (<unknown>result) as { demographics: Neo4jNode<Demographics> }[]
      ).at(0) ?? new Demographics({});

    return this.#demographics;
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
}
