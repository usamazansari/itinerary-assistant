import { ConfigService } from '@nestjs/config';

import { ENVIRONMENT_VARIABLES } from '../../imports/constants';
import { Neo4jConfig } from '../../models';

export const createDatabaseConfig = (
  service: ConfigService,
  env = ENVIRONMENT_VARIABLES.VALUES.DEVELOPMENT
) =>
  new Neo4jConfig({
    uri: service.get<string>(
      `${ENVIRONMENT_VARIABLES.KEYS.NEO4J.URI}_${env.toUpperCase()}`
    ),
    username: service.get<string>(
      `${ENVIRONMENT_VARIABLES.KEYS.NEO4J.USERNAME}_${env.toUpperCase()}`
    ),
    password: service.get<string>(
      `${ENVIRONMENT_VARIABLES.KEYS.NEO4J.PASSWORD}_${env.toUpperCase()}`
    )
  });
