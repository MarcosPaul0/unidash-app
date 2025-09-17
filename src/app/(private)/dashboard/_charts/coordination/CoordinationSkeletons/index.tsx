import { Skeleton } from "@unidash/components/Skeleton";

export function CoordinationSkeletons() {
  return (
    <>
      <Skeleton className="w-ful h-[46px] max-w-[300px] rounded-xl" />

      <div className="grid grid-cols-2 gap-8">
        <Skeleton className="w-ful h-[568px]" />
        <Skeleton className="w-ful h-[568px]" />
      </div>
    </>
  );
}
