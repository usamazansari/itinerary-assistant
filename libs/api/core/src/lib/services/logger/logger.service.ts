import { ConsoleLogger, Injectable, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENVIRONMENT_VARIABLES } from '../../constants';

@Injectable()
export class LoggerService extends ConsoleLogger {
  constructor() {
    super();
    this.setLogLevels(this._getLogLevelsFromEnvironment());
  }

  private _getLogLevelsFromEnvironment(
    env = new ConfigService().get(ENVIRONMENT_VARIABLES.KEYS.NODE_ENV)
  ) {
    let _ = [] as LogLevel[];
    if (env === 'development') _ = ['debug', 'error', 'log', 'verbose', 'warn'];
    if (env === 'production') _ = ['log', 'error', 'warn'];
    return _;
  }

  private _traceBack() {
    return (
      (
        ((new Error().stack ?? '').split('\n').at(3) ?? '')
          .trim()
          .split('at ')
          .at(1) ?? ''
      )
        .split('.')
        .at(0) ?? ''
    );
  }

  override log(message: unknown, context = this._traceBack()) {
    super.log(message, context);
  }

  override warn(message: unknown, context = this._traceBack()) {
    super.warn(message, context);
  }

  override debug(message: unknown, context = this._traceBack()) {
    super.debug(message, context);
  }

  override error(
    message: unknown,
    stack = new Error().stack,
    context = this._traceBack()
  ) {
    super.error(message, stack, context);
  }

  public logQuery(query: string, context = this._traceBack()) {
    this.debug('----- Printing Query -----', context);
    query.split('\n').forEach(str => {
      this.debug(str, context);
    });
    this.debug('----- Query Printed -----', context);
    this.debug('', context);
  }
}
