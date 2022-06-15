import { Injectable } from '@nestjs/common';

import {
  SocialConnection,
  SocialConnectionDTO,
  Neo4jOutput
} from '../../imports/models';

import { SocialConnectionRepository } from '../../repositories';
import { ExtractorService } from '../../helpers';

@Injectable()
export class SocialConnectionService {
  constructor(
    private _repository: SocialConnectionRepository,
    private _extractor: ExtractorService
  ) {}

  async getSocialConnection(id = ''): Promise<SocialConnection> {
    const result = await this._repository.getSocialConnection(id);
    return (
      this._extractor
        .extractSocialConnections(result as Neo4jOutput<SocialConnection>)
        .at(0) ?? new SocialConnection({ id: '' })
    );
  }

  async createSocialConnection(
    socialConnection: SocialConnectionDTO
  ): Promise<SocialConnection> {
    const id = new SocialConnection({ ...socialConnection }).generateUUID();
    const result = await this._repository.createSocialConnection(
      id,
      socialConnection
    );
    return (
      this._extractor
        .extractSocialConnections(result as Neo4jOutput<SocialConnection>)
        .at(0) ?? new SocialConnection({ id: '' })
    );
  }

  async updateSocialConnection(
    id: string,
    socialConnection: SocialConnectionDTO
  ): Promise<SocialConnection> {
    const result = await this._repository.updateSocialConnection(
      id,
      socialConnection
    );
    return (
      this._extractor
        .extractSocialConnections(result as Neo4jOutput<SocialConnection>)
        .at(0) ?? new SocialConnection({ id: '' })
    );
  }

  // TODO: Usama Ansari - improve this logic
  async deleteSocialConnection(id: string): Promise<boolean> {
    const result = await this._repository.deleteSocialConnection(id);
    return !!this._extractor
      .extractSocialConnections(result as Neo4jOutput<SocialConnection>)
      .at(0)?.id;
  }

  async associateSocialConnectionWithPerson(
    socialConnectionId: string,
    personId: string
  ): Promise<SocialConnection> {
    const check = await this.checkSocialConnectionOfRelationship(
      socialConnectionId,
      personId
    );
    const result = check
      ? await this._repository.getSocialConnection(socialConnectionId)
      : await this._repository.associateSocialConnectionWithPerson(
          socialConnectionId,
          personId
        );
    return (
      this._extractor
        .extractSocialConnections(result as Neo4jOutput<SocialConnection>)
        .at(0) ?? new SocialConnection({ id: '' })
    );
  }

  async checkSocialConnectionOfRelationship(
    socialConnectionId: string,
    personId: string
  ): Promise<boolean> {
    const result = await this._repository.checkSocialConnectionOfRelationship(
      socialConnectionId,
      personId
    );
    return !!result.length;
  }
}
