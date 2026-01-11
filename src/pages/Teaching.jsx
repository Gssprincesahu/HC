const Teaching = () => {
  return (
    <div className="border border-[#76323F] p-3 sm:p-4 md:p-6 bg-[#D7CEC7]">
      
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#76323F] mb-4">
        Subjects Taught
      </h2>

      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <table className="w-full border-collapse text-black text-sm sm:text-base">
          <tbody>
            <tr className="border-b border-[#76323F]">
              <td className="py-3 sm:py-4 font-semibold text-[#76323F] w-32 sm:w-40">BAS 01</td>
              <td className="py-3 sm:py-4">Engineering Mathematics I</td>
            </tr>

            <tr className="border-b border-[#76323F]">
              <td className="py-3 sm:py-4 font-semibold text-[#76323F]">BAS 07</td>
              <td className="py-3 sm:py-4">Engineering Mathematics II</td>
            </tr>

            <tr className="border-b border-[#76323F]">
              <td className="py-3 sm:py-4 font-semibold text-[#76323F]">BAS 23</td>
              <td className="py-3 sm:py-4">Engineering Mathematics IV</td>
            </tr>

            <tr className="border-b border-[#76323F]">
              <td className="py-3 sm:py-4 font-semibold text-[#76323F]">BAS 24</td>
              <td className="py-3 sm:py-4">Applied Computational Mathematics</td>
            </tr>

            <tr className="border-b border-[#76323F]">
              <td className="py-3 sm:py-4 font-semibold text-[#76323F]">BAS 29</td>
              <td className="py-3 sm:py-4">Numerical Methods</td>
            </tr>

            <tr className="border-b border-[#76323F]">
              <td className="py-3 sm:py-4 font-semibold text-[#76323F]">MAS 112</td>
              <td className="py-3 sm:py-4">Advanced Engineering Mathematics</td>
            </tr>

            <tr className="border-b border-[#76323F]">
              <td className="py-3 sm:py-4 font-semibold text-[#76323F]">MMS-102</td>
              <td className="py-3 sm:py-4">Linear Algebra and Matrix Theory</td>
            </tr>

            <tr className="border-b border-[#76323F]">
              <td className="py-3 sm:py-4 font-semibold text-[#76323F]">MMS-108</td>
              <td className="py-3 sm:py-4">Abstract Algebra</td>
            </tr>

            <tr className="border-b border-[#76323F]">
              <td className="py-3 sm:py-4 font-semibold text-[#76323F]">MMS-202</td>
              <td className="py-3 sm:py-4">Theory of Computing</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Teaching;
