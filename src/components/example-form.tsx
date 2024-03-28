'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useAddExample } from '@/hooks';
import { ExampleSchema } from '@/server/schemas';
import type { ExampleDTO } from '@/server/schemas';

import { InputField } from './ui';

export function ExampleForm() {
  const { handleSubmit, control } = useForm<ExampleDTO>({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(ExampleSchema),
  });
  const { mutate } = useAddExample();

  const onSubmit = handleSubmit(data => {
    mutate(data, {
      onSuccess: () => {
        toast.success('Example added');
      },
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <InputField
        label="Name"
        placeholder="My Name"
        name={'name'}
        control={control}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
