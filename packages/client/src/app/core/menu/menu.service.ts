import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  icon?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}


@Injectable()
export class MenuService {
  MENUITEMS = [];

  getAll(): Menu[] {
    return this.MENUITEMS;
  }

  add(menu: Menu) {
    this.MENUITEMS.push(menu);
  }
}
