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
import useSWR from 'swr'

const Participants = () => {
  const { data } = useSWR('/exams/students')

  console.log(data)

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
      <TableHead>Candidate Number</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      data?.data?.map((participant, index) => (
        <TableRow key={participant?.id}>
          <TableCell className="font-medium">{index + 1}</TableCell>
          <TableCell>{participant?.username}</TableCell>
          <TableCell>{participant?.school}</TableCell>
          <TableCell>{participant?.age}</TableCell>
          <TableCell>{new Date().getFullYear() + '-' + participant?.id?.slice(-5)}</TableCell>
        </TableRow>
      ))
    }
  </TableBody>
</Table>
      </div>
    </div>
  )
}

export default Participants
