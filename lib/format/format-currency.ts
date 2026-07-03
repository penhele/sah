export const formatNumber = (value: string | number) => {
  if (!value) return "";
  const stringValue = value.toString().replace(/\D/g, "");
  return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
