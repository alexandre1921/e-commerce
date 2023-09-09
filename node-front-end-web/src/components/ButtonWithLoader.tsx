import { Button, Spinner, ButtonProps } from 'flowbite-react';
import { PropsWithChildren } from 'react';

interface Props extends ButtonProps {
  isLoaderVisible: boolean;
}

export function ButtonWithLoader({ isLoaderVisible, children, ...buttonProps }: PropsWithChildren<Props>) {
  return (
    <Button {...buttonProps}>
      <div className="flex gap-2 items-center">
        <div data-hidden={isLoaderVisible} className="data-[hidden=true]:hidden">
          <Spinner className="h-5" />
        </div>
        {children}
      </div>
    </Button>
  );
}
