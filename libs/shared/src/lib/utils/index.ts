import type { HttpStatus } from '../constants';
import { ServerResponse } from '../constants';

export function getServerResponseMessage(status: HttpStatus): string {
  return ServerResponse.get(status) ?? '';
}
