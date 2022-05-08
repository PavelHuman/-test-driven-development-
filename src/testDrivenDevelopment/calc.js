
export function Calculator(options) {
  this.add = (a, b) => Number.parseFloat((a + b).toFixed(options.precision));



}



