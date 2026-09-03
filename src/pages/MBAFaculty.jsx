import React from "react";

const faculty = [
  {
    name: "Dr. N. U. Bankar",
    designation: "Professor",
    experience: "14 Years",
    department: "MBA",
    qualification: "B.Sc., MBA, Ph.D., UGC-NET",
  },
  {
    name: "Dr. M. A. Tamboli",
    designation: "Director, IBMA",
    experience: "14 Years",
    department: "MBA",
    qualification: "BBA, MBA, DLL&LW, Ph.D.",
  },
  {
    name: "Dr. R.B. Valave",
    designation: "HOD, MBA",
    experience: "10 Year 5 Months",
    department: "MBA",
    qualification: "B.Sc., MBA, Ph.D.(Pursuing)",
  },
  {
    name: "Dr. S. R. Vikhe Patil",
    designation: "Assistant Professor",
    experience: "08 Years",
    department: "MBA",
    qualification: "B.A., MBA, Ph.D.",
  },
  {
    name: "Dr. S. V. Bidgar",
    designation: "Assistant Professor",
    experience: "10 Years 9 Months",
    department: "MBA",
    qualification: "BE, MBA, Ph.D.",
  },
  {
    name: "Mr. P. D. Borhade",
    designation: "Assistant Professor",
    experience: "09 Years 9 Months",
    department: "MBA",
    qualification:
      "B.Sc(Computer Science), MBA(Financial Management), Ph.D.(Pursuing)",
  },
  {
    name: "Mr. S. G. Dighe",
    designation: "Assistant Professor",
    experience: "17 Years",
    department: "MBA",
    qualification: "B. Sc., M. Sc., MBA (MKTG MGMT & HRM)",
  },
  {
    name: "Mr. Y. L. Aher",
    designation: "Assistant Professor",
    experience: "14 Years 11 Months",
    department: "MBA",
    qualification: "BHMCT, MBA (HRM)",
  },
  {
    name: "Ms. S. S. Bhandhari",
    designation: "Assistant Professor",
    experience: "10 Years 6 Months",
    department: "MBA",
    qualification: "B.Com., MBA, Ph.D.(Pursuing)",
  },
  {
    name: "Ms. B. S. Kale",
    designation: "Assistant Professor",
    experience: "08 Years",
    department: "MBA",
    qualification: "B.Com., MBA",
  },
  {
    name: "Ms. Pooja Parjane",
    designation: "Assistant Professor",
    experience: "05 Year",
    department: "MBA",
    qualification: "BBA(CA), MBA",
  },
  {
    name: "Dr. N.P. Awari",
    designation: "Assistant Professor",
    experience: "13 Year",
    department: "MBA",
    qualification: "B.Pharm., MBA, Ph.D.",
  },
  {
    name: "Mr. R.V. Dharmadhikari",
    designation: "Assistant Professor",
    experience: "15 Years",
    department: "MBA",
    qualification:
      "B.E.(E&TC), M.E.(VLSI & Embedded System), M.B.A.(Marketing)",
  },
];

function FacultyCard({ member }) {
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* PHOTO */}
      <div className="flex h-64 items-center justify-center bg-gray-100">

        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-[#e5edf5] text-5xl font-bold text-[#14568a]">
          {member.name
            .replace("Dr. ", "")
            .replace("Mr. ", "")
            .replace("Ms. ", "")
            .charAt(0)}
        </div>

      </div>

      {/* DETAILS */}
      <div className="p-5">

        <h2 className="mb-3 text-lg font-bold text-[#0b3558]">
          {member.name}
        </h2>

        <div className="space-y-2 text-sm leading-6 text-gray-700">

          <p>
            <span className="font-semibold text-gray-900">
              Designation:
            </span>{" "}
            {member.designation}
          </p>

          <p>
            <span className="font-semibold text-gray-900">
              Experience:
            </span>{" "}
            {member.experience}
          </p>

          <p>
            <span className="font-semibold text-gray-900">
              Department:
            </span>{" "}
            {member.department}
          </p>

          <p>
            <span className="font-semibold text-gray-900">
              Qualification:
            </span>{" "}
            {member.qualification}
          </p>

        </div>

      </div>

    </div>
  );
}

function MBAFaculty() {
  return (
    <div className="min-h-screen bg-white">

      {/* ==================================================
          PAGE TITLE
      ================================================== */}

      <section className="bg-[#14568a]">

        <div className="mx-auto max-w-7xl px-4 py-5">

          <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
            MBA Faculty
          </h1>

        </div>

      </section>


      {/* ==================================================
          CONTENT
      ================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">

        {/* PAGE HEADING */}

        <div className="mb-8">

          <h2 className="inline-block border-b-2 border-[#0b3558] pb-2 text-2xl font-bold text-[#0b3558]">
            MBA Faculty Profile
          </h2>

          <p className="mt-4 text-gray-600">
            Meet our experienced and qualified faculty members of the
            Master of Business Administration department.
          </p>

        </div>


        {/* ==================================================
            FACULTY GRID
        ================================================== */}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {faculty.map((member, index) => (
            <FacultyCard
              key={index}
              member={member}
            />
          ))}

        </div>

      </main>

    </div>
  );
}

export default MBAFaculty;