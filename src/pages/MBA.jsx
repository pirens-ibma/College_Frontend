import React from "react";

const quickLinks = [
  { name: "About MBA", id: "about-mba" },
  { name: "MBA HOD", id: "mba-hod" },
 {
  name: "MBA Faculty",
  link: "/department/mba/faculty",
},
  { name: "Specializations Offered", id: "specializations" },
  { name: "MBA Syllabus", id: "mba-syllabus" },
  { name: "Fees Structure", id: "fees-structure" },
  { name: "Hostel Facility", id: "hostel-facility" },
  { name: "Institute Location", id: "institute-location" },
];

const specializations = [
  "Marketing Management (MKT)",
  "Financial Management (FIN)",
  "Human Resource Management (HRM)",
  "Operation and Supply Chain Management (OSCM)",
  "Business Analytics (BA)",
  "Agri Business Management (ABM)",
  "Pharma & Healthcare Management (PHM)",
];

function SectionTitle({ children }) {
  return (
    <h2 className="inline-block border-b-2 border-[#0b3558] pb-2 text-xl font-bold text-[#0b3558]">
      {children}
    </h2>
  );
}

function MBA() {
  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          PAGE TITLE
      ====================================================== */}
      <section className="bg-[#14568a]">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
            Master of Business Administration - MBA
          </h1>
        </div>
      </section>


      {/* =====================================================
          MAIN PAGE
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[230px_1fr]">


          {/* =================================================
              LEFT QUICK LINKS
          ================================================= */}
          <aside className="h-fit bg-[#f2f2f2]">

            <div className="p-5">

              <h2 className="mb-5 text-2xl font-normal text-[#073b68]">
                Quick Link
              </h2>

              <div>
                {quickLinks.map((link) => (
  <a
    key={link.name}
    href={link.link || `#${link.id}`}
    className="block border-b border-[#d5d5d5] py-3 text-sm text-blue-600 transition hover:text-[#073b68] hover:underline"
  >
    {link.name}
  </a>
))}
                
                
              </div>


              {/* DTE CODE */}
              <div className="mt-6 text-sm leading-6 text-gray-700">
                <p>
                  <span className="font-semibold">
                    DTE Institute Code for MBA:
                  </span>
                </p>

                <p>511710110</p>
              </div>

            </div>

          </aside>


          {/* =================================================
              RIGHT CONTENT
          ================================================= */}
          <main className="min-w-0">


            {/* =================================================
                VISION
            ================================================= */}
            <section className="mb-10">

              <SectionTitle>
                Vision
              </SectionTitle>

              <p className="mt-5 text-base leading-8 text-gray-800">
                To be a leading centre for management education that
                empowers rural youth to become competent, ethical, and
                innovative business leaders driving sustainable rural and
                national development.
              </p>

            </section>


            {/* =================================================
                MISSION
            ================================================= */}
            <section className="mb-10">

              <SectionTitle>
                Mission
              </SectionTitle>

              <ol className="mt-5 list-decimal space-y-3 pl-6 text-base leading-8 text-gray-800">

                <li>
                  To provide affordable, quality management education
                  that builds leadership, analytical, and entrepreneurial
                  capabilities.
                </li>

                <li>
                  To nurture socially responsible managers equipped to
                  address challenges of rural and global business
                  environments.
                </li>

                <li>
                  To promote experiential learning, research, and industry
                  interaction for holistic development and employability.
                </li>

                <li>
                  To advance the vision of Padma Bhushan Dr. Balasaheb
                  Vikhe Patil by fostering inclusive growth through
                  managerial excellence.
                </li>

              </ol>

            </section>


            {/* =================================================
                ABOUT MBA
            ================================================= */}
            <section
              id="about-mba"
              className="mb-10 scroll-mt-24"
            >

              <SectionTitle>
                About MBA Department
              </SectionTitle>

              <div className="mt-5 space-y-3 text-base leading-8 text-gray-800">

                <p>
                  Master of Business Administration (MBA) department at
                  the PIRENS IBMA was established in 1993.
                </p>

                <p>
                  At present, we have 120 students intake in MBA first
                  year.
                </p>

                <p>
                  Course duration for MBA is 2 Years. For this course
                  we have 14 internal Staff.
                </p>

              </div>

            </section>


            {/* =================================================
                ELIGIBILITY
            ================================================= */}
            <section className="mb-10">

              <SectionTitle>
                Eligibility Criteria for Admission of MBA Course
              </SectionTitle>

              <div className="mt-5 text-base leading-8 text-gray-800">

                <p>
                  <span className="font-semibold">
                    Eligibility Criteria :-{" "}
                  </span>

                  Candidate should have passed with minimum of 50% marks
                  in aggregate (45% marks in aggregate in case of
                  candidates of backward class categories belonging to
                  Maharashtra State only) in Bachelor's Degree in any
                  discipline recognised by the Association of Indian
                  Universities.
                </p>

                <p className="mt-4">
                  OR
                </p>

                <p className="mt-4">
                  Appeared for the final year examination of Bachelor's
                  degree in any discipline recognised by the Association
                  of Indian Universities and valid score of DTE CET,
                  CAT, XAT, ATMA or respective regulating bodies.
                </p>

                <p className="mt-4">
                  For availing the benefit of all types of government
                  scholarships it is mandatory to get admission in
                  respective programme through Centralized Admission
                  Process (CAP) conducted by the respective authorities
                  or agencies.
                </p>

              </div>

            </section>


            {/* =================================================
                MBA CURRICULUM
            ================================================= */}
            <section
              id="mba-syllabus"
              className="mb-10 scroll-mt-24"
            >

              <SectionTitle>
                MBA Program Curriculum Aspects
              </SectionTitle>

              <h3 className="mt-5 mb-3 text-base font-semibold text-[#0b3558]">
                Spread of Course Types Semester wise
              </h3>


              <div className="overflow-x-auto">

                <table className="w-full min-w-[650px] border-collapse border border-gray-300 text-sm">

                  <thead>
                    <tr className="bg-gray-50">

                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                        Semester
                      </th>

                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                        I
                      </th>

                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                        II
                      </th>

                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                        III
                      </th>

                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                        IV
                      </th>

                    </tr>
                  </thead>


                  <tbody>

                    <tr>

                      <td className="border border-gray-300 px-4 py-3">
                        Generic/Subject Core Course (3 Credits)
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        6
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        6
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        4
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        4
                      </td>

                    </tr>


                    <tr>

                      <td className="border border-gray-300 px-4 py-3">
                        Generic Elective University Level (2 Credits)
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        3
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        3
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        3
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        2
                      </td>

                    </tr>


                    <tr>

                      <td className="border border-gray-300 px-4 py-3">
                        Generic/Subject Electives Institute Level
                        (2 Credits)
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        3
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        3
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        3
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        2
                      </td>

                    </tr>


                    <tr>

                      <td className="border border-gray-300 px-4 py-3">
                        Summer Internship Project (SIP) (6 Credits)
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        -
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        -
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        1
                      </td>

                      <td className="border border-gray-300 px-4 py-3 text-center">
                        -
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </section>


            {/* =================================================
                SPECIALIZATIONS + ADMISSION
            ================================================= */}
            <section
              id="specializations"
              className="scroll-mt-24"
            >

              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">


                {/* SPECIALIZATION */}
                <div>

                  <h3 className="text-base font-bold text-[#0b3558]">
                    Following are the Specialization Offer @ IBMA
                  </h3>

                  <p className="mt-2 font-semibold text-gray-800">
                    New Major Specialization as per Revised Syllabus
                    2024 as per SPPU
                  </p>


                  <ol className="mt-4 list-decimal space-y-1 pl-6 text-sm leading-6 text-gray-800">

                    {specializations.map((item, index) => (
                      <li key={index}>
                        {item}
                      </li>
                    ))}

                  </ol>

                </div>


                {/* ADMISSION CONTACT */}
                <div>

                  <h3 className="text-base font-bold text-[#0b3558]">
                    Admission call for MBA:
                  </h3>

                  <div className="mt-4 space-y-3 text-sm leading-6 text-gray-800">

                    <p>
                      <span className="font-semibold">
                        Dr. M. A. Tamboli:
                      </span>
                      <br />
                      9760610560
                    </p>

                    <p>
                      <span className="font-semibold">
                        Prof. P. D. Borhade:
                      </span>
                      <br />
                      9890919972
                    </p>

                    <p>
                      For any query regarding admissions or assistance
                      you can mail us at:
                    </p>

                    <a
                      href="mailto:directoribma@pirens.in"
                      className="text-blue-600 hover:underline"
                    >
                      directoribma@pirens.in
                    </a>

                    <p>
                      Office: 02422-273694
                    </p>

                  </div>

                </div>

              </div>

            </section>


            {/* =================================================
                PLACEHOLDER SECTIONS FOR QUICK LINKS
            ================================================= */}

            <section id="mba-hod" className="scroll-mt-24" />

            <section id="mba-faculty" className="scroll-mt-24" />

            <section id="fees-structure" className="scroll-mt-24" />

            <section id="hostel-facility" className="scroll-mt-24" />

            <section id="institute-location" className="scroll-mt-24" />

          </main>

        </div>

      </div>

    </div>
  );
}

export default MBA;