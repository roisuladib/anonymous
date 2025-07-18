'use client';

import { useEffect } from 'react';
import { Button } from '@heroui/button';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid size-full place-items-center">
      <div className="flex flex-col items-center space-y-2">
        <h2>Something went wrong!</h2>
        <Button
          color="danger"
          onPress={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }>
          Try again
        </Button>
      </div>
    </div>
  );
}
