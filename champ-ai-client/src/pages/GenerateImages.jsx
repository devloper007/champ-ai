import { Image, Sparkle } from 'lucide-react';
import { useState } from 'react'

const imageStyle = ['Realistic', 'Cartoon', 'Anime', 'Fantasy', 'Nature', 'Abstract'];
const GenerateImages = () => {
  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [inputValue, setInputValue] = useState("");
  const [publish, setPublish] = useState(false);

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
          <Sparkle className="w-6 h-6 text-[#00AD25]" />
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>
        <p className="mt-6 text-sm font-medium">Describe Your Image</p>
        <textarea
          value={inputValue}
          rows={4}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 px-3 border border-gray-300 rounded-md mt-2 outline-none"
          placeholder="e.g. Describe what you want ot see in the image..."
          required
        />
        <p className="mt-6 text-sm font-medium">Style</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {imageStyle.map((item, index) => (
            <span
              onClick={() => setSelectedStyle(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer 
                 ${
                   selectedStyle === item
                     ? "bg-green-50 text-green-700"
                     : "text-gray-500 border-gray-300"
                 }`}
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
        
        <div className='my-6 flex items-center gap-2'>
          <label className='relative cursor-pointer'>
            <input type="checkbox" onChange={(e) => setPublish(e.target.checked)}
            checked={publish} className='sr-only peer'/>
            <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>
            <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full
            transition peer-checked:translate-x-4'></span>
          </label>
          <p className='text-sm'>Make this image Public</p>
        </div>
        <button
          className="w-full flex justify-center items-center
            gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <Image className="w-5" />
          Generate Image
        </button>
      </form>
      {/* Right-col */}
      <div
        className="w-fll max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200
        min-h-96 max-h-[600px]"
      >
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-[#00AD25]" />
          <h1 className="text-xl font-semibold">Generated image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Image />
            <p>Enter a topic and click "Generate image" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateImages