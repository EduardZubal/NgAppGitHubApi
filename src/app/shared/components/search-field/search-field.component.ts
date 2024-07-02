import { AsyncPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, AsyncPipe],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent {
  public searchControl = new FormControl('', [Validators.required]);
  @Output() onSubmitEmit = new EventEmitter<string | null>();

  public loaderService = inject(LoaderService);

  constructor() {}

  public onSubmit(): void {
    this.onSubmitEmit.emit(this.searchControl.getRawValue());
  }

}
