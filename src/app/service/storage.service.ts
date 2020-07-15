import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private keys = [];

  constructor() { }

  /**
   * Store elements in the local storage
   * @param key;
   * @param value;
   */
  store(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    this.keys.push(key);
  }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * Get the connected user
   */
  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  /**
   * Remove all elements from the local storage
   */
  unstore() {
    for (const key of this.keys) {
      localStorage.removeItem(key);
    }
  }
}
