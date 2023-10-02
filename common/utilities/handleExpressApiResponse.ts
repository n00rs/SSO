import { Request, Response } from "express";

/**
 * Procedure to handle API request/response in a common area
 */
export default function handleApiResponse(controller) {
    return async (req: Request, res: Response) => {
        try {
            const body = req.body;
            let controllerResponse = await controller(body);
            res.send(controllerResponse);
        } catch (error) {
            let { statusCode, errors } = error;
            res.status(statusCode).send(errors);
        }
    }
}
