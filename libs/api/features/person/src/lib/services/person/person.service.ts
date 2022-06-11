import { Injectable } from '@nestjs/common';

import { Address, Demographics, Person, Neo4jNode } from '../../imports/models';
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
}
