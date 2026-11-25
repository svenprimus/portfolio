import { Component, input } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-button',
    styleUrl: './button.scss',
    templateUrl: './button.html',
})
export class Button {
    readonly isDark = input.required<boolean>();
    readonly minWidth = input<string>('0');
    readonly blend = input<boolean>(false);
    readonly disabled = input<boolean>(false);
    readonly buttonType = input<'button' | 'submit'>('button');
}
