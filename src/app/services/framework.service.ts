/**
 * @author Ahmad Tarkmani
 * @contact Tarkmani@sheridancollge.ca
 * @date 2024-07-20
 */

import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Framework} from "../interfaces/framework";

@Injectable({
  providedIn: 'root'
})
export class FrameworkService {
  private http = inject(HttpClient);
  private jsonUrl = 'assets/data/frameworks.json';


  getFrameworks(): Observable<Framework[]> {
    return this.http.get<Framework[]>(this.jsonUrl);
  }
}
