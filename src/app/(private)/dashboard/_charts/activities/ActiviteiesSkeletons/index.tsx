import { Skeleton } from "@unidash/components/Skeleton";

export function ActivitiesSkeletons() {
  return (
    <>
      {/* <div className="grid grid-cols-4 gap-8">
        <Skeleton className="w-ful h-[184px]" />
        <Skeleton className="w-ful h-[184px]" />
        <Skeleton className="w-ful h-[184px]" />
        <Skeleton className="w-ful h-[184px]" />
      </div> */}

      <Skeleton className="w-ful h-[46px] max-w-[300px] rounded-xl" />

      <Skeleton className="w-ful h-[568px]" />
      {/* <Skeleton className="w-ful h-[568px]" />
      <Skeleton className="w-ful h-[568px]" />

      <Skeleton className="w-ful h-[46px] max-w-[300px] rounded-xl" />

      <Skeleton className="w-ful h-[568px]" /> */}
    </>
  );
}
