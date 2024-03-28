'use client';
import { Input } from '@nextui-org/react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> extends UseControllerProps<T> {
  label: string;
  type?: 'email' | 'number';
  placeholder: string;
}

export function InputField<T extends FieldValues>(props: InputFieldProps<T>) {
  const { field, fieldState } = useController(props);
  return (
    <Input
      {...field}
      isRequired={!!props.rules?.required}
      type={props.type || 'text'}
      label={props.label}
      labelPlacement="outside"
      placeholder={props.placeholder}
      variant="bordered"
      isInvalid={!!fieldState.error}
      errorMessage={fieldState.error?.message}
      radius="sm"
    />
  );
}
