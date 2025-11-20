import React from 'react';
import { BarangayData } from '../types';
import { getTableColor } from '../constants';

interface RiskTableProps {
  data: BarangayData[];
  type: 'FRI' | 'HCI' | 'SCI' | 'Exposure' | 'Vulnerability' | 'Hazard';
}

const RiskTable: React.FC<RiskTableProps> = ({ data, type }) => {
  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Barangay</th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Index Value</th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Rating</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((item) => (
            <tr key={item.name}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{item.name}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 font-mono">{item.value.toFixed(3)}</td>
              <td className={`whitespace-nowrap px-3 py-4 text-sm font-bold ${getTableColor(item.rating, type)}`}>
                <span className="px-2 py-1 rounded">
                    {item.rating}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskTable;