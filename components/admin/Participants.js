import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Participants = () => {
  return (
    <div className='gap-5'>
      <span className="text-2xl font-semibold">Participants</span>
      <div>
      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">S/N</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>School</TableHead>
      <TableHead>Age</TableHead>
      <TableHead className="text-right">Score</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell>Henry Nnamani</TableCell>
      <TableCell>Greenwich International</TableCell>
      <TableCell>18</TableCell>
      <TableCell className="text-right">30</TableCell>
    </TableRow>
  </TableBody>
</Table>
      </div>
    </div>
  )
}

export default Participants
