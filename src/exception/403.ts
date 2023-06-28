import { BaseException } from './base';

export class ForbiddenException extends BaseException {
  public constructor(message?: string, code?: string) {
    super(403, message, code);
  }
}
