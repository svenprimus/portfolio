import { Component, inject, signal } from '@angular/core';
import { Button } from '../../elements/button/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ValidatorService } from '../../../services/validator-service';

@Component({
    imports: [Button, ReactiveFormsModule, TranslatePipe],
    selector: 'app-section-contact',
    styleUrl: './section-contact.scss',
    templateUrl: './section-contact.html',
})
export class SectionContact {
    private translate = inject(TranslateService);
    validator = inject(ValidatorService);

    errorStr = {
        name: signal<string | undefined>(undefined),
        mail: signal<string | undefined>(undefined),
        msg: signal<string | undefined>(undefined),
    };

    valueStr = {
        name: signal<string | undefined>(undefined),
        mail: signal<string | undefined>(undefined),
        msg: signal<string | undefined>(undefined),
    };

    contactForm = new FormGroup({
        name: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                this.validator.customFullNameValidator(),
                this.validator.customNameValidator(),
            ],
        }),
        mail: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, this.validator.customMailValidator()],
        }),
        msg: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(20)],
        }),
    });

    formSubmit() {
        // placeholder
    }

    onInputFocus(path: string) {
        if (path in this.valueStr) {
            const value = this.valueStr[path as keyof typeof this.errorStr]();
            if (value) {
                this.contactForm.get(path)?.patchValue(value);
            }
        }
    }

    onNameBlur() {
        const pathRef = this.contactForm.get('name');

        switch (true) {
            case pathRef?.hasError('required'):
                this.errorStr.name.set(this.translate.instant('section-contact.error.name-empty'));
                break;
            case pathRef?.hasError('fullName'):
                this.errorStr.name.set(this.translate.instant('section-contact.error.name-full'));
                break;
            case pathRef?.hasError('namePattern'):
                this.errorStr.name.set(this.translate.instant('section-contact.error.name-pattern'));
                break;
            default:
                this.errorStr.name.set(undefined);
                break;
        }
        this.valueStr.name.set(pathRef ? pathRef.value : undefined);
        pathRef?.patchValue('');
    }

    onMailBlur() {
        const pathRef = this.contactForm.get('mail');

        switch (true) {
            case pathRef?.hasError('required'):
                this.errorStr.mail.set(this.translate.instant('section-contact.error.mail-empty'));
                break;
            case pathRef?.hasError('emailPattern'):
                this.errorStr.mail.set(this.translate.instant('section-contact.error.mail-pattern'));
                break;
            default:
                this.errorStr.mail.set(undefined);
                break;
        }
        this.valueStr.mail.set(pathRef ? pathRef.value : undefined);
        console.log(
            this.errorStr.mail(),
            this.errorStr.mail(),
            this.contactForm.get('mail')?.invalid,
            this.errorStr.mail() !== undefined || this.contactForm.get('mail')?.invalid
        );
        pathRef?.patchValue('');
    }

    onMsgBlur() {
        const pathRef = this.contactForm.get('msg');

        switch (true) {
            case pathRef?.hasError('required'):
                this.errorStr.msg.set(this.translate.instant('section-contact.error.msg-empty'));
                break;
            case pathRef?.hasError('minlength'):
                this.errorStr.msg.set(this.translate.instant('section-contact.error.msg-minLength'));
                break;
            default:
                this.errorStr.msg.set(undefined);
                break;
        }
        this.valueStr.msg.set(pathRef ? pathRef.value : undefined);
        pathRef?.patchValue('');
    }

    focusNext(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            event.preventDefault();

            const current = event.target as HTMLElement;
            const form = current.closest('form');

            const elements = Array.from(
                form?.querySelectorAll<HTMLElement>('input:not(:disabled), textarea:not(:disabled)') ?? []
            );

            elements[elements.indexOf(current) + 1]?.focus();
        }
    }
}
