/**
 * Represent sub errors which qualify a {@link HttpError}.
 */
export abstract class HttpSubError {
  /**
   * Translate the error in a string.
   * @returns string The string formatted error.
   */
  abstract formatError(): string;
}
