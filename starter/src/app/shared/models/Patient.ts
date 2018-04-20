import { Bilan } from './Bilan';

export class Patient {
    constructor(
      public id?: number,
      public firstName?: string,
      public lastName?: string,
      public sexe?: string,
      public dateDeNaissance?: string,
      public dateDeGreffe?: string,
      public bilans?: Bilan[]) {}
}
