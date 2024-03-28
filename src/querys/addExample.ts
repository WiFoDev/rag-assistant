import type { ExampleDTO } from '@/server/schemas';

export const addExample = async (data: ExampleDTO) => {
  const res = await fetch('/api/example', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Failed to add example');
  }
  return res.json();
};
