"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { Heart } from "lucide-react"
import { PrismCode } from "@/components/ui/prism/PrismCode"

interface GridItem {
  id: number
  title: string
  image: string
  category: string
  likes: number
  isLiked: boolean
}

export default function GridViewSlide() {
  const [items, setItems] = useState<GridItem[]>([
    { id: 1, title: "숲 풍경", image: "🌲", category: "자연", likes: 24, isLiked: false },
    { id: 2, title: "해변 일몰", image: "🏝️", category: "자연", likes: 18, isLiked: false },
    { id: 3, title: "도시 풍경", image: "🏙️", category: "건축", likes: 15, isLiked: false },
    { id: 4, title: "산 정상", image: "🏔️", category: "자연", likes: 32, isLiked: false },
    { id: 5, title: "고양이", image: "🐱", category: "동물", likes: 45, isLiked: false },
    { id: 6, title: "강아지", image: "🐶", category: "동물", likes: 39, isLiked: false },
    { id: 7, title: "커피", image: "☕", category: "음식", likes: 12, isLiked: false },
    { id: 8, title: "케이크", image: "🍰", category: "음식", likes: 21, isLiked: false },
    { id: 9, title: "도서관", image: "📚", category: "건축", likes: 8, isLiked: false },
  ])
  
  const [gridSize, setGridSize] = useState<"small" | "medium" | "large">("medium")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const handleLike = (id: number) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === id) {
        return { 
          ...item, 
          isLiked: !item.isLiked,
          likes: item.isLiked ? item.likes - 1 : item.likes + 1
        }
      }
      return item
    }))
  }
  
  const filteredItems = selectedCategory 
    ? items.filter(item => item.category === selectedCategory)
    : items
  
  const categories = Array.from(new Set(items.map(item => item.category)))
  
  return (
    <SlideLayout title="Grid View (그리드 뷰)">
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
            그리드 뷰는 콘텐츠를 행과 열의 격자 형태로 표시하는 레이아웃으로,
            이미지 갤러리, 대시보드 타일, 제품 카탈로그 등 다양한 요소를 시각적으로 정렬하고 탐색하기에 적합합니다.
          </p>
        </div>
        
        <div className="mb-6 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">카테고리:</span>
              <div className="flex gap-2">
                <button
                  className={`px-3 py-1 rounded text-xs ${selectedCategory === null ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  전체
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-3 py-1 rounded text-xs ${selectedCategory === category ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">그리드 크기:</span>
              <div className="flex gap-2">
                <button
                  className={`p-1 rounded ${gridSize === "small" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setGridSize("small")}
                >
                  <div className="grid grid-cols-3 gap-0.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-current"></div>
                    ))}
                  </div>
                </button>
                <button
                  className={`p-1 rounded ${gridSize === "medium" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setGridSize("medium")}
                >
                  <div className="grid grid-cols-2 gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-current"></div>
                    ))}
                  </div>
                </button>
                <button
                  className={`p-1 rounded ${gridSize === "large" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                  onClick={() => setGridSize("large")}
                >
                  <div className="grid grid-cols-1 gap-0.5">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="w-3 h-1.5 bg-current"></div>
                    ))}
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <div 
            className={`grid gap-4 ${
              gridSize === "small" 
                ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4' 
                : gridSize === "medium"
                  ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                  : 'grid-cols-1 md:grid-cols-2'
            }`}
          >
            {filteredItems.map((item) => (
              <div 
                key={item.id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className={`${gridSize === "small" ? 'h-24' : gridSize === "medium" ? 'h-32' : 'h-40'} bg-[#268052]/10 flex items-center justify-center`}>
                  <span className="text-4xl">{item.image}</span>
                </div>
                
                <div className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-medium ${gridSize === "small" ? 'text-sm' : ''}`}>{item.title}</h4>
                    <span className="bg-gray-100 text-xs px-1.5 py-0.5 rounded">{item.category}</span>
                  </div>
                  
                  {gridSize !== "small" && (
                    <div className="flex justify-between items-center mt-3">
                      <button
                        onClick={() => handleLike(item.id)}
                        className={`flex items-center gap-1.5 ${item.isLiked ? 'text-red-500' : 'text-gray-500'}`}
                      >
                        <Heart className={`w-4 h-4 ${item.isLiked ? 'fill-current' : ''}`} />
                        <span className="text-xs">{item.likes}</span>
                      </button>
                      
                      {gridSize === "large" && (
                        <button className="text-xs px-2 py-1 bg-[#268052]/10 rounded text-[#268052] hover:bg-[#268052]/20">
                          더 보기
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">그리드 뷰 속성</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>격자 크기 (Grid Size)</strong>
                <p className="text-sm text-gray-600">행과 열의 개수, 항목의 크기를 결정</p>
              </li>
              <li>
                <strong>격자 간격 (Grid Gap)</strong>
                <p className="text-sm text-gray-600">항목 사이의 간격</p>
              </li>
              <li>
                <strong>정렬 (Alignment)</strong>
                <p className="text-sm text-gray-600">가로, 세로 정렬 방식</p>
              </li>
              <li>
                <strong>반응형 동작</strong>
                <p className="text-sm text-gray-600">화면 크기에 따라 변하는 격자 구조</p>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">사용 사례</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>이미지 갤러리</li>
              <li>제품 카탈로그</li>
              <li>포트폴리오 레이아웃</li>
              <li>대시보드 타일</li>
              <li>앱 아이콘 그리드</li>
              <li>달력 보기</li>
              <li>멀티미디어 콘텐츠 탐색</li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">구현 기술</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">CSS Grid</h4>
              <PrismCode
                language="dart"
                code={`// GridView.count를 사용한 고정 열 수 그리드
GridView.count(
  crossAxisCount: 3, // 열 수
  crossAxisSpacing: 16, // 가로 간격
  mainAxisSpacing: 16, // 세로 간격
  children: [
    // 그리드 항목들
    for (int i = 0; i < 9; i++)
      Container(
        color: Colors.green[100 * ((i % 5) + 1)],
        child: Center(
          child: Text('항목 $i'),
        ),
      ),
  ],
)`}
              />
            </div>
            <div>
              <h4 className="font-medium mb-2">CSS Flexbox</h4>
              <PrismCode
                language="dart"
                code={`// GridView.builder를 사용한 동적 그리드
GridView.builder(
  gridDelegate: SliverGridDelegateWithMaxCrossAxisExtent(
    maxCrossAxisExtent: 200, // 각 항목의 최대 너비
    crossAxisSpacing: 16, // 가로 간격
    mainAxisSpacing: 16, // 세로 간격
    childAspectRatio: 1, // 가로/세로 비율
  ),
  itemCount: 20,
  itemBuilder: (context, index) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.blue[100 * ((index % 5) + 1)],
        borderRadius: BorderRadius.circular(8),
      ),
      child: Center(
        child: Text('항목 $index'),
      ),
    );
  },
)`}
              />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
} 