"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function CheckBoxSlide() {
  const [options, setOptions] = useState([
    { id: "option1", label: "옵션 1", checked: false },
    { id: "option2", label: "옵션 2", checked: false },
    { id: "option3", label: "옵션 3", checked: false },
  ])

  const [newOption, setNewOption] = useState("")

  const toggleOption = (id: string) => {
    setOptions(options.map((option) => (option.id === id ? { ...option, checked: !option.checked } : option)))
  }

  const addOption = () => {
    if (newOption.trim() !== "") {
      const newId = `option${options.length + 1}`
      setOptions([...options, { id: newId, label: newOption.trim(), checked: false }])
      setNewOption("")
    }
  }

  return (
    <SlideLayout title="Check Box">
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
                Check Box는 사용자가 여러 옵션 중 여러 개를 선택할 수 있는 UI 요소입니다. 각 체크박스는 독립적으로
                선택하거나 해제할 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>다중 선택이 필요한 설문조사 질문</li>
                <li>필터 옵션 선택 (여러 카테고리 선택)</li>
                <li>이용약관 동의</li>
                <li>설정 옵션 활성화/비활성화</li>
                <li>할 일 목록(To-do list)의 완료 표시</li>
                <li>다중 항목 선택 (이메일, 파일 등)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <PrismCode
                language="dart"
                code={`// 기본 체크박스
Row(
  children: [
    Checkbox(
      value: false,
      onChanged: (value) {},
    ),
    SizedBox(width: 8),
    Text('이용약관에 동의합니다'),
  ],
),

// 기본값이 체크된 체크박스
Row(
  children: [
    Checkbox(
      value: true,
      onChanged: (value) {},
    ),
    SizedBox(width: 8),
    Text('마케팅 이메일 수신'),
  ],
),

// 비활성화된 체크박스
Row(
  children: [
    Checkbox(
      value: false,
      onChanged: null, // null로 설정하면 비활성화됨
    ),
    SizedBox(width: 8),
    Text(
      '비활성화됨',
      style: TextStyle(color: Colors.grey),
    ),
  ],
),

// 이벤트 핸들러가 있는 체크박스
Checkbox(
  value: isSubscribed,
  onChanged: (bool? value) {
    setState(() {
      isSubscribed = value!;
    });
  },
)`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="새 옵션 추가"
                    className="flex-1 p-2 border rounded-md"
                  />
                  <button onClick={addOption} className="px-4 py-2 bg-[#268052] text-white rounded-md">
                    추가
                  </button>
                </div>
              </div>

              <div className="p-4 border rounded-md">
                <div className="space-y-2">
                  {options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox id={option.id} checked={option.checked} onCheckedChange={() => toggleOption(option.id)} />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-sm">
                  <p>선택된 옵션:</p>
                  <ul className="list-disc pl-5 mt-2">
                    {options
                      .filter((option) => option.checked)
                      .map((option) => (
                        <li key={option.id}>{option.label}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
