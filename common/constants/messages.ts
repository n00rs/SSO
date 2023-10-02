/**
 * console message for server running fine
 */
export const SERVICE_RUNNING = (service: string, port: number) => `[${service} microservice]: running on port ${port}`;

/**
 * console messages for gateway
 */
export const GTW_SERVICE_RUNNING = (service: string, data: string) => `[${service}] stdout: ${data}`;
export const GTW_SERVICE_ERROR = (service: string, data: string) => `[${service}] stderr: ${data}`;
export const GTW_SERVICE_EXIT = (service: string, code: number) => `[${service}] exited with code ${code}`;

