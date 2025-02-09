export const calculateDiscountAmount = ({
  totalAmount, //TODO: change it to amount
  percentage,
}: {
  totalAmount: number;
  percentage: number;
}): number => (percentage * totalAmount) / 100;

export const calculateDiscountPercentage = ({
  totalAmount,
  discountAmount,
}: {
  totalAmount: number;
  discountAmount: number;
}) => (totalAmount === 0 ? 0 : (discountAmount / totalAmount) * 100);

export const calculateAmountIncludingTax = ({
  amountExcludingTax,
  percentage,
}: {
  amountExcludingTax: number;
  percentage: number;
}): number => amountExcludingTax * (1 + percentage / 100);

export const calculateAmountExcludingTaxItem = ({
  totalAmount,
  percentage,
}: {
  totalAmount: number;
  percentage: number;
}): number => totalAmount / (1 + percentage / 100);
