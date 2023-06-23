// Функция для конвертации валюты
function convertCurrency() {
// Получаем значения из полей формы
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
// Курс обмена валют
    var exchangeRates = {
    USD: {
      EUR: 0.83,
      RUB: 80.97,
      CHF: 0.91,
      GBP: 0.72,
      CAD: 1.27,
      AUD: 1.30,
      JPY: 109.73,
      NZD: 1.39,
      MXN: 20.23,
      ZAR: 14.09,
      UAH: 36.93
    },
    EUR: {
      USD: 1.20,
      RUB: 83.33,
      CHF: 1.07,
      GBP: 0.85,
      CAD: 1.50,
      AUD: 1.52,
      JPY: 128.16,
      NZD: 1.63,
      MXN: 23.62,
      ZAR: 16.47,
      UAH: 40.3
    },
    RUB: {
      USD: 0.012,
      EUR: 0.012,
      CHF: 0.013,
      GBP: 0.0098,
      CAD: 0.017,
      AUD: 0.017,
      JPY: 1.47,
      NZD: 0.019,
      MXN: 0.28,
      ZAR: 0.20,
      UAH: 0.47
    },
    CHF: {
      USD: 1.10,
      EUR: 0.94,
      RUB: 76.95,
      GBP: 0.80,
      CAD: 1.41,
      AUD: 1.43,
      JPY: 120.62,
      NZD: 1.53,
      MXN: 22.29,
      ZAR: 15.52,
      UAH: 41.41
    },
    GBP: {
      USD: 1.39,
      EUR: 1.17,
      RUB: 101.78,
      CHF: 1.25,
      CAD: 1.76,
      AUD: 1.78,
      JPY: 150.21,
      NZD: 1.92,
      MXN: 27.91,
      ZAR: 19.44,
      UAH: 46.25
    },
    CAD: {
      USD: 0.79,
      EUR: 0.67,
      RUB: 56.70,
      CHF: 0.71,
      GBP: 0.57,
      AUD: 1.01,
      JPY: 85.27,
      NZD: 1.08,
      MXN: 15.72,
      ZAR: 10.93,
      UAH: 27.4
    },
    AUD: {
      USD: 0.77,
      EUR: 0.65,
      RUB: 53.63,
      CHF: 0.67,
      GBP: 0.56,
      CAD: 0.99,
      JPY: 83.32,
      NZD: 1.06,
      MXN: 15.41,
      ZAR: 10.73,
      UAH: 24.71
    },
    JPY: {
      USD: 0.0091,
      EUR: 0.0078,
      RUB: 0.68,
      CHF: 0.0081,
      GBP: 0.0066,
      CAD: 0.012,
      AUD: 0.012,
      NZD: 0.013,
      MXN: 0.19,
      ZAR: 0.13,
      UAH: 0.27
    },
    NZD: {
      USD: 0.72,
      EUR: 0.61,
      RUB: 50.90,
      CHF: 0.64,
      GBP: 0.53,
      CAD: 0.94,
      AUD: 0.99,
      JPY: 83.39,
      MXN: 14.15,
      ZAR: 9.87,
      UAH: 23.19
    },
    MXN: {
      USD: 0.050,
      EUR: 0.042,
      RUB: 3.49,
      CHF: 0.044,
      GBP: 0.038,
      CAD: 0.063,
      AUD: 0.064,
      JPY: 5.33,
      NZD: 0.071,
      ZAR: 0.61,
      UAH: 2.11
    },
    ZAR: {
      USD: 0.068,
      EUR: 0.058,
      RUB: 4.83,
      CHF: 0.060,
      GBP: 0.052,
      CAD: 0.101,
      AUD: 0.102,
      JPY: 8.48,
      NZD: 0.114,
      MXN: 1.65,
      UAH: 1.91
    },
    UAH: {
      USD: 0.027,
      EUR: 0.024,
      RUB: 2.09,
      CHF: 0.024,
      GBP: 0.021,
      CAD: 0.036,
      AUD: 0.040,
      JPY: 3.64,
      NZD: 0.043,
      MXN: 0.47,
      ZAR: 0.52
    }
  };
// Вычисляем результат конвертации
  var convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
 // Выводим результат в HTML
    document.getElementById('result').innerHTML = ' Результат: ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
}
// Функция для очистки полей
  function clearFields() {
    document.getElementById('amount').value = '';
    document.getElementById('fromCurrency').selectedIndex = 0;
    document.getElementById('toCurrency').selectedIndex = 0;
    document.getElementById('result').innerHTML = '';
}