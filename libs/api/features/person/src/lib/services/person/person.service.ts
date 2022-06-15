import { Injectable } from '@nestjs/common';

import {
  Address,
  Demographics,
  Identification,
  Neo4jOutput,
  Person,
  PersonDTO,
  SocialConnection
} from '../../imports/models';
import { ExtractorService } from '../../helpers';

import { PersonRepository } from '../../repositories';

@Injectable()
export class PersonService {
  constructor(
    private _repository: PersonRepository,
    private _extractor: ExtractorService
  ) {}

  async getPerson(id = ''): Promise<Person> {
    const result = await this._repository.getPerson(id);
    return (
      this._extractor.extractPeople(result as Neo4jOutput<Person>).at(0) ??
      new Person({ id: '' })
    );
  }

  async getPeople(): Promise<Person[]> {
    const result = await this._repository.getPeople();
    return this._extractor.extractPeople(result as Neo4jOutput<Person>);
  }

  async getAddress(id = ''): Promise<Address> {
    const result = await this._repository.getAddress(id);
    return (
      this._extractor.extractAddress(result as Neo4jOutput<Address>).at(0) ??
      new Address({ id: '' })
    );
  }

  async getDemographics(id = ''): Promise<Demographics> {
    const result = await this._repository.getDemographics(id);
    return (
      this._extractor
        .extractDemographics(result as Neo4jOutput<Demographics>)
        .at(0) ?? new Demographics({ id: '' })
    );
  }

  async getIdentifications(id = ''): Promise<Identification[]> {
    const result = await this._repository.getIdentifications(id);
    return this._extractor.extractIdentifications(
      result as Neo4jOutput<Identification>
    );
  }

  async getSocialConnections(id = ''): Promise<SocialConnection[]> {
    const result = await this._repository.getSocialConnections(id);
    return this._extractor.extractSocialConnections(
      result as Neo4jOutput<SocialConnection>
    );
  }

  async createPerson(person: PersonDTO): Promise<Person> {
    const id = new Person({ ...person }).generateUUID();
    const result = await this._repository.createPerson(id, person);
    return (
      this._extractor.extractPeople(result as Neo4jOutput<Person>).at(0) ??
      new Person({ id: '' })
    );
  }

  async updatePerson(id: string, person: PersonDTO): Promise<Person> {
    const result = await this._repository.updatePerson(id, person);
    return (
      this._extractor.extractPeople(result as Neo4jOutput<Person>).at(0) ??
      new Person({ id: '' })
    );
  }

  async deletePerson(id: string): Promise<Person> {
    const result = await this._repository.deletePerson(id);
    return (
      this._extractor.extractPeople(result as Neo4jOutput<Person>).at(0) ??
      new Person({ id: '' })
    );
  }
}
