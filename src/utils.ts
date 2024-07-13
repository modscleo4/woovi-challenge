export type User = {
    firstName: string;
    lastName: string;
};

export type Step = 'payment-method' | 'pix' | 'credit-card' | 'done';

export function calculateInterest(installments: number): number {
    return installments > 1 ? 0.005 : 0;
}

export function calculateInterestDiscount(installments: number): number {
    return installments === 4 ? 3 : 0;
}

export function calculateTotalWithInterest(
    baseValue: number,
    installments: number,
    interest?: number,
    interestDiscount?: number
): {
    installment: number;
    total: number;
} {
    interest = interest ?? calculateInterest(installments);
    interestDiscount = interestDiscount ?? calculateInterestDiscount(installments);

    const baseInstallment = baseValue / installments;
    const installment = baseInstallment + (installments * baseInstallment * (interest - (interest * (interestDiscount ?? 0) / 100)));
    const total = installment * installments;

    return { installment, total };
}
