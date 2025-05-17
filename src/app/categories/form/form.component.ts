import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";


@Component({
  selector: "category-form",
  standalone: true,
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
  templateUrl: "./form.component.html",
  styles: ``,
})
export class CategoryFormComponent {
  
  @Output() back = new EventEmitter
  @Output() save = new EventEmitter();

  private fb = inject(FormBuilder);
  categoryForm = this.fb.group({
    id: [null],
    name: ["", [Validators.required, Validators.minLength(3)]],
    description: ["", Validators.required],
  })

  onSubmit() {
    console.log('Submit', this.categoryForm.value);
    this.save.emit(this.categoryForm.value);
  }
  onBack() {
    this.back.emit();
  }
}
