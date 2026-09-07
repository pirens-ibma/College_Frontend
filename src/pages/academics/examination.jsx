const Examination = () => {
  return (
    <main className="min-h-screen bg-white">

      {/* Page Title */}
      <div className="bg-[#14558a] py-5 text-center">
        <h1 className="text-4xl font-bold text-white">
          Examination Department
        </h1>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Quick Links */}
          <div className="bg-gray-100 p-8 h-fit">

            <h2 className="text-3xl text-[#0b2d4d] mb-8">
              Quick Link
            </h2>

            <a
              href="/pdfs/examination-committee.pdf"
              target="_blank"
              className="block text-blue-500 py-4 border-b"
            >
              Examination Committee
            </a>

            <a
              href="/pdfs/examination-grievance-form.pdf"
              target="_blank"
              className="block text-blue-500 py-4 border-b"
            >
              Examination Grievance Form
            </a>

            <a
              href="/pdfs/examination-code-conduct.pdf"
              target="_blank"
              className="block text-blue-500 py-4"
            >
              Code of Conduct for Examination
            </a>

          </div>

          {/* Examination Details */}
          <div className="md:col-span-2">

            {/* MCA */}
            <h2 className="text-3xl font-bold text-[#0b2d4d]">
              MCA Exam Time Table
            </h2>

            <div className="w-52 border-b-2 border-[#0b2d4d] mt-3 mb-10"></div>

            <a 
              href="https://exam.unipune.ac.in/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-500"
>
              MCA Time Table for Examination
            </a>


            {/* MBA */}
            <h2 className="text-3xl font-bold text-[#0b2d4d] mt-16">
              MBA Exam Time Table
            </h2>

            <div className="w-52 border-b-2 border-[#0b2d4d] mt-3 mb-10"></div>

            <a
              href="https://exam.unipune.ac.in/index.html"
              target="_blank"
              className="text-2xl text-blue-500"
            >
              MBA Time Table for Examination
            </a>


            {/* Performance Improvement */}
            <h2 className="text-3xl font-bold text-[#0b2d4d] mt-16">
              Performance Improvement Online Exam Form
            </h2>

            <div className="w-52 border-b-2 border-[#0b2d4d] mt-3 mb-10"></div>

            <a
              href="/pdfs/performance-improvement.pdf"
              target="_blank"
              className="text-2xl text-blue-500"
            >
              Performance Improvement Online Exam Form
            </a>

            {/* Photocopy & Revolution*/}
            <h2 className="text-3xl font-bold text-[#0b2d4d] mt-16">
              Photocopy and Revaluation
            </h2>

            <div className="w-52 border-b-2 border-[#0b2d4d] mt-3 mb-10"></div>

            <a
              href="/pdfs/performance-improvement.pdf"
              target="_blank"
              className="text-2xl text-blue-500"
            >
              Photocopy and Revaluation
            </a>



          </div>

        </div>

      </div>
      

    </main>
  );
};

export default Examination;