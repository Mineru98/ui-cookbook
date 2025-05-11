"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function OutlinedButtonSlide() {
  const [borderWidth, setBorderWidth] = useState<string>("1px")
  const [borderColor, setBorderColor] = useState<string>("#268052")
  const [hovered, setHovered] = useState<boolean>(false)

  return (
    <SlideLayout title="Outlined Button">
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
                Outlined Button은 배경색 대신 테두리(외곽선)를 사용하여 강조하는 버튼입니다. 일반적으로 보조 액션이나 덜
                중요한 액션에 사용됩니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>보조 액션 (Secondary actions)</li>
                <li>취소 버튼 (Cancel buttons)</li>
                <li>필터 토글 (Filter toggles)</li>
                <li>옵션 선택 (Option selection)</li>
                <li>시각적으로 덜 강조되어야 하는 액션</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <PrismCode 
                language="dart" 
                code={`// 기본 외곽선 버튼
Button(
  variant: ButtonVariant.outline,
  child: Text("외곽선 버튼"),
)

// 커스텀 스타일의 외곽선 버튼
Button(
  style: ButtonStyle(
    side: BorderSide(
      width: 2,
      color: Colors.blue,
    ),
    foregroundColor: MaterialStateProperty.all(Colors.blue),
    overlayColor: MaterialStateProperty.resolveWith(
      (states) => states.contains(MaterialState.hovered) 
          ? Colors.blue.withOpacity(0.1) 
          : null,
    ),
  ),
  variant: ButtonVariant.outline,
  child: Text("커스텀 외곽선 버튼"),
)

// 아이콘이 있는 외곽선 버튼
Button(
  variant: ButtonVariant.outline,
  child: Row(
    children: [
      Icon(Icons.add, size: 16),
      SizedBox(width: 8),
      Text("추가하기"),
    ],
  ),
)

// 비활성화된 외곽선 버튼
Button(
  variant: ButtonVariant.outline,
  enabled: false,
  child: Text("비활성화됨"),
)`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">테두리 두께</label>
                  <select
                    value={borderWidth}
                    onChange={(e) => setBorderWidth(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="1px">얇게 (1px)</option>
                    <option value="2px">중간 (2px)</option>
                    <option value="3px">두껍게 (3px)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">테두리 색상</label>
                  <select
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="#268052">초록색</option>
                    <option value="#3b82f6">파란색</option>
                    <option value="#ef4444">빨간색</option>
                    <option value="#8b5cf6">보라색</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  className={`px-4 py-2 rounded-md transition-colors duration-200 border-solid`}
                  style={{
                    borderWidth: borderWidth,
                    borderColor: borderColor,
                    color: borderColor,
                    backgroundColor: hovered ? `${borderColor}10` : "transparent",
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  외곽선 버튼
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
