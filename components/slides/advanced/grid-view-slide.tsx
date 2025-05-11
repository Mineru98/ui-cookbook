"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { Heart } from "lucide-react"
import { PrismCode } from "../../ui/prism/PrismCode"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
                그리드 뷰는 콘텐츠를 행과 열의 격자 형태로 표시하는 레이아웃으로,
                이미지 갤러리, 대시보드 타일, 제품 카탈로그 등 다양한 요소를 시각적으로 정렬하고 탐색하기에 적합합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">그리드 뷰 속성</h3>
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
            
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">사용 사례</h3>
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
            
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">구현 고려사항</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>대량의 데이터를 효율적으로 처리하기 위한 가상화(virtualization) 적용</li>
                <li>항목 선택, 멀티 선택, 컨텍스트 메뉴 등의 상호작용 지원</li>
                <li>검색, 필터링, 정렬 기능 제공</li>
                <li>다양한 상태(로딩, 비어있음, 오류 등)에 대한 처리</li>
                <li>스크롤 위치 저장 및 무한 스크롤 기능 고려</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
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
)

// GridView.builder를 사용한 동적 그리드
GridView.builder(
  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
    crossAxisCount: 2, // 열 수
    childAspectRatio: 1.0, // 자식 위젯의 가로/세로 비율
    crossAxisSpacing: 10.0, // 가로 간격
    mainAxisSpacing: 10.0, // 세로 간격
  ),
  itemCount: items.length,
  itemBuilder: (context, index) {
    return Card(
      elevation: 2.0,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // 이미지 영역
          Expanded(
            child: Container(
              color: Colors.green[100],
              alignment: Alignment.center,
              child: Text(
                items[index].image,
                style: TextStyle(fontSize: 40),
              ),
            ),
          ),
          // 정보 영역
          Padding(
            padding: EdgeInsets.all(8.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      items[index].title,
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.symmetric(
                        horizontal: 6,
                        vertical: 2,
                      ),
                      decoration: BoxDecoration(
                        color: Colors.grey[200],
                        borderRadius: BorderRadius.circular(4),
                      ),
                      child: Text(
                        items[index].category,
                        style: TextStyle(
                          fontSize: 10,
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(height:
                 8),
                Row(
                  children: [
                    GestureDetector(
                      onTap: () => onLikePressed(items[index].id),
                      child: Row(
                        children: [
                          Icon(
                            items[index].isLiked
                                ? Icons.favorite
                                : Icons.favorite_border,
                            size: 16,
                            color: items[index].isLiked
                                ? Colors.red
                                : Colors.grey,
                          ),
                          SizedBox(width: 4),
                          Text(
                            items[index].likes.toString(),
                            style: TextStyle(
                              fontSize: 12,
                              color: Colors.grey[600],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  },
)

// 카테고리 필터링 기능 구현
Widget buildCategoryFilter(List<String> categories) {
  return SingleChildScrollView(
    scrollDirection: Axis.horizontal,
    child: Row(
      children: [
        Padding(
          padding: EdgeInsets.symmetric(horizontal: 4),
          child: FilterChip(
            label: Text('전체'),
            selected: selectedCategory == null,
            onSelected: (selected) {
              setState(() {
                selectedCategory = null;
              });
            },
          ),
        ),
        ...categories.map((category) => Padding(
              padding: EdgeInsets.symmetric(horizontal: 4),
              child: FilterChip(
                label: Text(category),
                selected: selectedCategory == category,
                onSelected: (selected) {
                  setState(() {
                    selectedCategory = selected ? category : null;
                  });
                },
              ),
            )),
      ],
    ),
  );
}

// 좋아요 기능 처리 함수
void onLikePressed(int id) {
  setState(() {
    final index = items.indexWhere((item) => item.id == id);
    if (index != -1) {
      items[index].isLiked = !items[index].isLiked;
      items[index].likes += items[index].isLiked ? 1 : -1;
    }
  });
}`}
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex justify-between items-center mb-4">
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
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  )
} 