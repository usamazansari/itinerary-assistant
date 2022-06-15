import type { HttpStatus } from '../../constants';
import { ServerResponse } from '../../constants';

/**
 * ### Return the message corresponding to the given status code.
 *
 * @export
 * @param {HttpStatus} status - The status code.
 * @return {*}  {string} The message corresponding to the given status code.
 */
export function getServerResponseMessage(status: HttpStatus): string {
  return ServerResponse.get(status) ?? '';
}
