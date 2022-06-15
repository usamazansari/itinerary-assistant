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
import { Neo4jNodeMapperService } from '../../imports/services';

@Injectable()
export class ExtractorService {
  constructor(private _mapNode: Neo4jNodeMapperService) {}

  extractPeople(result: Neo4jOutput<Person>): Person[] {
    return result.map(({ output }) => output).map(this._mapNode.toPerson);
  }

  extractAddress(result: Neo4jOutput<Address>): Address[] {
    return result.map(({ output }) => output).map(this._mapNode.toAddress);
  }

  extractLocation(result: Neo4jOutput<Location>): Location[] {
    return result.map(({ output }) => output).map(this._mapNode.toLocation);
  }

  extractDemographics(result: Neo4jOutput<Demographics>): Demographics[] {
    return result.map(({ output }) => output).map(this._mapNode.toDemographics);
  }

  extractIdentifications(
    result: Neo4jOutput<Identification>
  ): Identification[] {
    return result
      .map(({ output }) => output)
      .map(this._mapNode.toIdentification);
  }

  extractTenures(result: Neo4jOutput<Tenure>): Tenure[] {
    return result.map(({ output }) => output).map(this._mapNode.toTenure);
  }

  extractSocialConnections(
    result: Neo4jOutput<SocialConnection>
  ): SocialConnection[] {
    return result
      .map(({ output }) => output)
      .map(this._mapNode.toSocialConnection);
  }
}
