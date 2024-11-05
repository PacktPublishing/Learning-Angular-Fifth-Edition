import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    const err = error.rejection || error;
    let message = '';
    
    if (err instanceof HttpErrorResponse) {
      switch(err.status) {
        case 0:
          message = 'Client error';
          break;
        case HttpStatusCode.InternalServerError:
          message = 'Server error';
          break;
        case HttpStatusCode.BadRequest:
          message = 'Request error';
          break;
        default:
          message = 'Unknown error';
      }
    } else {
      message = 'Application error';
    }
  
    console.error(message, err);
  }  
}
