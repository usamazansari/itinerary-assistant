import { Injectable } from '@nestjs/common';

import {
  Address,
  Demographics,
  Identification,
  Location,
  Neo4jOutput,
  Person,
  SocialConnection,
  Tenure
} from '../../imports/models';
import {
  Neo4jNodeMapperService,
  ExtractorService as SharedExtractorService
} from '../../imports/services';

@Injectable()
export class ExtractorService {
  constructor(
    private _mapNode: Neo4jNodeMapperService,
    private _extractor: SharedExtractorService
  ) {}

  extractPeople(result: Neo4jOutput<Person>): Person[] {
    return result.map(({ output }) => output).map(this._mapNode.toPerson) ?? [];
  }

  extractPerson(result: Neo4jOutput<Person>): Person {
    return this.extractPeople(result).at(0) ?? new Person({});
  }

  extractAddresses(result: Neo4jOutput<Address>): Address[] {
    return result.map(({ output }) => output).map(this._mapNode.toAddress);
  }

  extractAddress(result: Neo4jOutput<Address>): Address {
    return this.extractAddresses(result).at(0) ?? new Address({});
  }

  extractLocations(result: Neo4jOutput<Location>): Location[] {
    return this._extractor.extractLocations(result);
  }

  extractLocation(result: Neo4jOutput<Location>): Location {
    return this._extractor.extractLocation(result);
  }

  extractDemographics(result: Neo4jOutput<Demographics>): Demographics[] {
    return result.map(({ output }) => output).map(this._mapNode.toDemographics);
  }

  extractDemographic(result: Neo4jOutput<Demographics>): Demographics {
    return this.extractDemographics(result).at(0) ?? new Demographics({});
  }

  extractIdentifications(
    result: Neo4jOutput<Identification>
  ): Identification[] {
    return result
      .map(({ output }) => output)
      .map(this._mapNode.toIdentification);
  }

  extractIdentification(result: Neo4jOutput<Identification>): Identification {
    return this.extractIdentifications(result).at(0) ?? new Identification({});
  }

  extractTenures(result: Neo4jOutput<Tenure>): Tenure[] {
    return this._extractor.extractTenures(result);
  }

  extractTenure(result: Neo4jOutput<Tenure>): Tenure {
    return this._extractor.extractTenure(result);
  }

  extractSocialConnections(
    result: Neo4jOutput<SocialConnection>
  ): SocialConnection[] {
    return result
      .map(({ output }) => output)
      .map(this._mapNode.toSocialConnection);
  }

  extractSocialConnection(
    result: Neo4jOutput<SocialConnection>
  ): SocialConnection {
    return (
      this.extractSocialConnections(result).at(0) ?? new SocialConnection({})
    );
  }
}
