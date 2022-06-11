import { Injectable } from '@nestjs/common';

import { Address, Person, Neo4jNode } from '../../imports/models';
import { Neo4jNodeMapperService } from '../../imports/services';

import { PersonRepository } from '../../repositories';

@Injectable()
export class PersonService {
  #address!: Address;
  #person!: Person;
  #people!: Person[];

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

  async getPerson(person: Person) {
    const result = await this._repository.getPerson(person);
    this.#person =
      this.extractPeople(
        (<unknown>result) as { person: Neo4jNode<Person> }[]
      ).at(0) ?? new Person({});

    return this.#person;
  }

  async getPeople() {
    const result = await this._repository.getPeople();
    this.#people = this.extractPeople(
      (<unknown>result) as { person: Neo4jNode<Person> }[]
    );
    return this.#people;
  }

  async getAddress({ email }: Person) {
    const result = await this._repository.getAddress(email);
    this.#address =
      this.extractAddress(
        (<unknown>result) as { address: Neo4jNode<Address> }[]
      ).at(0) ?? new Address({});

    return this.#address;
  }
}
