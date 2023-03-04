import {Observable} from "rxjs";
import {Issue} from "../models/issue";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({ providedIn: "root" }) export class IssueService {
  constructor(private http: HttpClient) {}
  save(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(`/api/issues`, issue);
  }
  getAll(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`/api/issues`);
  }
}

