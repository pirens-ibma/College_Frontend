import React from "react";

const EntranceExams = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* PAGE TITLE */}
      <section className="bg-[#0b2d4d] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white text-center">
                       ENTRANCE EXAM
          </h1>

         </div>
      </section>


      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-[#0b2d4d] mb-6">
          Entrance Exam
        </h2>

        <p className="text-gray-700 leading-7 mb-4">
          There are various types of entrance examinations for the course
          of MBA & MCA. The dates of the examinations and declaration of
          results are different for each examination.
        </p>

        <p className="text-gray-700 leading-7 mb-10">
          Interested candidates can check the respective official websites
          for examination details and admission related information.
        </p>


        {/* MCA SECTION */}
        <div className="mb-12">

          <h2 className="text-2xl font-bold text-[#0b2d4d] mb-2">
            MAH-MCA-CET 2025-26 Notification
          </h2>

          <div className="w-full overflow-x-auto mt-6">

            <table className="w-full border-collapse border border-gray-300">

              <thead>
                <tr className="bg-[#0b2d4d] text-white">

                  <th className="border border-gray-300 px-6 py-4 text-left">
                    Name of Exam for MCA
                  </th>

                  <th className="border border-gray-300 px-6 py-4 text-left">
                    Website
                  </th>

                </tr>
              </thead>

              <tbody>

                <tr className="hover:bg-gray-50">

                  <td className="border border-gray-300 px-6 py-4">
                    MAH-CET (Conducted by DTE)
                  </td>

                  <td className="border border-gray-300 px-6 py-4">
                    <a
                      href="https://cetcell.mahacet.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#079447] hover:underline"
                    >
                      cetcell.mahacet.org
                    </a>
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>


        {/* MBA SECTION */}
        <div>

          <h2 className="text-2xl font-bold text-[#0b2d4d] mb-2">
            MAH-MBA-CET 2025-26 Notification
          </h2>

          <div className="w-full overflow-x-auto mt-6">

            <table className="w-full border-collapse border border-gray-300">

              <thead>
                <tr className="bg-[#0b2d4d] text-white">

                  <th className="border border-gray-300 px-6 py-4 text-left">
                    Name of Exam for MBA
                  </th>

                  <th className="border border-gray-300 px-6 py-4 text-left">
                    Website
                  </th>

                </tr>
              </thead>

              <tbody>

                {/* MAH CET */}
                <tr className="hover:bg-gray-50">

                  <td className="border border-gray-300 px-6 py-4">
                    MAH-CET (Conducted by DTE)
                  </td>

                  <td className="border border-gray-300 px-6 py-4">
                    <a
                      href="https://cetcell.mahacet.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#079447] hover:underline"
                    >
                      cetcell.mahacet.org
                    </a>
                  </td>

                </tr>


                {/* ATMA */}
                <tr className="hover:bg-gray-50">

                  <td className="border border-gray-300 px-6 py-4">
                    ATMA (Conducted by AIMS)
                  </td>

                  <td className="border border-gray-300 px-6 py-4">
                    <a
                      href="https://www.atmaaims.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#079447] hover:underline"
                    >
                      www.atmaaims.com
                    </a>
                  </td>

                </tr>


                {/* CAT */}
                <tr className="hover:bg-gray-50">

                  <td className="border border-gray-300 px-6 py-4">
                    CAT (Conducted by IIM)
                  </td>

                  <td className="border border-gray-300 px-6 py-4">
                    <a
                      href="https://iimcat.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#079447] hover:underline"
                    >
                      www.iimcat.ac.in
                    </a>
                  </td>

                </tr>


                {/* XAT */}
                <tr className="hover:bg-gray-50">

                  <td className="border border-gray-300 px-6 py-4">
                    XAT
                  </td>

                  <td className="border border-gray-300 px-6 py-4">
                    <a
                      href="https://xatonline.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#079447] hover:underline"
                    >
                      www.xatonline.in
                    </a>
                  </td>

                </tr>


                {/* CMAT */}
                <tr className="hover:bg-gray-50">

                  <td className="border border-gray-300 px-6 py-4">
                    CMAT
                  </td>

                  <td className="border border-gray-300 px-6 py-4">
                    <a
                      href="https://cmat.nta.nic.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#079447] hover:underline"
                    >
                      www.cmat.nta.nic.in
                    </a>
                  </td>

                </tr>


                {/* GMAT */}
                <tr className="hover:bg-gray-50">

                  <td className="border border-gray-300 px-6 py-4">
                    GMAT
                  </td>

                  <td className="border border-gray-300 px-6 py-4">
                    <a
                      href="https://www.mba.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#079447] hover:underline"
                    >
                      www.mba.com
                    </a>
                  </td>

                </tr>


                {/* MAT */}
                <tr className="hover:bg-gray-50">

                  <td className="border border-gray-300 px-6 py-4">
                    MAT
                  </td>

                  <td className="border border-gray-300 px-6 py-4">
                    <a
                      href="https://mat.aima.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#079447] hover:underline"
                    >
                      www.mat.aima.in
                    </a>
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </div>
  );
};

export default EntranceExams;