import React from 'react';

const Filter = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="2000"
      className="overflow-x-auto pb-4 md:pb-6 lg:pb-8"
    >
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-center">SKILLS</th>
            <th className="border border-gray-300 px-4 py-2 text-center">EDUCATION</th>
            <th className="border border-gray-300 px-4 py-2 text-center">MARKS</th>
            <th className="border border-gray-300 px-4 py-2 text-center">CERTIFICATES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">Data Structures, C++</td>
            <td className="border border-gray-300 px-4 py-2 text-center">B.Tech (CSE), Dehradun</td>
            <td className="border border-gray-300 px-4 py-2 text-center">9.32 CGPA</td>
            <td className="border border-gray-300 px-4 py-2 text-center">Internshala (Web Development)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">MERN Stack Development</td>
            <td className="border border-gray-300 px-4 py-2 text-center">12th (BSEB), Patna</td>
            <td className="border border-gray-300 px-4 py-2 text-center">81.4%</td>
            <td className="border border-gray-300 px-4 py-2 text-center">Internship (Digiswarm Company)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">Tailwind CSS</td>
            <td className="border border-gray-300 px-4 py-2 text-center">10th (BSEB), Patna</td>
            <td className="border border-gray-300 px-4 py-2 text-center">79.4%</td>
            <td className="border border-gray-300 px-4 py-2 text-center">-</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2 text-center">Next.js Development</td>
            <td className="border border-gray-300 px-4 py-2 text-center">-</td>
            <td className="border border-gray-300 px-4 py-2 text-center">-</td>
            <td className="border border-gray-300 px-4 py-2 text-center">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
