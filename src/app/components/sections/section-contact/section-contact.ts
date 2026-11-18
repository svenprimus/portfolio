import { Component } from '@angular/core';
import { Button } from '../../elements/button/button';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';

@Component({
    imports: [Button, ReactiveFormsModule],
    selector: 'app-section-contact',
    styleUrl: './section-contact.scss',
    templateUrl: './section-contact.html',
})
export class SectionContact {
    isError = {
        name: false,
        mail: false,
        msg: false,
    };

    contactForm = new FormGroup({
        name: new FormControl('Your name goes here', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')],
        }),
        mail: new FormControl('youremail@email.com', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(5), this.customMailValidator()],
        }),
        msg: new FormControl('Hello Sven, I am interested in...', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(10)],
        }),
    });

    customMailValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            return false === /^.+@.+\..+$/.test(control.value) ? { forbiddenName: { value: control.value } } : null;
        };
    }

    // ngOnInit() {
    //     this.patchForm();
    // }

    // patchForm() {
    //     this.contactForm.patchValue({
    //         name: 'Your name goes here',
    //     });
    // }

    formSubmit() {
        // placeholder
    }

    onInputFocus(path: string) {
        this.contactForm.get(path)?.patchValue('');
        if (path in this.isError) {
            this.isError[path as keyof typeof this.isError] = false;
        }
    }

    onNameBlur() {
        const pathRef = this.contactForm.get('name');
        this.isError.name = true;

        switch (true) {
            case pathRef?.hasError('required'):
                pathRef?.patchValue('Oops! It seems your name is missing.');
                break;
            case pathRef?.hasError('minlength'):
                break;
            case pathRef?.hasError('pattern'):
                pathRef?.patchValue('Mmh... Please consider a real name.');
                break;
            default:
                this.isError.name = false;
                break;
        }
    }
}
