import { Component, inject, signal } from '@angular/core';
import { Button } from '../../elements/button/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ValidatorService } from '../../../services/validator-service';
import { ContactService } from '../../../services/contact-service';

@Component({
    imports: [Button, ReactiveFormsModule, TranslatePipe],
    selector: 'app-section-contact',
    styleUrl: './section-contact.scss',
    templateUrl: './section-contact.html',
})
export class SectionContact {
    private translate = inject(TranslateService);
    validator = inject(ValidatorService);
    contactService = inject(ContactService);

    errorStr = {
        name: signal<string | undefined>(undefined),
        email: signal<string | undefined>(undefined),
        userMessage: signal<string | undefined>(undefined),
    };

    valueStr = {
        name: signal<string | undefined>(undefined),
        email: signal<string | undefined>(undefined),
        userMessage: signal<string | undefined>(undefined),
    };

    contactForm = new FormGroup({
        name: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                this.validator.customFullNameValidator(),
                this.validator.customNameValidator(),
            ],
            updateOn: 'blur',
        }),
        email: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, this.validator.customMailValidator()],
        }),
        userMessage: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(20)],
        }),
        policy: new FormControl(false, {
            nonNullable: true,
            validators: [Validators.requiredTrue],
        }),
    });

    formSubmit() {
        if (this.contactForm.invalid) {
            this.contactForm.markAllAsTouched();
            return;
        }

        const data = this.contactForm.getRawValue();

        this.contactService.sendMessage(data).subscribe({
            next: (response) => {
                if (response.success) {
                    console.log('message sent!');
                    this.contactForm.reset();
                }
            },
            error: (error) => {
                console.log('Sending failed:', error);
            },
        });
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
        if (this.errorStr.name()) {
            pathRef?.patchValue('');
        }
    }

    onMailBlur() {
        const pathRef = this.contactForm.get('email');
        switch (true) {
            case pathRef?.hasError('required'):
                this.errorStr.email.set(this.translate.instant('section-contact.error.email-empty'));
                break;
            case pathRef?.hasError('emailPattern'):
                this.errorStr.email.set(this.translate.instant('section-contact.error.email-pattern'));
                break;
            default:
                this.errorStr.email.set(undefined);
                break;
        }
        this.valueStr.email.set(pathRef ? pathRef.value : undefined);
        if (this.errorStr.email()) {
            pathRef?.patchValue('');
        }
    }

    onMsgBlur() {
        const pathRef = this.contactForm.get('userMessage');
        switch (true) {
            case pathRef?.hasError('required'):
                this.errorStr.userMessage.set(this.translate.instant('section-contact.error.userMessage-empty'));
                break;
            case pathRef?.hasError('minlength'):
                this.errorStr.userMessage.set(this.translate.instant('section-contact.error.userMessage-minLength'));
                break;
            default:
                this.errorStr.userMessage.set(undefined);
                break;
        }
        this.valueStr.userMessage.set(pathRef ? pathRef.value : undefined);
        if (this.errorStr.userMessage()) {
            pathRef?.patchValue('');
        }
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
