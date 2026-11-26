import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class ContactService {
    private http = inject(HttpClient);

    private apiUrl = 'https://api.svenprimus.com/contact.php';

    sendMessage(data: { name: string; email: string; message: string }) {
        return this.http.post<{ success: boolean }>(this.apiUrl, data);
    }
}
