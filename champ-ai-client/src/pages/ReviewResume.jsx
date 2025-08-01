import { FileText, Sparkle } from "lucide-react";
import { useState } from "react";

const ReviewResume = () => {
  const [inputValue, setInputValue] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div
      className="h-full overflow-y-scroll p-6 flex items-start
     flex-wrap gap-4 text-slate-700"
    >
      {/* left-col */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg
         border border-gray-200"
      >
        <div>
          <Sparkle className="w-6 h-6 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Resume Reviewer</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Upload Image</p>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setInputValue(e.target.files[0])}
          className="w-full p-2 px-3 border border-gray-300 rounded-md mt-2 outline-none text-gray-600"
          required
        />
        <p className="text-xs text-gray-500 font-light mt-1">Supports PDF type only.</p>
        <button
          className="w-full flex justify-center items-center
            gap-2 bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <FileText className="w-5" />
          Review Resume
        </button>
      </form>
      {/* Right-col */}
      <div
        className="w-fll max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200
        min-h-96 max-h-[600px]"
      >
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Analysis Results</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <FileText />
            <p>Upload an image and click "Resume Review" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewResume