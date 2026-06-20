export function classNames(
  ...values: Array<string | null | undefined | false | Record<string, boolean>>
): string {
  return values
    .flatMap((value) => {
      if (!value) {
        return [];
      }

      if (typeof value === 'string') {
        return [value];
      }

      return Object.entries(value)
        .filter(([, active]) => active)
        .map(([key]) => key);
    })
    .join(' ');
}
