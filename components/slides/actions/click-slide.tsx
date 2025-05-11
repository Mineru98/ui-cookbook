"use client"

import SlideLayout from "../slide-layout"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function ClickSlide() {
  const [clickCount, setClickCount] = useState(0)
  const [touchCount, setTouchCount] = useState(0)
  const [tapCount, setTapCount] = useState(0)

  return (
    <SlideLayout title="Click / Tap / Touch">
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
        <div className="prose max-w-none mb-6">
          <h2 className="text-xl font-semibold mb-3">정의</h2>
          <p>
            사용자가 요소를 짧게 누르거나 터치하는 기본적인 상호작용입니다. 장치와 플랫폼에 따라 다음과 같이 부릅니다:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Click</strong>: 주로 데스크톱, 마우스 환경</li>
            <li><strong>Tap</strong>: 주로 모바일 터치 환경</li>
            <li><strong>Touch</strong>: 터치스크린에서 일반적인 터치 제스처</li>
          </ul>
        </div>

        <h3 className="text-lg font-medium mb-3">사용 예시</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
            <h4 className="font-medium mb-3">Click 예시</h4>
            <Button
              onClick={() => setClickCount(prev => prev + 1)}
              className="mb-4"
            >
              클릭하세요
            </Button>
            <p>클릭 횟수: {clickCount}</p>
          </div>

          <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
            <h4 className="font-medium mb-3">Tap 예시</h4>
            <Button
              onClick={() => setTapCount(prev => prev + 1)}
              className="mb-4"
              variant="outline"
            >
              탭하세요
            </Button>
            <p>탭 횟수: {tapCount}</p>
          </div>

          <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm">
            <h4 className="font-medium mb-3">Touch 예시</h4>
            <div 
              className="w-24 h-24 bg-[#268052] rounded-full flex items-center justify-center text-white cursor-pointer mb-4"
              onClick={() => setTouchCount(prev => prev + 1)}
            >
              터치
            </div>
            <p>터치 횟수: {touchCount}</p>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2">Flutter에서의 클릭, 탭, 터치 구현</h3>
          <PrismCode
            language="dart"
            code={`// 기본 탭 동작 (ElevatedButton)
ElevatedButton(
  onPressed: () {
    // 버튼 클릭 시 실행될 코드
    print('버튼이 클릭되었습니다');
    setState(() {
      clickCount++;
    });
  },
  child: Text('클릭하세요'),
),

// 테두리가 있는 버튼 (OutlinedButton)
OutlinedButton(
  onPressed: () {
    print('아웃라인 버튼이 탭되었습니다');
  },
  child: Text('탭하세요'),
),

// 커스텀 탭 영역 (GestureDetector)
GestureDetector(
  onTap: () {
    print('커스텀 영역이 터치되었습니다');
    setState(() {
      touchCount++;
    });
  },
  child: Container(
    width: 100,
    height: 100,
    decoration: BoxDecoration(
      color: Colors.green,
      shape: BoxShape.circle,
    ),
    child: Center(
      child: Text(
        '터치',
        style: TextStyle(color: Colors.white),
      ),
    ),
  ),
),

// 다양한 터치 이벤트를 처리하는 GestureDetector
GestureDetector(
  // 한 번 탭
  onTap: () {
    print('탭됨');
  },
  // 두 번 탭
  onDoubleTap: () {
    print('더블 탭됨');
  },
  // 길게 누름
  onLongPress: () {
    print('길게 누름');
  },
  // 터치 시작
  onTapDown: (details) {
    print('터치 시작 위치: \${details.globalPosition}');
  },
  // 터치 취소
  onTapCancel: () {
    print('터치 취소됨');
  },
  child: Container(
    width: 200,
    height: 100,
    color: Colors.blue,
    child: Center(
      child: Text(
        '다양한 터치 처리',
        style: TextStyle(color: Colors.white),
      ),
    ),
  ),
),

// InkWell을 사용한 물결 효과 있는 탭 영역
InkWell(
  onTap: () {
    print('InkWell 탭됨');
  },
  splashColor: Colors.green.withOpacity(0.5),
  highlightColor: Colors.blue.withOpacity(0.3),
  child: Container(
    width: 150,
    height: 80,
    alignment: Alignment.center,
    child: Text('탭하면 물결 효과'),
  ),
),
`}
          />
        </div>
        
        <div className="mt-8 p-4 bg-slate-50 rounded-md">
          <h3 className="text-lg font-medium mb-2">주요 특징</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>가장 기본적이고 널리 사용되는 상호작용 방식</li>
            <li>사용자가 액션을 수행하도록 명확한 시각적 피드백 필요</li>
            <li>호버(Hover) 상태는 데스크탑에서 사용 가능하나 모바일에서는 불가능</li>
            <li>접근성을 위해 충분한 터치 영역(44x44px 권장)이 필요</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
}
