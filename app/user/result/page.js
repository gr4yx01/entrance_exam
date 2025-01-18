import React from 'react';
import { Medal, Award, BookOpen, GraduationCap, ArrowRight, Download } from 'lucide-react';

function page() {
  // Sample data - in a real page this would come from your backend
  const studentResults = {
    name: "Sarah Johnson",
    candidateNumber: "2024-CE-0123",
    totalScore: 87.5,
    rank: 15,
    totalCandidates: 450,
    examDate: "March 15, 2024",
    subjects: [
      { name: "Mathematics", score: 92, grade: "A", status: "Excellent" },
      { name: "English", score: 88, grade: "A", status: "Very Good" },
      { name: "Science", score: 85, grade: "B+", status: "Good" },
      { name: "Social Studies", score: 85, grade: "B+", status: "Good" }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Common Entrance Examination Results</h1>
            </div>
            <button className="flex items-center space-x-2 bg-white  border text-black px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white transition-colors">
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Student Information Card */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Student Information</h2>
              <div className="space-y-3">
                <p className="text-gray-600">Name: <span className="font-medium text-gray-900">{studentResults.name}</span></p>
                <p className="text-gray-600">Candidate Number: <span className="font-medium text-gray-900">{studentResults.candidateNumber}</span></p>
                <p className="text-gray-600">Exam Date: <span className="font-medium text-gray-900">{studentResults.examDate}</span></p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center bg-green-100 rounded-lg p-6">
              <Medal className="h-12 w-12 text-blue-600 mb-3" />
              <p className="text-sm text-gray-600">Overall Rank</p>
              <p className="text-3xl font-bold text-blue-600">{studentResults.rank}<span className="text-lg font-normal text-gray-600">/{studentResults.totalCandidates}</span></p>
              <p className="text-sm text-gray-600 mt-2">Total Score: {studentResults.totalScore}%</p>
            </div>
          </div>
        </div>

        {/* Subject Results */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">Subject Results</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentResults.subjects.map((subject, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{subject.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{subject.score}%</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {subject.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{subject.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Next Steps Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-md p-6 mt-8 text-white">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Next Steps</h2>
          </div>
          <p className="mb-4">Congratulations on completing your Common Entrance Examination! Here's what you need to do next:</p>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <ArrowRight className="h-4 w-4" />
              <span>Download and save your detailed result slip</span>
            </li>
            <li className="flex items-center space-x-2">
              <ArrowRight className="h-4 w-4" />
              <span>Check school allocation status (available from April 1st)</span>
            </li>
            <li className="flex items-center space-x-2">
              <ArrowRight className="h-4 w-4" />
              <span>Complete school acceptance procedures</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default page;