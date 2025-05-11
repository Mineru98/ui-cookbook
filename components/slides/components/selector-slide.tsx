"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function SelectorSlide() {
  const [selectedValue, setSelectedValue] = useState<string>("")
  const [options, setOptions] = useState<string[]>(["옵션 1", "옵션 2", "옵션 3", "옵션 4"])
  const [newOption, setNewOption] = useState<string>("")

  const addOption = () => {
    if (newOption.trim() !== "") {
      setOptions([...options, newOption.trim()])
      setNewOption("")
    }
  }

  return (
    <SlideLayout title="Selector">
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
                Selector(또는 Select)는 여러 옵션 중 하나를 선택할 수 있는 드롭다운 형태의 UI 요소입니다. 드롭다운과
                유사하지만, 주로 데이터 선택에 특화되어 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>국가, 지역 선택</li>
                <li>카테고리 선택</li>
                <li>날짜, 시간 범위 선택</li>
                <li>정렬 옵션 선택</li>
                <li>언어 선택</li>
                <li>테마 선택</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode
                language="dart"
                code={`// 기본 셀렉터
DropdownButton<String>(
  value: selectedValue,
  hint: Text('옵션을 선택하세요'),
  onChanged: (String? newValue) {
    // 선택된 값 처리
  },
  items: [
    DropdownMenuItem<String>(
      value: 'option1',
      child: Text('옵션 1'),
    ),
    DropdownMenuItem<String>(
      value: 'option2',
      child: Text('옵션 2'),
    ),
    DropdownMenuItem<String>(
      value: 'option3',
      child: Text('옵션 3'),
    ),
  ],
),

// 그룹이 있는 셀렉터 (ExpansionTile 사용)
Column(
  children: [
    ExpansionTile(
      title: Text('과일'),
      children: [
        ListTile(
          title: Text('사과'),
          onTap: () {
            // 사과 선택 처리
          },
        ),
        ListTile(
          title: Text('바나나'),
          onTap: () {
            // 바나나 선택 처리
          },
        ),
        ListTile(
          title: Text('오렌지'),
          onTap: () {
            // 오렌지 선택 처리
          },
        ),
      ],
    ),
    ExpansionTile(
      title: Text('채소'),
      children: [
        ListTile(
          title: Text('당근'),
          onTap: () {
            // 당근 선택 처리
          },
        ),
        ListTile(
          title: Text('감자'),
          onTap: () {
            // 감자 선택 처리
          },
        ),
      ],
    ),
  ],
),

// 이벤트 핸들러가 있는 셀렉터
DropdownButton<String>(
  value: selectedValue,
  hint: Text('선택하세요'),
  onChanged: (String? newValue) {
    if (newValue != null) {
      setSelectedValue(newValue);
    }
  },
  items: ['옵션 1', '옵션 2', '옵션 3'].map((String value) {
    return DropdownMenuItem<String>(
      value: value,
      child: Text(value),
    );
  }).toList(),
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

              <div className="flex flex-col items-center">
                <div className="w-full max-w-xs">
                  <Label htmlFor="selector-demo" className="mb-2 block">
                    선택하세요
                  </Label>
                  <Select value={selectedValue} onValueChange={setSelectedValue}>
                    <SelectTrigger id="selector-demo">
                      <SelectValue placeholder="옵션을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      {options.map((option, index) => (
                        <SelectItem key={index} value={`option-${index}`}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedValue && (
                  <p className="mt-4 text-sm">선택된 값: {options[Number.parseInt(selectedValue.split("-")[1])]}</p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
