import { Injectable } from '@angular/core';

import { Bilan } from './../../shared/models/Bilan';


class BilanShape {
  constructor(public value: String, public name: Date) { }
}

class BilanShapeResult {
  constructor(public name: String, public series: BilanShape[]) { }
}

@Injectable()
export class CourbeService {
  RESULTITEMS: BilanShapeResult[];

  getAll() {
    return this.RESULTITEMS;
  }

  addItem(bilans: Bilan[]) {
    if (!bilans) {
      return null;
    }
    const results: BilanShapeResult[] = [];
    const soduims: BilanShape[] = [];
    const crps: BilanShape[] = [];
    const glucoses: BilanShape[] = [];
    const magnesuims: BilanShape[] = [];
    const ggts: BilanShape[] = [];
    const potassuims: BilanShape[] = [];
    const urees: BilanShape[] = [];
    const calcuims: BilanShape[] = [];

    bilans.forEach(bilan => {
      if (bilan.soduim) {
        soduims.push(new BilanShape(bilan.soduim, new Date(bilan.date)));
      }
      if (bilan.crp) {
        crps.push(new BilanShape(bilan.crp, new Date(bilan.date)));
      }
      if (bilan.glucose) {
        glucoses.push(new BilanShape(bilan.glucose, new Date(bilan.date)));
      }
      if (bilan.magnesuim) {
        magnesuims.push(new BilanShape(bilan.magnesuim, new Date(bilan.date)));
      }
      if (bilan.ggt) {
        ggts.push(new BilanShape(bilan.ggt, new Date(bilan.date)));
      }
      if (bilan.potassuim) {
        potassuims.push(new BilanShape(bilan.potassuim, new Date(bilan.date)));
      }
      if (bilan.uree) {
        urees.push(new BilanShape(bilan.uree, new Date(bilan.date)));
      }
      if (bilan.calcuim) {
        calcuims.push(new BilanShape(bilan.calcuim, new Date(bilan.date)));
      }
    });

    if (soduims.length >= 1 && soduims[0].name) {
        results.push(new BilanShapeResult('Soduim', soduims));
    }
    if (crps.length >= 1 && crps[0].name) {
        results.push(new BilanShapeResult('Crp', crps));
    }
    if (glucoses.length >= 1 && glucoses[0].name) {
       results.push(new BilanShapeResult('Glucose', glucoses));
    }
    if (magnesuims.length >= 1 && magnesuims[0].name) {
      results.push(new BilanShapeResult('Magnesuim', magnesuims));
    }
    if (ggts.length >= 1 && ggts[0].name) {
      results.push(new BilanShapeResult('GGT', ggts));
    }
    if (potassuims.length >= 1 && potassuims[0].name) {
      results.push(new BilanShapeResult('Potassuim', potassuims));
    }
    if (urees.length >= 1 && urees[0].name) {
      results.push(new BilanShapeResult('Uree', urees));
    }
    if (calcuims.length >= 1 && calcuims[0].name) {
      results.push(new BilanShapeResult('Calcuim', calcuims));
    }

    if (results.length >= 1 && results[0].name) {
       this.RESULTITEMS = results;
    }
  }


}
