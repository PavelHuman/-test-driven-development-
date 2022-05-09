
export function Calculator(options) {
  this.add = (a, b) => Number.parseFloat((a + b).toFixed(options.precision));

  this.subtract = (a, b) => Number.parseFloat((a - b).toFixed(options.precision));

  this.multiplication = (a, b) => Number.parseFloat((a * b).toFixed(options.precision));

  this.division = (a, b) => Number.parseFloat((a / b).toFixed(options.precision));


}



