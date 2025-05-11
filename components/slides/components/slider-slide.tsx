"use client"

import type React from "react"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function SliderSlide() {
  const [value, setValue] = useState<number[]>([50])
  const [min, setMin] = useState<number>(0)
  const [max, setMax] = useState<number>(100)
  const [step, setStep] = useState<number>(1)

  return (
    <SlideLayout title="Slider">
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
                Slider는 사용자가 지정된 범위 내에서 값을 선택할 수 있는 UI 요소입니다. 드래그 가능한 핸들을 이용해 값을
                조절합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>볼륨 조절</li>
                <li>밝기, 대비 등 시각적 설정</li>
                <li>가격 범위 필터</li>
                <li>줌 레벨 조절</li>
                <li>진행 상태 표시 및 조절</li>
                <li>수치 입력 (나이, 무게 등)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <PrismCode
                language="dart"
                code={`// 기본 슬라이더
Slider(
  value: 50,
  max: 100,
  divisions: 100,
  onChanged: (double value) {
    // 값 변경 처리
  },
),

// 범위 슬라이더 (두 개의 핸들)
RangeSlider(
  values: RangeValues(25, 75),
  max: 100,
  divisions: 100,
  onChanged: (RangeValues values) {
    // 값 변경 처리
  },
),

// 이벤트 핸들러가 있는 슬라이더
Slider(
  value: value,
  max: 100,
  divisions: 100,
  onChanged: (double newValue) {
    setState(() {
      value = newValue;
    });
  },
),

// 비활성화된 슬라이더
Slider(
  value: 50,
  max: 100,
  divisions: 100,
  onChanged: null, // null이면 비활성화됨
),`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-6 mb-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="min-value" className="mb-2 block">
                      최소값
                    </Label>
                    <Input
                      id="min-value"
                      type="number"
                      value={min}
                      onChange={(e) => setMin(Number(e.target.value))}
                      min={0}
                      max={max - 1}
                    />
                  </div>

                  <div>
                    <Label htmlFor="max-value" className="mb-2 block">
                      최대값
                    </Label>
                    <Input
                      id="max-value"
                      type="number"
                      value={max}
                      onChange={(e) => setMax(Number(e.target.value))}
                      min={min + 1}
                    />
                  </div>

                  <div>
                    <Label htmlFor="step-value" className="mb-2 block">
                      단계
                    </Label>
                    <Input
                      id="step-value"
                      type="number"
                      value={step}
                      onChange={(e) => setStep(Number(e.target.value))}
                      min={0.1}
                      step={0.1}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="mb-2 block">현재 값: {value[0]}</Label>
                  <Slider value={value} onValueChange={setValue} min={min} max={max} step={step} className="my-4" />
                </div>

                <div className="h-20 bg-[#268052] rounded-md opacity-30" style={{ opacity: value[0] / 100 }}>
                  <div className="h-full flex items-center justify-center text-white font-bold">
                    불투명도: {value[0]}%
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}

// Input 컴포넌트 타입 오류 방지를 위한 임시 컴포넌트
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className="w-full p-2 border rounded-md" {...props} />
}
