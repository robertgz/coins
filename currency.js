
exports.getCoins = function (amount) {
  let coins = { };

  coins.dollars = Math.floor(amount);

  let cents = Math.round((amount - coins.dollars) * 100);

  coins.quarters = Math.floor(cents / 25);
  cents = cents % 25;

  coins.dimes = Math.floor(cents / 10);
  cents = cents % 10;

  coins.nickels = Math.floor(cents / 5);
  cents = cents % 5;

  coins.pennies = cents;

  return coins;
}
