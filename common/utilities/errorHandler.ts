import { HttpStatusCode, IErrorObject } from "../interfaces/errorHandler";

/**
 * Custom error handling class that extends the built-in Error class.
 * It allows handling and organizing errors with additional features.
 */
export default class ErrHandler<T = any> extends Error {
  // Array to store error objects with messages and optional details
  private errors: IErrorObject<T>[] = [];

  // Default status code for the instance
  private statusCode: HttpStatusCode = 400;

  /**
   * Constructor for ErrHandler class.
   * @param initialError Initial error or array of errors to initialize the instance with.
   */
  constructor(initialError?: string | string[] | IErrorObject | IErrorObject[]) {
    super();
    Object.setPrototypeOf(this, ErrHandler.prototype);

    // If initialError is provided and not an instance of Error, add it to the errors array
    if (initialError && !(initialError instanceof Error)) {
      this.addError(initialError);
    } else if (initialError) {
      
      // If initialError is provided, check for specific conditions to handle it
      if (!initialError['errors']) {
        // Log the current date, time, and the stack trace
        const currentDateAndTime = new Date();
        const currentDate = currentDateAndTime.toDateString();
        const currentTime = currentDateAndTime.toTimeString();
        console.log(currentDate, currentTime);
        console.log(initialError);
        
        // Set a default error message and update the status code
        initialError['errors'] = [{
          message: "SOMETHING_WENT_WRONG"
        }];
        this.statusCode = 500;
      }

      // Set the errors array based on the provided initialError
      this.errors = initialError['errors'];
    }
  }

  /**
   * Method to add a new error or array of errors to the instance.
   * @param error Error message, array of error messages, or error objects to be added.
   * @returns Returns the instance for method chaining.
   */
  addError(error?: string | string[] | IErrorObject | IErrorObject[]): this {
    if (Array.isArray(error)) {
      // If error is an array, recursively add each item
      error.forEach(errorItem => this.addError(errorItem));
    } else if (typeof error === 'string') {
      // If error is a string, add it as a new error object
      this.errors.push({ message: error });
    } else if (typeof error === 'object' && !Array.isArray(error)) {
      // If error is an object, add it to the errors array
      this.errors.push(error);
    }

    // Return the instance for method chaining
    return this;
  }

  /**
   * Method to check if there are any errors stored in the instance.
   * @returns Returns true if there are errors, otherwise false.
   */
  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  /**
   * Method to set the status code for the instance.
   * @param statusCode HTTP status code to be set.
   * @returns Returns the instance for method chaining.
   */
  setStatusCode(statusCode: HttpStatusCode): this {
    // Set the status code
    this.statusCode = statusCode;

    // Return the instance for method chaining
    return this;
  }

  /**
   * Method to clear all errors stored in the instance.
   */
  clearErrors(): void {
    // Clear the errors array
    this.errors = [];
  }
}
