import { Component, inject, signal } from '@angular/core';
import { Button } from '../../elements/button/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ValidatorService } from '../../../services/validator-service';
import { ContactService } from '../../../services/contact-service';
import { MobileService } from '../../../services/mobile-service';

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
    mobile = inject(MobileService);

    isPopup = signal<boolean>(false);
    isPopupFading = signal<boolean>(false);
    popupMsg = signal<string>('');

    errorStr = {
        name: signal<string | undefined>(undefined),
        email: signal<string | undefined>(undefined),
        message: signal<string | undefined>(undefined),
    };

    valueStr = {
        name: signal<string | undefined>(undefined),
        email: signal<string | undefined>(undefined),
        message: signal<string | undefined>(undefined),
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
        message: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(20)],
        }),
        policy: new FormControl(false, {
            nonNullable: true,
            validators: [Validators.requiredTrue],
        }),
    });

    showPopup(msg: string) {
        this.popupMsg.set(msg);
        this.isPopup.set(true);
        setTimeout(() => {
            this.isPopupFading.set(true);
        }, 4000);
        setTimeout(() => {
            this.isPopupFading.set(false);
            this.isPopup.set(false);
        }, 5000);
    }

    formSubmit() {
        setTimeout(
            () => {
                if (this.contactForm.invalid) {
                    this.contactForm.markAllAsTouched();
                    return;
                }
                this.contactService.sendMessage(this.contactForm.getRawValue()).subscribe({
                    next: (response) => {
                        if (response.success) {
                            this.showPopup('Thanks for reaching out!');
                            this.resetForm();
                        }
                    },
                    error: () => {
                        this.showPopup('Something went wrong.');
                    },
                });
            },
            this.mobile.canHover() ? 0 : 100
        );
    }

    onInputFocus(path: string) {
        if (path in this.valueStr) {
            const value = this.valueStr[path as keyof typeof this.errorStr]();
            if (value) {
                this.contactForm.get(path)?.patchValue(value);
            }
        }
    }

    resetForm() {
        this.contactForm.reset();
        this.valueStr.name.set(undefined);
        this.valueStr.email.set(undefined);
        this.valueStr.message.set(undefined);
        this.errorStr.name.set(undefined);
        this.errorStr.email.set(undefined);
        this.errorStr.message.set(undefined);
        this.contactForm.get('name')?.patchValue('');
        this.contactForm.get('email')?.patchValue('');
        this.contactForm.get('message')?.patchValue('');
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
        const pathRef = this.contactForm.get('message');
        switch (true) {
            case pathRef?.hasError('required'):
                this.errorStr.message.set(this.translate.instant('section-contact.error.message-empty'));
                break;
            case pathRef?.hasError('minlength'):
                this.errorStr.message.set(this.translate.instant('section-contact.error.message-minLength'));
                break;
            default:
                this.errorStr.message.set(undefined);
                break;
        }
        this.valueStr.message.set(pathRef ? pathRef.value : undefined);
        if (this.errorStr.message()) {
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
