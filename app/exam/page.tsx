'use client'
import {
  createExamService,
  deleteExamService,
  editExamService,
  getExamAllService,
  getExamOneService,
} from '@/service/exam/exam.service'
import { useEffect, useState } from 'react'

export default function ExamPage() {
  const [examAllData, setExamAllData] = useState([])
  const [examOneData, setExamOneData] = useState([])
  const [createExam, setCreateExam] = useState({})
  const [editExam, setEditExam] = useState({})
  const [deleteExam, setDeleteExam] = useState({})

  //ExamAll
  useEffect(() => {
    async function fetchExamAllData() {
      try {
        const { data } = await getExamAllService()

        setExamAllData(data.examAll)
      } catch (error) {
        console.error('Error fetching exam data:', error)
      }
    }

    fetchExamAllData()
  }, [])

  //ExamOne
  useEffect(() => {
    async function fetchExamOneData() {
      try {
        const { data } = await getExamOneService(2)
        setExamOneData(data.examOne)
      } catch (error) {
        console.error('Error fetching exam data:', error)
      }
    }

    fetchExamOneData()
  }, [])

  //CreateExam
  async function handleCreateExam() {
    try {
      const createExam = await createExamService({
        firstname: 'Tigger',
        lastname: 'morlum',
        age: 2,
      })

      setCreateExam(createExam)
      console.log('createExam complete!!!', createExam)
    } catch (error) {
      console.error('Error creating exam:', error)
    }
  }

  //EditExam
  async function handleEditExam() {
    try {
      const editExam = await editExamService(1, {
        firstname: 'Tigger',
        lastname: 'morlum',
        age: 2,
      })

      setEditExam(editExam)
      console.log('editExam complete!!!', editExam)
    } catch (error) {
      console.error('Error edit exam:', error)
    }
  }

  //DeleteExam
  async function handleDeleteExam() {
    try {
      const deleteExam = await deleteExamService(3)

      setDeleteExam(deleteExam)
      console.log('deleteExam complete!!!', editExam)
    } catch (error) {
      console.error('Error edit exam:', error)
    }
  }


  return (
    <div className="flex flex-col h-full w-full items-center justify-center gap-6">
      <div className='underline underline-offset-4 text-xl'>
        <h1>Example for GraphQL</h1>
      </div>
    <div className="flex h-full w-full items-start justify-center gap-6">
      <div className="rounded-lg bg-slate-200 p-4 text-black">
        <pre>
          Ihis is ExamAll: <code>{JSON.stringify(examAllData, null, 2)}</code>
        </pre>
      </div>

      <div className="rounded-lg bg-slate-200 p-4 text-black">
        <pre>
          <p className="text-red-700">Ihis is ExamOne:</p>{' '}
          <code>{JSON.stringify(examOneData, null, 2)}</code>
        </pre>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-slate-200 p-4 text-black">
        <button
          onClick={handleCreateExam}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Create Exam
        </button>
        <pre>
          <p className="text-red-700">Ihis is createExam:</p>
          <code>{JSON.stringify(createExam, null, 2)}</code>
        </pre>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-slate-200 p-4 text-black">
        <button
          onClick={handleEditExam}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Edit Exam
        </button>
        <pre>
          <p className="text-red-700">Ihis is createExam:</p>
          <code>{JSON.stringify(editExam, null, 2)}</code>
        </pre>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-slate-200 p-4 text-black">
        <button
          onClick={handleDeleteExam}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Delete Exam
        </button>
        <pre>
          <p className="text-red-700">Ihis is deleteExam:</p>
          <code>{JSON.stringify(deleteExam, null, 2)}</code>
        </pre>
      </div>
    </div>
    </div>
  )
}
