'use client';

import { WrenchIcon } from '@heroicons/react/24/outline';

export default function CustomersPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
      <WrenchIcon className="h-16 w-16 text-gray-400 mb-4" />
      <h1 className="text-2xl font-bold text-gray-700 mb-2">Customers Page</h1>
      <p className="text-gray-500 text-center max-w-md">
        This page is currently under construction. We're working hard to bring you a better experience.
        Please check back soon!
      </p>
    </div>
  );
}