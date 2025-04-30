import { Input } from '@/components/ui/input'
import { useCountStore } from '@/lib/store'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

const SearchMenu = ({set}:any) => {

  const {filter} = useCountStore((state)=>state)
  const [value, setValue] = useState("")

  const handleClose=()=>{
    set(true)
  }
  
  useEffect(() => {
    filter(value || "");
  }, [value]);
  

  return (
    <div className="md:block relative" onClick={handleClose}>
    <Input
      type="text"
      placeholder="Search.."
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      className="bg-[#1E2A47] text-[#8CA0B3] placeholder-[#8CA0B3] rounded-full pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A7AD0] w-36 sm:w-48"
    />
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8CA0B3] text-xs" />
  </div>
  )
}

export default SearchMenu