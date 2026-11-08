/** Loomra's transfer fee: 1.5% of the amount sent, capped at $20. */
export const TRANSFER_FEE_RATE = 0.015;
export const TRANSFER_FEE_CAP = 20;

/** The fee for a transfer, rounded to whole cents. */
export function transferFee(amount: number) {
   const fee = Math.min(amount * TRANSFER_FEE_RATE, TRANSFER_FEE_CAP);
   return Math.round(fee * 100) / 100;
}

const usd = new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
   minimumFractionDigits: 2,
   maximumFractionDigits: 2,
});

/** "$18.60" – always two decimals, so fee figures line up. */
export function formatUsd(value: number) {
   return usd.format(value);
}
