import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  private useremail!: string;
  private userData!:string;
  private ApiUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }
  login(email: string, password: string): void {
    const loginUrl = `${this.ApiUrl}/login`
    const formData = {
      email: email,
      password: password
    }
    this.http.post(loginUrl, formData).subscribe(
      (response: any) => {
        // this.authToken = response.accessToken;
        localStorage.setItem("token", response.token)
        console.log("response: ", response);
        this.useremail = formData.email;
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.log("Error: ", error.error.message);
          }
          else {
            console.error(`codigo de error ${error.status}` + `mensaje: ${error.error}`)
          }
        }
      }
    )
  }

  // private getAuthHeaders():HttpHeaders{
  //   const authToken = localStorage.getItem("token");
  //   const headers = new HttpHeaders({"Authorization":`Bearer ${authToken}`});
  //   return headers;
  // }
}
