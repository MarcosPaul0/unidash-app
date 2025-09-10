import { Skeleton } from "@unidash/components/Skeleton";

export function CourseSkeletons() {
  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        <Skeleton className="w-ful h-[184px]" />
        <Skeleton className="w-ful h-[184px]" />
        <Skeleton className="w-ful h-[184px]" />
        <Skeleton className="w-ful h-[184px]" />
      </div>

      <div className="grid grid-cols-7 gap-8">
        <Skeleton className="w-ful h-[581px] col-span-3" />
        <Skeleton className="w-ful h-[581px] col-span-4" />
      </div>

      <div className="grid grid-cols-7 gap-8">
        <Skeleton className="w-ful h-[581px] col-span-3" />
        <Skeleton className="w-ful h-[581px] col-span-4" />
      </div>
    </>
  );
}
