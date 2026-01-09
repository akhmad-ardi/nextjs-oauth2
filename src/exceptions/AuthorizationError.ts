export class AuthorizationError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}