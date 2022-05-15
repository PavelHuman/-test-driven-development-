
export function Calculator(options) {
  this.add = (a, b) => this.format(a + b);

  this.subtract = (a, b) => this.format(a - b);

  this.multiplication = (a, b) => this.format(a * b);

  this.division = (a, b) => this.format(a / b);

  this.format = function (value) {

    return Number.parseFloat((value).toFixed(options.precision));

  }
}



