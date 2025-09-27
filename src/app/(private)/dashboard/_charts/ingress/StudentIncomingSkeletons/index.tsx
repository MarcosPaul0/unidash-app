import { Skeleton } from "@unidash/components/Skeleton";

export function StudentIncomingSkeletons() {
  return (
    <>
      <Skeleton className="w-ful h-[46px] max-w-[300px] rounded-xl" />

      <div className="grid grid-cols-3 gap-8">
        <Skeleton className="w-ful h-[486px] col-span-2" />
        <Skeleton className="w-ful h-[486px] col-span-1" />
      </div>

      <Skeleton className="w-ful h-[568px] " />
    </>
  );
}
