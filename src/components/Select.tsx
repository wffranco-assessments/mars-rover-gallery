import React from 'react';

interface Option<V> {
  [key: string|number]: unknown;
  value: V;
  label: string|number;
}

type Parser<V> = (param: Option<V>) => string | number

interface Props<V, C extends boolean = boolean> {
  cleanable?: C;
  formatKey?: Parser<V>;
  options?: Option<V>[];
  placeholder?: string;
  onChange: (value: C extends true ? V | undefined : V) => void;
  value: C extends true ? V | undefined : V;
}

export default function Select<V>({cleanable, formatKey, onChange, options, placeholder, value}: Props<V>) {
  const parser = format(formatKey);
  const option = options?.find(option => option.value === value);
  const key = parser(option);

  function update(key: string) {
    const option = options?.find(option => parser(option) === key);
    console.log({key, option, options, parsed: parser(option)});
    onChange(option?.value);
  }

  return (
    <select className="form-field" onChange={e => update(e.currentTarget.value)} value={key}>
      {placeholder && <option disabled={!cleanable} value={undefined}>{placeholder}</option>}
      {options?.map(option => (
        (key => (
          <option key={key} value={key}>{option.label}</option>
        ))(parser(option))
      ))}
    </select>
  );
}

function format<V>(parser?: Parser<V>) {
  return (option?: Option<V>): string | number | undefined => {
    if (!option) return undefined;
    if (parser) return parser(option);
    return String(option?.value);
  };
}
