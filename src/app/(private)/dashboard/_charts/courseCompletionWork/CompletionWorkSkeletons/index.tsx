import { Skeleton } from "@unidash/components/Skeleton";

export function CompletionWorkSkeletons() {
  return (
    <>
      <Skeleton className="w-ful h-[46px] max-w-[300px] rounded-xl" />

      <div className="flex flex-col gap-4 md:grid md:grid-cols-7 md:gap-8">
        <Skeleton className="w-ful h-[596px] col-span-3" />
        <Skeleton className="w-ful h-[596px] col-span-4" />
      </div>
    </>
  );
}
