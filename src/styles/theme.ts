const color = {} as const;

export const theme = {
  color,
} as const;

export type Theme = typeof theme;

export default theme;
