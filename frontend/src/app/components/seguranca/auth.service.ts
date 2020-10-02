import { HttpClient, HttpHeaders
} from "@angular/common/http";
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  oauthTokenUrl = 'https://priceapi-live.herokuapp.com/oauth/token';

  constructor(private http: HttpClient) { }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('Authorization','Basic ZGVmYXVsdDphYmMxMjM=');

    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    return this.http.post(this.oauthTokenUrl, body, { headers })
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(body);
        console.log(headers);
        console.log(this.oauthTokenUrl);
        console.log(response);
      });
  }

}
