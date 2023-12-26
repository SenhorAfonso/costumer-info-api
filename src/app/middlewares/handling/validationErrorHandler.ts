import { NextFunction, Request, Response } from "express";
import Joi from "joi";

class ValidationErrorHandler {

  createValidationErrorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction) 
    {
      console.clear()
      console.log(`aconteceu o erro: ${err}`)
  }

}

export default new ValidationErrorHandler()
