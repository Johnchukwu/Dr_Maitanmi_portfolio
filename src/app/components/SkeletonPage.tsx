

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonPage() {
  return (
    <div className="p-6 space-y-6">
      <Skeleton height={40} width={200} />
      <Skeleton count={3} />
      <Skeleton height={30} width="80%" />
      <Skeleton count={5} />
    </div>
  );
}
