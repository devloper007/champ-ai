import { Edit, Sparkle } from 'lucide-react'
import { useState } from 'react'

const articleLength = [
  { value: 'short', label: 'Short (300-800 words)' },
  { value: 'medium', label: 'Medium (800-1200 words)' },
  { value: 'long', label: 'Long (1200+ words)' } 
]
const WriteArticle = () => {
  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [inputValue, setInputValue] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start
     flex-wrap gap-4 text-slate-700'>
        {/* left-col */}
        <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg
         border border-gray-200'>
            <div>
                <Sparkle className='w-6 h-6 text-[#4A7AFF]'/>
                <h1 className='text-xl font-semibold'>Article Configuration</h1>
            </div>
            <p className='mt-6 text-sm font-medium'>Article Topic</p>
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='w-full p-2 px-3 border border-gray-300 rounded-md mt-2 outline-none'
                placeholder='e.g. The Future of AI in Healthcare...' 
                required
            />
            <p className='mt-6 text-sm font-medium'>Article Length</p>
            <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
              {articleLength.map((item, index) => (
                <span
                 onClick={() => setSelectedLength(item)}
                 className={`text-xs px-4 py-1 border rounded-full cursor-pointer 
                 ${selectedLength.value === item.value ? 'bg-blue-50 text-blue-700' : 'text-gray-500 border-gray-300'}`} 
                 key={index}>
                  {item.label}
                  </span>
              ))}
            </div>
            <br/>
            <button className='w-full flex justify-center items-center
            gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
                <Edit className='w-5'/>
                Generate Article
            </button>
        </form>
        {/* Right-col */}
        <div className='w-fll max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200
        min-h-96 max-h-[600px]'>
            <div className='flex items-center gap-3'>
              <Edit className='w-5 h-5 text-[#4A7AFF]'/>
              <h1 className='text-xl font-semibold'>Generate Article</h1>
            </div>

            <div className='flex-1 flex justify-center items-center'>
              <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
                <Edit />
                <p>Enter a topic and click "Generate Article" to get started</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WriteArticle