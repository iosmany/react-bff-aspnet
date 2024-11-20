import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="space-y-4">
      {/* Skeleton for title */}
      <div className="h-6 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>

      {/* Skeleton for text */}
      <div className="h-4 bg-gray-300 rounded-md w-full animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded-md w-5/6 animate-pulse"></div>
      <div className="h-4 bg-gray-300 rounded-md w-4/5 animate-pulse"></div>

      {/* Skeleton for image */}
      <div className="h-48 bg-gray-300 rounded-md w-full animate-pulse"></div>

      {/* Skeleton for button */}
      <div className="h-10 bg-blue-300 rounded-md w-1/4 animate-pulse"></div>
    </div>
  );
};

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <LoadingSkeleton />
}