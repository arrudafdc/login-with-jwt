export class AppError {
  public readonly message: object;

  constructor(message: string) {
    this.message = { error: message };
  }
}
