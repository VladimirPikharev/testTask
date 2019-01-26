import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {ApiService} from '../../_services/api.service';

@Component({
  selector: 'synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.scss']
})
export class SynonymsComponent implements OnChanges {
  constructor(public apiService: ApiService) {
  }

  @Input() selectedText: string;
  @Output() word = new EventEmitter();

  public synonymsList = [];

  ngOnChanges() {
    this.getSynonyms(this.selectedText || '');
  }

  public getSynonyms(word) {
    this.apiService.get('words?rel_syn=' + word).subscribe(res => {
      this.synonymsList = res;
    });
  }
}
