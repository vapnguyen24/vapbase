export const radius = {
    sharp: 0,
    xxs: 2,
    xs: 4,
    sm: 6,
    md: 12,
    ml: 16,
    lg: 24,
    xl: 36,
    round: 9999,
} as const;

export type Radius = keyof typeof radius;
