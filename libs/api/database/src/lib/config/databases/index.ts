import { ConnectionOptions } from 'typeorm';

import { connection as sqlite } from './sqlite.config';
import { connection as postgres } from './postgres.config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DATABASE: { [key: string]: (entities: any) => ConnectionOptions; } = {
  sqlite,
  postgres
};
