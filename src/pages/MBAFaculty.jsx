const faculty = [
  {
    name: "Dr. N. U. Bankar",
    designation: "Professor",
    experience: "14 Years",
    qualification: "B.Sc., MBA, Ph.D., UGC-NET",
    image: "/images/mba-faculty/dr-nu-bankar.png",
    color: "#092f55",
  },
  {
    name: "Dr. M. A. Tamboli",
    designation: "Director, IBMA",
    experience: "14 Years",
    qualification: "BBA, MBA, DLL&LW, Ph.D.",
    image: "/images/mba-faculty/mat.png",
    color: "#0b8f50",
  },
  {
    name: "Dr. R.B.Valave",
    designation: "HOD, MBA",
    experience: "10 Year 5 Months",
    qualification: "B.Sc., MBA, Ph.D.(Pursuing)",
    image: "/images/mba-faculty/rbvalave.png",
    color: "#347fd3",
  },
  {
    name: "Dr. S. R. Vikhe Patil",
    designation: "Assistant Professor",
    experience: "08 Years",
    qualification: "B.A., MBA, Ph.D.",
    image: "/images/mba-faculty/srvikhe.png",
    color: "#2bb5a9",
  },
  {
    name: "Dr. S. V. Bidgar",
    designation: "Assistant Professor",
    experience: "10 Years 9 Months",
    qualification: "BE, MBA, Ph.D.",
    image: "/images/mba-faculty/svbidgar.png",
    color: "#21b8d0",
  },
  {
    name: "Mr. P. D. Borhade",
    designation: "Assistant Professor",
    experience: "09 Years 9 Months",
    qualification:
      "B.Sc(Computer Science), MBA(Financial Management), Ph.D.(Pursuing)",
    image: "/images/mba-faculty/pdborhade.png",
    color: "#d747a3",
  },
  {
    name: "Mr. S. G. Dighe",
    designation: "Assistant Professor",
    experience: "17 Years",
    qualification: "B. Sc., M. Sc., MBA (MKTG MGMT & HRM)",
    image: "/images/mba-faculty/sgdighe.png",
    color: "#f0ba28",
  },
  {
    name: "Mr. Y. L. Aher",
    designation: "Assistant Professor",
    experience: "14 Years 11 Months",
    qualification: "BHMCT, MBA (HRM)",
    image: "/images/mba-faculty/yla.png",
    color: "#814080",
  },
  {
    name: "Ms. S. S. Bhandhari",
    designation: "Assistant Professor",
    experience: "10 Years 6 Months",
    qualification: "B.Com., MBA, Ph.D.(Pursuing)",
    image: "/images/mba-faculty/ssbhandhari.png",
    color: "#092f55",
  },
  {
    name: "Ms. B. S. Kale",
    designation: "Assistant Professor",
    experience: "08 Years",
    qualification: "B.Com., MBA",
    image: "/images/mba-faculty/bskale.png",
    color: "#0b8f50",
  },
  {
    name: "Ms. Pooja Parjane",
    designation: "Assistant Professor",
    experience: "05 Year",
    qualification: "BBA(CA), MBA",
    image: "/images/mba-faculty/pooja.png",
    color: "#347fd3",
  },
  {
    name: "Dr. N.P.Awari",
    designation: "Assistant Professor",
    experience: "13 Year",
    qualification: "B.Pharm., MBA, Ph.D.",
    image: "/images/mba-faculty/npawari.png",
    color: "#2bb5a9",
  },
  {
    name: "Mr.R.V. Dharmadhikari",
    designation: "Assistant Professor",
    experience: "15 Years",
    qualification:
      "B.E.(E&TC), M.E.(VLSI & Embedded System), M.B.A.(Marketing)",
    image: "/images/mba-faculty/rvdharmadhikari.png",
    color: "#21b8d0",
  },
];

function MBAFaculty() {
  return (
    <main className="bg-white min-h-screen">

      {/* Page Heading */}
      <section className="relative h-[25px] bg-[#14558b] flex items-center justify-center overflow-hidden">
        <div
          className="absolute right-0 top-0 h-full w-[180px]"
          style={{
            background:
              "linear-gradient(135deg, transparent 25%, rgba(255,255,255,.35) 25%, rgba(255,255,255,.35) 27%, transparent 27%, transparent 50%, rgba(255,255,255,.25) 50%, rgba(255,255,255,.25) 52%, transparent 52%)",
            backgroundSize: "45px 45px",
          }}
        />

        <h1 className="relative z-10 text-white text-[16px] font-bold">
          MBA Faculty
        </h1>
      </section>

      {/* Main Faculty Area */}
      <section className="max-w-[450px] mx-auto py-[14px]">

        <div className="flex gap-[10px]">

          {/* Quick Link */}
          <aside className="w-[95px] flex-shrink-0">
            <div className="bg-[#f1f1f1] px-[8px] py-[10px]">
              <h3 className="text-[#07559a] text-[9px] font-semibold mb-[10px]">
                Quick Link
              </h3>

              <a
                href="/department/mba/faculty"
                className="block text-[#1684d4] text-[6px] mb-[9px]"
              >
                MBA Faculty Profile
              </a>

              <a
                href="/department/mca/faculty"
                className="block text-[#1684d4] text-[6px]"
              >
                MCA Faculty Profile
              </a>
            </div>
          </aside>

          {/* Faculty List */}
          <div className="w-[310px]">

            {faculty.map((person) => (
              <div
                key={person.name}
                className="h-[78px] mb-[10px] flex items-center overflow-hidden"
                style={{
                  backgroundColor: person.color,
                }}
              >

                {/* Faculty Image */}
                <div className="w-[78px] h-[78px] flex-shrink-0 rounded-full overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Faculty Details */}
                <div className="text-white pl-[14px] pr-[8px]">

                  <h2 className="text-[8px] font-bold mb-[3px]">
                    {person.name}
                  </h2>

                  <p className="text-[5.5px] leading-[9px]">
                    <b>Designation:</b> {person.designation}
                  </p>

                  <p className="text-[5.5px] leading-[9px]">
                    <b>Experience:</b> {person.experience}
                  </p>

                  <p className="text-[5.5px] leading-[9px]">
                    <b>Department:</b> MBA
                  </p>

                  <p className="text-[5.5px] leading-[9px]">
                    <b>Qualification:</b> {person.qualification}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>
    </main>
  );
}

export default MBAFaculty;