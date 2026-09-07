function FeesStructure() {
  return (
    <main className="bg-white min-h-screen">

      {/* Page Title */}
      <section
        className="relative h-[52px] bg-[#14558b] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute right-0 top-0 h-full w-[180px] opacity-60"
          style={{
            background:
              "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.35) 25%, rgba(255,255,255,0.35) 27%, transparent 27%, transparent 50%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.25) 52%, transparent 52%)",
            backgroundSize: "45px 45px",
          }}
        />

        <h1 className="relative z-10 text-white text-[22px] font-bold">
          Fees Structure
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-[570px] mx-auto px-2 pt-6 pb-5">

        {/* Authority */}
        <h5 className="text-center text-[10px] font-bold text-[#062d50] mb-5">
          As per the Fees Regulating Authority, Maharashtra State
        </h5>

        {/* Heading */}
        <h5 className="text-[14px] font-bold text-[#062d50] mb-5">
          Fees structure for 2026-27
        </h5>

        {/* Table */}
        <div className="w-full overflow-hidden">
          <table className="w-full border-collapse text-[9px]">

            <thead>
              <tr className="bg-[#079447] text-white">
                <th className="border-r border-white px-3 py-[6px] text-left">
                  Sr. No.
                </th>

                <th className="border-r border-white px-3 py-[6px] text-left">
                  Academic Year
                </th>

                <th className="border-r border-white px-3 py-[6px] text-left">
                  Courses
                </th>

                <th className="px-3 py-[6px] text-left">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-[#f2f2f2]">
                <td className="border-r border-white px-3 py-[7px] text-[#333]">
                  1
                </td>

                <td className="border-r border-white px-3 py-[7px] text-[#333]">
                  2026-27
                </td>

                <td className="border-r border-white px-3 py-[7px] text-[#333]">
                  MBA
                </td>

                <td className="px-3 py-[7px] text-[#333]">
                  Rs. 1,30,500/-*
                </td>
              </tr>

              <tr className="bg-[#e7e7e7]">
                <td className="border-r border-white px-3 py-[7px] text-[#333]">
                  2
                </td>

                <td className="border-r border-white px-3 py-[7px] text-[#333]">
                  2026-27
                </td>

                <td className="border-r border-white px-3 py-[7px] text-[#333]">
                  MCA
                </td>

                <td className="px-3 py-[7px] text-[#333]">
                  Rs. 95,500/-*
                </td>
              </tr>
            </tbody>

          </table>
        </div>

        {/* Note */}
        <p className="mt-3 text-[9px] leading-[18px] text-[#333]">
          Note - * The fee paid at the time of admission is adhoc / interim
          and may change as per the directives of Fees Regulating Authority
          and student will have to pay revised fee within three weeks after
          the notification.
        </p>

        {/* FRA */}
        <h5 className="mt-8 mb-1 text-[13px] font-bold text-[#062d50]">
          Fees Regulating Authority - 2026-27
        </h5>

        <a
          href="https://mahafra.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] text-[#1684d4] hover:underline"
        >
          FRA GOVERNMENT OF MAHARASHTRA
        </a>

      </section>
    </main>
  );
}

export default FeesStructure;