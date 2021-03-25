import {Injectable} from '@angular/core';

class T {
}

@Injectable({providedIn: 'root'})
export class StorageService {

  setString(key: string, value): void {
    localStorage.setItem(key, value);
  }

  setObject(key: string, value): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getString(key: string): string {
    return localStorage.getItem(key);
  }

  getObject(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
}
