import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {RootState} from "../../store";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  issues$: Observable<Issue[]>;
  constructor(private issues: IssueCollectionService) {
    this.issues$ = this.issues.filteredEntities$; }
  ngOnInit(): void { this.issues.load();
  }
  onSearch(text: string): void { this.issues.setFilter(text);
  }
  onResolve(issue: Issue): void { this.issues.resolve(issue);
  }
  onSubmit(issue: Issue): void { this.issues.add(issue);
  } }
