"use client"

import { useState } from "react"
import SlideLayout from "../slide-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function ButtonSlide() {
  const [clickCount, setClickCount] = useState(0)
  const [variant, setVariant] = useState<"default" | "destructive" | "outline" | "secondary" | "ghost" | "link">(
    "default",
  )

  return (
    <SlideLayout title="Button">
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
                Button은 사용자가 액션을 트리거할 수 있는 인터랙티브 요소입니다. 클릭하거나 탭하면 지정된 작업을
                수행합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>양식 제출 (Form submission)</li>
                <li>대화 상자 확인/취소 (Dialog confirmation/cancellation)</li>
                <li>페이지 이동 (Navigation)</li>
                <li>기능 활성화/비활성화 (Feature toggle)</li>
                <li>프로세스 시작/중지 (Process start/stop)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <div className="flex text-xs mb-2 text-gray-400">
                <span className="px-2 py-1 rounded bg-gray-700">Dart</span>
              </div>
              <PrismCode
                language="dart"
                code={`import 'package:flutter/material.dart';

class ButtonExample extends StatelessWidget {
  final void Function() onButtonPressed;
  
  const ButtonExample({Key? key, required this.onButtonPressed}) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // 기본 버튼
        ElevatedButton(
          onPressed: () {},
          child: Text('기본 버튼'),
        ),
        SizedBox(height: 16),

        // 비활성화된 버튼
        ElevatedButton(
          onPressed: null, // null로 설정하면 버튼이 비활성화됨
          child: Text('비활성화된 버튼'),
        ),
        SizedBox(height: 24),
        
        Text('다양한 스타일의 버튼', style: TextStyle(fontWeight: FontWeight.bold)),
        SizedBox(height: 8),
        
        // 다양한 스타일의 버튼
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            // default
            ElevatedButton(
              onPressed: () {},
              child: Text('기본'),
            ),
            
            // destructive
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.red,
                foregroundColor: Colors.white,
              ),
              onPressed: () {},
              child: Text('삭제'),
            ),
            
            // outline
            OutlinedButton(
              onPressed: () {},
              child: Text('외곽선'),
            ),
            
            // secondary
            TextButton(
              onPressed: () {},
              child: Text('보조'),
            ),
            
            // ghost
            TextButton(
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all(Colors.transparent),
              ),
              onPressed: () {},
              child: Text('고스트'),
            ),
            
            // link
            TextButton(
              style: TextButton.styleFrom(
                padding: EdgeInsets.zero,
                minimumSize: Size.zero,
                tapTargetSize: MaterialTapTargetSize.shrinkWrap,
              ),
              onPressed: () {},
              child: Text('링크', style: TextStyle(decoration: TextDecoration.underline)),
            ),
          ],
        ),
        SizedBox(height: 24),
        
        Text('크기가 다른 버튼', style: TextStyle(fontWeight: FontWeight.bold)),
        SizedBox(height: 8),
        
        // 크기가 다른 버튼
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            // default size
            ElevatedButton(
              onPressed: () {},
              child: Text('기본 크기'),
            ),
            
            // small size
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                minimumSize: Size(50, 30),
              ),
              onPressed: () {},
              child: Text('작은 크기'),
            ),
            
            // large size
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                padding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                minimumSize: Size(80, 50),
              ),
              onPressed: () {},
              child: Text('큰 크기'),
            ),
          ],
        ),
        SizedBox(height: 24),
        
        // 이벤트 핸들러가 있는 버튼
        ElevatedButton(
          onPressed: () {
            print('버튼이 클릭됨');
            onButtonPressed();
          },
          child: Text('클릭하세요'),
        ),
      ],
    );
  }
}`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">버튼 스타일</label>
                <select
                  value={variant}
                  onChange={(e) => setVariant(e.target.value as any)}
                  className="w-full p-2 border rounded-md mb-4"
                >
                  <option value="default">기본</option>
                  <option value="destructive">삭제</option>
                  <option value="outline">외곽선</option>
                  <option value="secondary">보조</option>
                  <option value="ghost">고스트</option>
                  <option value="link">링크</option>
                </select>
              </div>

              <div className="flex flex-col items-center gap-4">
                <Button variant={variant} onClick={() => setClickCount((prev) => prev + 1)}>
                  버튼 클릭하기
                </Button>

                <p className="text-sm">클릭 횟수: {clickCount}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
}
