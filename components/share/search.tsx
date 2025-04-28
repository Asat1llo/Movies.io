import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const SearchMenu = () => {
  return (
    <div className="md:block relative">
    <Input
      type="text"
      placeholder="Search.."
      className="bg-[#1E2A47] text-[#8CA0B3] placeholder-[#8CA0B3] rounded-full pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#5A7AD0] w-36 sm:w-48"
    />
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8CA0B3] text-xs" />
  </div>
  )
}

export default SearchMenu