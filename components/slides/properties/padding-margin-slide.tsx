"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function PaddingMarginSlide() {
  const [padding, setPadding] = useState<number>(16)
  const [margin, setMargin] = useState<number>(16)
  const [activeProperty, setActiveProperty] = useState<"padding" | "margin">("padding")

  return (
    <SlideLayout title="Padding & Margin">
      <style jsx global>{`
          div {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          div::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
      `}</style>
      <div className="space-y-8 max-h-[calc(100vh-12rem)] overflow-y-auto">
        <Tabs defaultValue="description">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">설명</TabsTrigger>
            <TabsTrigger value="code">코드</TabsTrigger>
            <TabsTrigger value="demo">데모</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="space-y-4 mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">정의</h3>
              <p className="mb-4">Padding과 Margin은 UI 요소의 공간을 제어하는 CSS 속성입니다.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Padding</strong>: 요소의 내부 여백으로, 요소의 내용과 테두리 사이의 공간입니다.
                </li>
                <li>
                  <strong>Margin</strong>: 요소의 외부 여백으로, 요소의 테두리와 주변 요소 사이의 공간입니다.
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>요소 간 간격 조정</li>
                <li>텍스트와 컨테이너 사이의 공간 조정</li>
                <li>레이아웃 구성</li>
                <li>요소 정렬</li>
                <li>UI 요소의 가독성 향상</li>
                <li>반응형 디자인 구현</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="mt-6">
                <PrismCode
                  language="dart"
                  code={`// Flutter/Dart에서의 패딩
// Padding 위젯 사용하기
Padding(
  // 모든 방향에 동일한 패딩 적용
  padding: EdgeInsets.all(16.0),
  child: Text('모든 방향 패딩 16px'),
),

Padding(
  // 좌우 패딩 16px, 상하 패딩 8px
  padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
  child: Text('좌우 패딩 16px, 상하 패딩 8px'),
),

Padding(
  // 개별 방향 패딩 적용
  padding: EdgeInsets.only(
    top: 10.0,
    right: 20.0,
    bottom: 10.0,
    left: 20.0,
  ),
  child: Text('개별 방향 패딩'),
),

// Flutter/Dart에서의 마진
// 마진은 Container 위젯의 margin 속성으로 구현
Container(
  // 모든 방향에 동일한 마진 적용
  margin: EdgeInsets.all(16.0),
  color: Colors.blue,
  child: Text('모든 방향 마진 16px'),
),

Container(
  // 좌우 마진 16px, 상하 마진 8px
  margin: EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
  color: Colors.green,
  child: Text('좌우 마진 16px, 상하 마진 8px'),
),

Container(
  // 개별 방향 마진 적용
  margin: EdgeInsets.only(
    top: 10.0,
    right: 20.0,
    bottom: 10.0,
    left: 20.0,
  ),
  color: Colors.red,
  child: Text('개별 방향 마진'),
),

// SizedBox를 이용한 간격 만들기
Column(
  children: [
    Text('첫 번째 텍스트'),
    SizedBox(height: 16.0), // 세로 간격 16px
    Text('두 번째 텍스트'),
  ],
),

Row(
  children: [
    Text('첫 번째 텍스트'),
    SizedBox(width: 16.0), // 가로 간격 16px
    Text('두 번째 텍스트'),
  ],
),`}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-4 mb-6">
                <RadioGroup
                  value={activeProperty}
                  onValueChange={(value) => setActiveProperty(value as "padding" | "margin")}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="padding" id="padding" />
                    <Label htmlFor="padding">패딩</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="margin" id="margin" />
                    <Label htmlFor="margin">마진</Label>
                  </div>
                </RadioGroup>

                <div>
                  <Label className="mb-2 block">
                    {activeProperty === "padding" ? "패딩" : "마진"} 값: {activeProperty === "padding" ? padding : margin}
                    px
                  </Label>
                  <Slider
                    value={[activeProperty === "padding" ? padding : margin]}
                    onValueChange={(value) => {
                      if (activeProperty === "padding") {
                        setPadding(value[0])
                      } else {
                        setMargin(value[0])
                      }
                    }}
                    min={0}
                    max={64}
                    step={4}
                    className="my-4"
                  />
                </div>
              </div>

              <div
                className="relative border-2 border-dashed border-gray-300 rounded-md"
                style={{ padding: `${margin}px` }}
              >
                <div className="text-center text-xs text-gray-500 absolute inset-0 flex items-center justify-center">
                  마진 영역
                </div>
                <div
                  className="relative bg-[#268052] rounded-md text-white flex items-center justify-center"
                  style={{ padding: `${padding}px` }}
                >
                  <div className="text-center text-xs absolute inset-0 flex items-center justify-center opacity-30">
                    패딩 영역
                  </div>
                  <div className="bg-white text-[#268052] p-2 rounded-md">콘텐츠</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
