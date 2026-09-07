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
              href="/pdfs/examination-grievance.pdf"
              target="_blank"
              className="block text-blue-500 py-4 border-b"
            >
              Examination Grievance Form
            </a>

            <a
              href="/pdfs/code-of-conduct.pdf"
              target="_blank"
              className="block text-blue-500 py-4"
            >
              Code of Conduct for Examination
            </a>

          </div>

          

        </div>

      </div>
      

    </main>
  );
};

export default Examination;