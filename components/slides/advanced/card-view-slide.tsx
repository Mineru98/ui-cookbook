"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { PrismCode } from "../../ui/prism/PrismCode"

interface Card {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
}

export default function CardViewSlide() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  
  const cards: Card[] = [
    {
      id: 1,
      title: "카드 컴포넌트 디자인",
      description: "사용자 인터페이스를 위한 효과적인 카드 컴포넌트 디자인 방법",
      image: "📱",
      tags: ["UI", "디자인", "카드"],
    },
    {
      id: 2,
      title: "반응형 카드 레이아웃",
      description: "다양한 화면 크기에 맞춰 조정되는 반응형 카드 레이아웃 구현",
      image: "💻",
      tags: ["반응형", "레이아웃", "CSS"],
    },
    {
      id: 3,
      title: "카드 상호작용",
      description: "카드 컴포넌트의 클릭, 호버 등 사용자 상호작용 효과 적용",
      image: "👆",
      tags: ["상호작용", "애니메이션"],
    },
  ]
  
  return (
    <SlideLayout title="Card View (카드 뷰)">
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
            카드 뷰는 관련 정보를 담은 컨테이너로, 주로 이미지, 제목, 간략한 설명과 액션을 포함합니다.
            정보를 시각적으로 구분하고 그룹화하여 사용자가 콘텐츠를 쉽게 스캔하고 상호작용할 수 있게 합니다.
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium mb-4">카드 컴포넌트 예시</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div 
                key={card.id}
                className={`border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer ${selectedCard === card.id ? 'ring-2 ring-[#268052]' : ''}`}
                onClick={() => setSelectedCard(card.id === selectedCard ? null : card.id)}
              >
                <div className="h-32 bg-gradient-to-r from-[#268052]/80 to-[#268052] flex items-center justify-center text-4xl">
                  {card.image}
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-lg mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{card.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-0.5 bg-[#268052]/10 text-[#268052] text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t p-3 flex justify-end bg-gray-50">
                  <button className="px-3 py-1 bg-[#268052] text-white text-sm rounded-md hover:bg-[#268052]/90">
                    자세히 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {selectedCard && (
            <div className="mt-4 p-4 bg-[#268052]/10 rounded-md">
              <p className="text-sm text-[#268052]">
                카드 #{selectedCard}가 선택되었습니다. 실제 애플리케이션에서는 상세 정보 표시, 
                모달 열기, 새 페이지로 이동 등의 작업이 수행될 수 있습니다.
              </p>
            </div>
          )}
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md mb-6">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">Flutter 구현 코드</h3>
          <PrismCode
            language="dart"
            code={`// 기본 카드 위젯
Card(
  elevation: 2.0,
  shape: RoundedRectangleBorder(
    borderRadius: BorderRadius.circular(8.0),
  ),
  child: Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      // 카드 이미지
      Container(
        height: 120,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              Color(0xFF268052).withOpacity(0.8),
              Color(0xFF268052),
            ],
            begin: Alignment.centerLeft,
            end: Alignment.centerRight,
          ),
        ),
        child: Center(
          child: Text(
            '📱',
            style: TextStyle(fontSize: 40),
          ),
        ),
      ),
      
      // 카드 내용
      Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              '카드 컴포넌트 디자인',
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 18,
              ),
            ),
            SizedBox(height: 8),
            Text(
              '사용자 인터페이스를 위한 효과적인 카드 컴포넌트 디자인 방법',
              style: TextStyle(
                color: Colors.grey[600],
                fontSize: 14,
              ),
            ),
            SizedBox(height: 12),
            // 태그 목록
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: [
                'UI', '디자인', '카드'
              ].map((tag) => Container(
                padding: EdgeInsets.symmetric(
                  horizontal: 8,
                  vertical: 4,
                ),
                decoration: BoxDecoration(
                  color: Color(0xFF268052).withOpacity(0.1),
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Text(
                  tag,
                  style: TextStyle(
                    color: Color(0xFF268052),
                    fontSize: 12,
                  ),
                ),
              )).toList(),
            ),
          ],
        ),
      ),
      
      // 카드 액션
      Container(
        decoration: BoxDecoration(
          color: Colors.grey[50],
          border: Border(
            top: BorderSide(
              color: Colors.grey[200]!,
              width: 1,
            ),
          ),
        ),
        padding: EdgeInsets.all(12),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            ElevatedButton(
              onPressed: () {
                // 자세히 보기 액션
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: Color(0xFF268052),
                foregroundColor: Colors.white,
                padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                textStyle: TextStyle(fontSize: 14),
              ),
              child: Text('자세히 보기'),
            ),
          ],
        ),
      ),
    ],
  ),
)`}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">주요 구성 요소</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>제목: 간결하고 명확한 제목</li>
              <li>이미지/아이콘: 시각적 요소 (선택 사항)</li>
              <li>설명: 간략한 내용 요약</li>
              <li>액션 버튼: 상호작용 요소</li>
              <li>메타데이터: 태그, 날짜, 저자 등</li>
            </ul>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">사용 사례</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>상품 목록 (이커머스)</li>
              <li>뉴스 및 블로그 글</li>
              <li>소셜 미디어 포스트</li>
              <li>대시보드 정보 패널</li>
              <li>사용자 프로필</li>
              <li>프로젝트 또는 태스크 표시</li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">디자인 가이드라인</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>일관된 크기와 간격 사용</li>
            <li>명확한 시각적 계층구조 유지</li>
            <li>클릭 영역을 충분히 크게 설계</li>
            <li>카드 간 일정한 간격 유지</li>
            <li>문맥에 맞는 상호작용 제공</li>
            <li>반응형 그리드에 대응하는 디자인</li>
            <li>중요한 정보는 상단에 배치</li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  )
} 