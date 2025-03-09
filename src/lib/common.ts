export function getLabelFromOption(options: { value: number; label: string }[], value: number): string {
  const target = options.find(option => option.value === value);
  return target?.label ?? "";
}
