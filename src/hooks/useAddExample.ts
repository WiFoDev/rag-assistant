import { useMutation } from '@tanstack/react-query';

import { addExample } from '@/querys/addExample';

export const useAddExample = () => {
  return useMutation({
    mutationFn: addExample,
  });
};
