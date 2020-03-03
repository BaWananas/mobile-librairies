import {HttpSubError} from './HttpSubError';

/**
 * Represent a Http validation error (that occurred in POST forms).
 * Extends {@link HttpSubError}.
 */
export class HttpValidationError extends HttpSubError {
  /**
   * Subject of the validation.
   */
  public object: string;
  /**
   * Incorrect field of the validation.
   */
  public field: string;
  /**
   * Rejected value.
   */
  public rejectedValue: any;
  /**
   * Message describing why value was rejected.
   */
  public message: string;

  /**
   * Constructor.
   * @param object Subject of the validation.
   * @param field Incorrect field of the validation.
   * @param rejectedValue Rejected value.
   * @param message Message describing why value was rejected.
   */
  constructor(object: string, field: string, rejectedValue: any, message: string) {
    super();
    this.object = object;
    this.field = field;
    this.rejectedValue = rejectedValue;
    this.message = message;
  }

  /**
   * Parse object into a {@link HttpValidationError}.
   * @param object Object you want to translate.
   * @returns HttpValidationError Translated error.
   */
  public static parseTo(object: any): HttpValidationError {
    return new HttpValidationError(object.object,
      object.field,
      object.rejectedValue,
      object.message);
  }

  /**
   * Refers to {@link HttpSubError}.
   */
  formatError(): string {
    return 'Field <' + this.field + '> reject value <' + this.rejectedValue + '> for the reason: \"' + this.message + '\".';
  }

}
