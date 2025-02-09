// formatCurrency.ts

type CurrencyLocaleMap = {
  [currencyCode: string]: string;
};

interface FormatCurrencyOptions extends Intl.NumberFormatOptions {
  currency?: string;
  userLocale?: string;
}

export function formatCurrency(
  amount: number,
  options: FormatCurrencyOptions = {}
): string {
  const {
    currency = 'INR', // Default to 'INR' if currency is not provided
    userLocale,
    maximumFractionDigits = 2, // Default to 0
    ...numberFormatOptions
  } = options;

  const currencyLocaleMap: CurrencyLocaleMap = {
    USD: 'en-US',
    EUR: 'de-DE',
    INR: 'en-IN',
    JPY: 'ja-JP',
    GBP: 'en-GB',
    AUD: 'en-AU',
    // Add more currencies and locales as needed
  };

  // Determine the locale to use
  const locale = userLocale ?? currencyLocaleMap[currency] ?? 'en-IN'; // Default to 'en-IN'

  // Create the format options, including any additional options
  const formatOptions: Intl.NumberFormatOptions = {
    style: 'currency',
    currency, // Use the currency from destructuring
    maximumFractionDigits, // Use the maximumFractionDigits from destructuring
    ...numberFormatOptions, // Spread any additional options
  };

  // Create the formatter
  const formatter = new Intl.NumberFormat(locale, formatOptions);

  // Format and return the amount
  return formatter.format(amount);
}

// deformatCurrency.ts

export function deformatCurrency(
  formattedAmount: string,
  options: FormatCurrencyOptions = {}
): number {
  const {
    currency = 'INR', // Default currency if not provided
    userLocale,
  } = options;

  const currencyLocaleMap: CurrencyLocaleMap = {
    USD: 'en-US',
    EUR: 'de-DE',
    INR: 'en-IN',
    JPY: 'ja-JP',
    GBP: 'en-GB',
    AUD: 'en-AU',
    // Add more currencies and locales as needed
  };

  // Determine the locale
  const locale = userLocale ?? currencyLocaleMap[currency] ?? 'en-IN';

  // Remove locale-specific symbols and formatting
  const cleanedAmount = formattedAmount
    .replace(/[^\d.,-]/g, '') // Remove everything except digits, comma, dot, and minus
    .replace(new RegExp(`[^\\d${locale === 'de-DE' ? ',' : '.'}+-]`, 'g'), ''); // Keep decimal separator

  // Replace comma with dot for consistent decimal handling (locale-dependent)
  let normalizedAmount = cleanedAmount.replace(/,/g, '.');

  // Parse the normalized number
  const parsedAmount = parseFloat(normalizedAmount);

  if (isNaN(parsedAmount)) {
    throw new Error(`Invalid formatted amount: ${formattedAmount}`);
  }

  return parsedAmount;
}
