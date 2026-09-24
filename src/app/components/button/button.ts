import { Component, input } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-button',
    styleUrl: './button.scss',
    templateUrl: './button.html',
})
export class Button {
    readonly is3D = input.required<boolean>();
    readonly isDark = input.required<boolean>();
    readonly btnText = input.required<string>();
}
