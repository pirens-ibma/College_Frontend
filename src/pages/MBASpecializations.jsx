function MBASpecializations() {
  const specializations = [
    {
      name: "Marketing Management",
      image: "/images/mba-specializations/marketing.jpg",
    },
    {
      name: "Financial Management",
      image: "/images/mba-specializations/finance.jpg",
    },
    {
      name: "Human Resources Management",
      image: "/images/mba-specializations/human.jpg",
    },
    {
      name: "Operations & Supply Chain Management",
      image: "/images/mba-specializations/operations.jpg",
    },
    {
      name: "Business Analytics",
      image: "/images/mba-specializations/business-analytics.jpg",
    },
    {
      name: "Agri Business Management",
      image: "/images/mba-specializations/agri-business.jpg",
    },
    {
      name: "Pharma & Healthcare Management",
      image: "/images/mba-specializations/pharma-healthcare.jpg",
    },
  ];

  return (
    <main className="bg-white min-h-screen">

      {/* Blue Page Heading */}
      <section className="relative h-[52px] bg-[#14558b] flex items-center justify-center overflow-hidden">
        <div
          className="absolute right-0 top-0 h-full w-[180px] opacity-60"
          style={{
            background:
              "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.35) 25%, rgba(255,255,255,0.35) 27%, transparent 27%, transparent 50%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.25) 52%, transparent 52%)",
            backgroundSize: "45px 45px",
          }}
        />

        <h1 className="relative z-10 text-white text-[22px] font-bold">
          MBA Specializations
        </h1>
      </section>

      {/* Specialization Images */}
      <section className="max-w-[1100px] mx-auto px-5 py-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {specializations.map((item) => (
            <div
              key={item.name}
              className="w-full overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto block"
              />
            </div>
          ))}

        </div>

        {/* Exact Note Section */}
        <div className="mt-8 mb-8">

          <h4 className="text-[14px] font-bold text-[#062d50] mb-3">
            Note:
          </h4>

          <ol className="list-decimal ml-5 text-[11px] leading-6 text-[#333]">

            <li>
              Institutes may offer ONLY SELECT specializations based on
              industry needs, faculty strength &amp; competencies, student
              demands, employability potential, etc.
            </li>

            <li>
              Institutes MAY NOT offer a specialization if a minimum of 20%
              of students are not registered for that specialization.
            </li>

            <li>
              The Institute MAY NOT offer an elective course if a minimum of
              20% of students are not registered for that elective course.
            </li>

          </ol>

        </div>

      </section>

    </main>
  );
}

export default MBASpecializations;