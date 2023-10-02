/**
 * loadEnv function loads environment variables from a .env file and sets them in the process.env object.
 * The .env file is expected to be located at the specified path.
 */
import * as fs from 'fs';
import * as path from 'path';

export function loadEnv(): void {
  // Define the path to the .env file, assuming it is in the parent directory of the current file
  const envPath = path.join(__dirname, '../../.env');

  // Check if the .env file exists
  if (fs.existsSync(envPath)) {
    // Read the contents of the .env file as a UTF-8 encoded string
    const envData = fs.readFileSync(envPath, 'utf8');

    // Split the content of the .env file into an array of lines
    const lines = envData.split('\n');

    // Iterate through each line in the .env file
    lines.forEach(line => {
      // Split each line into key and value based on the '=' character
      const [key, value] = line.split('=');

      // If both key and value exist, trim whitespace and set the environment variable
      if (key && value) {
        process.env[key.trim()] = value.trim();
      }
    });
  }
}
