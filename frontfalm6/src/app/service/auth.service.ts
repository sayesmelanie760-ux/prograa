import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cliente } from '../entity/cliente';

export interface LoginRequest {
  correo: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  idCliente?: number;
  nombre?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:9090/api';
  private loggedInSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  public loggedIn$ = this.loggedInSubject.asObservable();

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, loginRequest);
  }

  register(cliente: Cliente): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/register`, cliente);
  }

  setSession(response: LoginResponse): void {
    if (response.success && response.idCliente && response.nombre) {
      localStorage.setItem('clienteId', response.idCliente.toString());
      localStorage.setItem('clienteNombre', response.nombre);
      localStorage.setItem('isLoggedIn', 'true');
      this.loggedInSubject.next(true);
    }
  }

  logout(): void {
    localStorage.removeItem('clienteId');
    localStorage.removeItem('clienteNombre');
    localStorage.removeItem('isLoggedIn');
    this.loggedInSubject.next(false);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  getCurrentClienteId(): number | null {
    const id = localStorage.getItem('clienteId');
    return id ? parseInt(id) : null;
  }

  getCurrentClienteNombre(): string | null {
    return localStorage.getItem('clienteNombre');
  }
}
