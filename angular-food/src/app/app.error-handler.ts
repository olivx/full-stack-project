import {HttpErrorResponse} from '@angular/common/http'
import { throwError } from 'rxjs'


export class ErrorHandler{

    static handlerError(error: HttpErrorResponse | any){
        let errorMessage: String = `deu merda! ${error.toString()}`
        if (error instanceof(HttpErrorResponse)){
            errorMessage = `Error: ${error.status} ao acessar as url${error.url} => ${error.statusText}` 
        }
        
        console.log(errorMessage)
        return throwError(errorMessage || "Server Error");
    }
}