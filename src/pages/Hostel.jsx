function Hostel() {
  return (
    <main className="bg-white min-h-screen">

      {/* Page Title */}
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
          Hostel Accommodation
        </h1>
      </section>

      {/* ORIGINAL-SIZE CONTENT AREA */}
      <section className="w-[570px] max-w-[92%] mx-auto pt-6 pb-8">

        {/* Heading */}
        <h2 className="text-[13px] font-bold text-[#062d50] mb-4">
          HOSTEL ACCOMMODATION
        </h2>

        {/* Paragraphs */}
        <p className="text-[9px] leading-[17px] text-[#333] mb-3">
          Hostel accommodation will be provided on a first-come-first serve
          basis, preference will be given to first year students, and girls
          students. Hostel allocation will be confirmed only after deposition
          of hostel fees.
        </p>

        <p className="text-[9px] leading-[17px] text-[#333] mb-3">
          Many private hostels have also come up or are in the process of
          coming up in the close vicinity of the campus.
        </p>

        <p className="text-[9px] leading-[17px] text-[#333] mb-7">
          For any cancellation of admission within one month from start of
          first semester, one month hostel fees will be deducted. No refund
          shall be given in case of hostel cancellation after one month of
          start of classes. It will take one month for refund of hostel fees
          from date of cancellation.
        </p>

        {/* BOYS */}
        <h3 className="text-[12px] font-bold text-[#062d50] mb-4">
          Hostel fees for Boys Hostel is as follows.
        </h3>

        <table className="w-full border-collapse text-[8px] mb-8">
          <thead>
            <tr className="bg-[#079447] text-white">
              <th className="px-3 py-[6px] text-left font-bold">
                Hostel &amp; Mess fee for Academic Year 2026-27
              </th>
              <th className="px-3 py-[6px] text-left font-bold w-[150px]">
                Amount (Rs.)
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-[#f1f1f1]">
              <td className="px-3 py-[6px]">A. Hostel Fees</td>
              <td></td>
            </tr>

            <tr className="bg-[#e7e7e7]">
              <td className="px-3 py-[6px]">Three Seaters</td>
              <td className="px-3 py-[6px]">90,000/-*</td>
            </tr>

            <tr className="bg-[#f1f1f1]">
              <td className="px-3 py-[6px]">B. Deposit</td>
              <td className="px-3 py-[6px]">25,000/-*</td>
            </tr>

            <tr className="bg-[#e7e7e7]">
              <td className="px-3 py-[6px]">
                Total fee with Three Seaters
              </td>
              <td className="px-3 py-[6px]">
                1,15,000/-*
              </td>
            </tr>
          </tbody>
        </table>

        {/* GIRLS */}
        <h3 className="text-[12px] font-bold text-[#062d50] mb-4">
          Hostel fees for IBMA Girls Hostel is as follows.
        </h3>

        <table className="w-full border-collapse text-[8px] mb-7">
          <thead>
            <tr className="bg-[#079447] text-white">
              <th className="px-3 py-[6px] text-left font-bold">
                Hostel &amp; Mess fee for Academic Year 2026-27
              </th>
              <th className="px-3 py-[6px] text-left font-bold w-[150px]">
                Amount (Rs.)
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="bg-[#f1f1f1]">
              <td className="px-3 py-[6px]">A. Hostel Fees</td>
              <td></td>
            </tr>

            <tr className="bg-[#e7e7e7]">
              <td className="px-3 py-[6px]">Three Seaters</td>
              <td className="px-3 py-[6px]">25,000/-*</td>
            </tr>

            <tr className="bg-[#f1f1f1]">
              <td className="px-3 py-[6px]">Four Seaters</td>
              <td className="px-3 py-[6px]">23,000/-*</td>
            </tr>

            <tr className="bg-[#e7e7e7]">
              <td className="px-3 py-[6px]">Six Seaters</td>
              <td className="px-3 py-[6px]">21,000/-*</td>
            </tr>

            <tr className="bg-[#f1f1f1]">
              <td className="px-3 py-[6px]">Eight Seaters</td>
              <td className="px-3 py-[6px]">19,000/-*</td>
            </tr>

            <tr className="bg-[#e7e7e7]">
              <td className="px-3 py-[6px]">B. Mess fees</td>
              <td className="px-3 py-[6px]">31,000/-*</td>
            </tr>

            <tr className="bg-[#f1f1f1]">
              <td className="px-3 py-[6px]">
                Total fee with Three Seaters
              </td>
              <td className="px-3 py-[6px]">56,000/-*</td>
            </tr>

            <tr className="bg-[#e7e7e7]">
              <td className="px-3 py-[6px]">
                Total fee with Four Seaters
              </td>
              <td className="px-3 py-[6px]">54,000/-*</td>
            </tr>

            <tr className="bg-[#f1f1f1]">
              <td className="px-3 py-[6px]">
                Total fee with Six Seaters
              </td>
              <td className="px-3 py-[6px]">52,000/-*</td>
            </tr>

            <tr className="bg-[#e7e7e7]">
              <td className="px-3 py-[6px]">
                Total fee with Eight Seaters
              </td>
              <td className="px-3 py-[6px]">50,000/-*</td>
            </tr>
          </tbody>
        </table>

        {/* NOTE */}
        <p className="text-[8px] leading-[17px] text-[#333]">
          Note: * - The fee paid at the time of admission is adhoc /interim
          and may change as per the directives of Fees Regulating Authority
          and student will have to pay revised fee within three weeks after
          the notification.
        </p>

      </section>
    </main>
  );
}

export default Hostel;