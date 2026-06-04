import React from 'react';
const stats = [
  { value: 10, label: "Total Friends" },
  { value: 3, label: "On Track" },
  { value: 6, label: "Need Attention" },
  { value: 12, label: "Interactions This Month" },
];

const Statss = () => {
    return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-2.5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center rounded-2xl bg-white px-6 py-8 shadow-sm"
        >
          <span className="text-4xl font-bold text-teal-800">{stat.value}</span>
          <span className="mt-2 text-sm text-gray-500">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Statss;