
/**
 * Declare an interface to define the error message object
 */
export interface IErrorObject<T = any> {
    message: string;
    details?: T;
}

/**
 * Declare a type for status code in errorHandler
 */
export type HttpStatusCode = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 500;