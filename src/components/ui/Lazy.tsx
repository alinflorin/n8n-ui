import { Center, Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
const LoadingSpinner = () => (
  <Center h="100%" w="100%">
    <Spinner size="xl" />
  </Center>
);
export const Lazy = ({
  component,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: () => Promise<{ default: React.ComponentType<any> }>;
}) => {
  const Component = lazy(component);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Component />
    </Suspense>
  );
};
