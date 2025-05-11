"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function TableSlide() {
  const [data, setData] = useState([
    { id: 1, name: "홍길동", email: "hong@example.com", role: "관리자" },
    { id: 2, name: "김철수", email: "kim@example.com", role: "사용자" },
    { id: 3, name: "이영희", email: "lee@example.com", role: "편집자" },
  ])

  const [newRow, setNewRow] = useState({ name: "", email: "", role: "" })

  const addRow = () => {
    if (newRow.name && newRow.email && newRow.role) {
      setData([...data, { id: data.length + 1, ...newRow }])
      setNewRow({ name: "", email: "", role: "" })
    }
  }

  return (
    <SlideLayout title="Table">
      <style jsx global>{`
          div {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
      `}</style>
      <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">정의</h3>
              <p>
                Table은 행과 열로 구성된 데이터를 표시하는 UI 요소입니다. 구조화된 정보를 효과적으로 보여주는 데
                사용됩니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>데이터 목록 표시</li>
                <li>사용자 관리 인터페이스</li>
                <li>재고 관리</li>
                <li>금융 데이터 표시</li>
                <li>일정 및 시간표</li>
                <li>비교 차트</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="dart"
                code={`// 기본 테이블
DataTable(
  columns: [
    DataColumn(label: Text('이름')),
    DataColumn(label: Text('이메일')),
    DataColumn(label: Text('역할')),
  ],
  rows: [
    DataRow(cells: [
      DataCell(Text('홍길동')),
      DataCell(Text('hong@example.com')),
      DataCell(Text('관리자')),
    ]),
    DataRow(cells: [
      DataCell(Text('김철수')),
      DataCell(Text('kim@example.com')),
      DataCell(Text('사용자')),
    ]),
  ],
),

// 동적 데이터가 있는 테이블
DataTable(
  columns: [
    DataColumn(label: Text('ID')),
    DataColumn(label: Text('이름')),
    DataColumn(label: Text('이메일')),
  ],
  rows: data.map((row) => DataRow(
    cells: [
      DataCell(Text(row.id.toString())),
      DataCell(Text(row.name)),
      DataCell(Text(row.email)),
    ],
  )).toList(),
)`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-6 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">
                      이름
                    </Label>
                    <Input
                      id="name"
                      value={newRow.name}
                      onChange={(e) => setNewRow({ ...newRow, name: e.target.value })}
                      placeholder="이름 입력"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      이메일
                    </Label>
                    <Input
                      id="email"
                      value={newRow.email}
                      onChange={(e) => setNewRow({ ...newRow, email: e.target.value })}
                      placeholder="이메일 입력"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role" className="mb-2 block">
                      역할
                    </Label>
                    <Input
                      id="role"
                      value={newRow.role}
                      onChange={(e) => setNewRow({ ...newRow, role: e.target.value })}
                      placeholder="역할 입력"
                    />
                  </div>
                </div>
                <Button onClick={addRow} disabled={!newRow.name || !newRow.email || !newRow.role}>
                  행 추가
                </Button>
              </div>

              <div className="border rounded-md overflow-hidden">
                <Table>
                  <TableCaption>사용자 목록</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>이름</TableHead>
                      <TableHead>이메일</TableHead>
                      <TableHead>역할</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
