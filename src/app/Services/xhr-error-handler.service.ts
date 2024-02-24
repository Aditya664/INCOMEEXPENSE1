import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar'; 

@Injectable({
  providedIn: 'root'
})
export class XhrErrorHandlerService implements ErrorHandler {

  constructor(
    private injector: Injector,
    public snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.zone.run(() => {
        let errorMessage = 'An error occurred';
        if (error.error && error.error.title) {
          // If the error has a title, it's likely a structured error response
          errorMessage = error.error.title;
          if (error.error.errors) {
            // If errors field exists, iterate over each field error
            for (const key of Object.keys(error.error.errors)) {
              const fieldErrors = error.error.errors[key];
              // Display each field error message
              for (const fieldError of fieldErrors) {
                errorMessage += '\n' + key + ': ' + fieldError;
              }
            }
          }
        } else {
          // Default error message for unknown error format
          errorMessage = `${error.status} ${error.error}`;
        }

        this.snackBar.open(errorMessage, 'OK', {
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          duration: 3000,
        });
      });
    } else {
      console.error(error);
    }
  }

  public handleSuccess(message:string):void{
    this.snackBar.open(message, 'OK', {
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      duration: 3000,
    });
  }
}
