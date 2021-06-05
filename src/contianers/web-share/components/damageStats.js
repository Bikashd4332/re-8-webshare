import React from 'react';

const DamageStats = (props) => (
    <table className="min-w-full bg-white ">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Age</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Damage points</th>
        </tr>
      </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="w-1/3 text-left py-3 px-4">Lady Dimitrescu</td>
        <td className="w-1/3 text-left py-3 px-4">44</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">67</a></td>
      </tr>
      <tr className="bg-gray-100">
        <td className="w-1/3 text-left py-3 px-4">Donna Beneviento</td>
        <td className="w-1/3 text-left py-3 px-4">27</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">54</a></td>
      </tr>
      <tr>
        <td className="w-1/3 text-left py-3 px-4">Heisenberg</td>
        <td className="w-1/3 text-left py-3 px-4">36</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">87</a></td>
      </tr>
      <tr>
        <td className="w-1/3 text-left py-3 px-4">Mother Miranda</td>
        <td className="w-1/3 text-left py-3 px-4">N/A</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">100</a></td>
  </tr>
    </tbody>
    </table>
);

export default DamageStats;
