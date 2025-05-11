"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { 
  Search, Menu, ArrowLeft, MoreVertical, Bell, Heart, 
  Share, BookmarkPlus, ShoppingCart, User, Settings
} from "lucide-react"
import { PrismCode } from "../../ui/prism/PrismCode"

export default function AppBarSlide() {
  const [appBarType, setAppBarType] = useState<"standard" | "context" | "search" | "prominent">("standard")
  const [showNotification, setShowNotification] = useState(false)
  
  const renderAppBar = () => {
    switch (appBarType) {
      case "context":
        return (
          <div className="bg-white border-b shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <ArrowLeft className="h-5 w-5 text-gray-700" />
                </button>
                <span className="ml-4 font-medium">선택된 항목 (3)</span>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Share className="h-5 w-5 text-gray-700" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <BookmarkPlus className="h-5 w-5 text-gray-700" />
                </button>
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <MoreVertical className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        );
        
      case "search":
        return (
          <div className="bg-white border-b shadow-sm">
            <div className="flex items-center justify-between px-4 py-2.5">
              <button className="p-1.5 rounded-full hover:bg-gray-100">
                <ArrowLeft className="h-5 w-5 text-gray-700" />
              </button>
              
              <div className="flex-1 mx-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    className="pl-10 pr-4 py-1.5 w-full rounded-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#268052] text-sm"
                  />
                </div>
              </div>
              
              <button className="p-1.5 rounded-full hover:bg-gray-100">
                <MoreVertical className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        );
        
      case "prominent":
        return (
          <div className="bg-[#268052] text-white shadow-md">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <button className="p-1.5 rounded-full hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </button>
                <span className="ml-4 font-medium">앱 타이틀</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-full hover:bg-white/10">
                  <Search className="h-5 w-5" />
                </button>
                <button 
                  className="p-1.5 rounded-full hover:bg-white/10 relative"
                  onClick={() => setShowNotification(!showNotification)}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-1.5 rounded-full hover:bg-white/10">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="px-4 pb-4">
              <h1 className="text-xl font-bold">확장 타이틀 영역</h1>
              <p className="text-sm text-white/80 mt-1">추가 설명 텍스트 또는 액션</p>
            </div>
            
            <div className="flex bg-[#1a5c39]">
              <button className="flex-1 py-2 text-sm font-medium border-b-2 border-white">탭 1</button>
              <button className="flex-1 py-2 text-sm font-medium text-white/70 border-b-2 border-transparent hover:text-white">탭 2</button>
              <button className="flex-1 py-2 text-sm font-medium text-white/70 border-b-2 border-transparent hover:text-white">탭 3</button>
            </div>
          </div>
        );
        
      default: // standard
        return (
          <div className="bg-white border-b shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center">
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Menu className="h-5 w-5 text-gray-700" />
                </button>
                <span className="ml-4 font-medium">앱 타이틀</span>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Search className="h-5 w-5 text-gray-700" />
                </button>
                <button 
                  className="p-1.5 rounded-full hover:bg-gray-100 relative"
                  onClick={() => setShowNotification(!showNotification)}
                >
                  <Bell className="h-5 w-5 text-gray-700" />
                  <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <MoreVertical className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  const getDartCode = () => {
    switch (appBarType) {
      case "context":
        return `import 'package:flutter/material.dart';

class ContextAppBarExample extends StatelessWidget {
  const ContextAppBarExample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        foregroundColor: Colors.black87,
        elevation: 1,
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            // 뒤로 가기 동작
          },
        ),
        title: Text('선택된 항목 (3)'),
        actions: [
          IconButton(
            icon: Icon(Icons.share),
            onPressed: () {
              // 공유 동작
            },
          ),
          IconButton(
            icon: Icon(Icons.bookmark_add),
            onPressed: () {
              // 북마크 동작
            },
          ),
          IconButton(
            icon: Icon(Icons.more_vert),
            onPressed: () {
              // 더보기 메뉴 동작
            },
          ),
        ],
      ),
      body: Center(
        child: Text('앱 콘텐츠'),
      ),
    );
  }
}`;

      case "search":
        return `import 'package:flutter/material.dart';

class SearchAppBarExample extends StatelessWidget {
  const SearchAppBarExample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        foregroundColor: Colors.black87,
        elevation: 1,
        titleSpacing: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            // 뒤로 가기 동작
          },
        ),
        title: TextField(
          decoration: InputDecoration(
            hintText: '검색어를 입력하세요',
            border: InputBorder.none,
            contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            prefixIcon: Icon(Icons.search, size: 20, color: Colors.grey),
            filled: true,
            fillColor: Colors.grey[100],
            enabledBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(30),
              borderSide: BorderSide.none,
            ),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(30),
              borderSide: BorderSide(color: Color(0xFF268052), width: 1),
            ),
          ),
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.more_vert),
            onPressed: () {
              // 더보기 메뉴 동작
            },
          ),
        ],
      ),
      body: Center(
        child: Text('검색 결과'),
      ),
    );
  }
}`;

      case "prominent":
        return `import 'package:flutter/material.dart';

class ProminentAppBarExample extends StatefulWidget {
  const ProminentAppBarExample({Key? key}) : super(key: key);

  @override
  _ProminentAppBarExampleState createState() => _ProminentAppBarExampleState();
}

class _ProminentAppBarExampleState extends State<ProminentAppBarExample> with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: NestedScrollView(
        headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
          return <Widget>[
            SliverAppBar(
              backgroundColor: Color(0xFF268052),
              foregroundColor: Colors.white,
              pinned: true,
              floating: true,
              expandedHeight: 120.0,
              leading: IconButton(
                icon: Icon(Icons.menu),
                onPressed: () {
                  // 메뉴 열기 동작
                },
              ),
              title: Text('앱 타이틀'),
              actions: [
                IconButton(
                  icon: Icon(Icons.search),
                  onPressed: () {
                    // 검색 동작
                  },
                ),
                Stack(
                  alignment: Alignment.center,
                  children: [
                    IconButton(
                      icon: Icon(Icons.notifications),
                      onPressed: () {
                        // 알림 동작
                      },
                    ),
                    Positioned(
                      top: 12,
                      right: 12,
                      child: Container(
                        width: 8,
                        height: 8,
                        decoration: BoxDecoration(
                          color: Colors.red,
                          shape: BoxShape.circle,
                        ),
                      ),
                    ),
                  ],
                ),
                IconButton(
                  icon: Icon(Icons.more_vert),
                  onPressed: () {
                    // 더보기 메뉴 동작
                  },
                ),
              ],
              flexibleSpace: FlexibleSpaceBar(
                titlePadding: EdgeInsets.only(left: 72, bottom: 16, right: 16),
                title: Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      '확장 타이틀 영역',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    Text(
                      '추가 설명 텍스트 또는 액션',
                      style: TextStyle(
                        fontSize: 12,
                        color: Colors.white.withOpacity(0.8),
                      ),
                    ),
                  ],
                ),
                collapseMode: CollapseMode.pin,
              ),
              bottom: TabBar(
                controller: _tabController,
                indicatorColor: Colors.white,
                tabs: [
                  Tab(text: '탭 1'),
                  Tab(text: '탭 2'),
                  Tab(text: '탭 3'),
                ],
              ),
            ),
          ];
        },
        body: TabBarView(
          controller: _tabController,
          children: [
            // 탭 콘텐츠
            Center(child: Text('탭 1 콘텐츠')),
            Center(child: Text('탭 2 콘텐츠')),
            Center(child: Text('탭 3 콘텐츠')),
          ],
        ),
      ),
    );
  }
}`;

      default: // standard
        return `import 'package:flutter/material.dart';

class StandardAppBarExample extends StatelessWidget {
  const StandardAppBarExample({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        foregroundColor: Colors.black87,
        elevation: 1,
        leading: IconButton(
          icon: Icon(Icons.menu),
          onPressed: () {
            // 메뉴 열기 동작
          },
        ),
        title: Text('앱 타이틀'),
        actions: [
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {
              // 검색 동작
            },
          ),
          Stack(
            alignment: Alignment.center,
            children: [
              IconButton(
                icon: Icon(Icons.notifications),
                onPressed: () {
                  // 알림 동작
                },
              ),
              Positioned(
                top: 12,
                right: 12,
                child: Container(
                  width: 8,
                  height: 8,
                  decoration: BoxDecoration(
                    color: Colors.red,
                    shape: BoxShape.circle,
                  ),
                ),
              ),
            ],
          ),
          IconButton(
            icon: Icon(Icons.more_vert),
            onPressed: () {
              // 더보기 메뉴 동작
            },
          ),
        ],
      ),
      body: Center(
        child: Text('앱 콘텐츠'),
      ),
    );
  }
}`;
    }
  };
  
  return (
    <SlideLayout title="App Bar (앱 바)">
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
            앱 바(App Bar)는 화면 상단에 위치한 컴포넌트로, 현재 화면의 제목과 함께 내비게이션, 
            검색, 액션 버튼과 같은 주요 기능을 제공합니다. 일반적으로 '툴바(Toolbar)' 또는 
            '내비게이션 바(Navigation Bar)'라고도 불립니다.
          </p>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-center mb-6 flex-wrap gap-2">
            <button
              className={`px-3 py-1.5 rounded text-sm ${appBarType === "standard" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setAppBarType("standard")}
            >
              기본형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${appBarType === "context" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setAppBarType("context")}
            >
              컨텍스트형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${appBarType === "search" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setAppBarType("search")}
            >
              검색형
            </button>
            <button
              className={`px-3 py-1.5 rounded text-sm ${appBarType === "prominent" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
              onClick={() => setAppBarType("prominent")}
            >
              확장형
            </button>
          </div>
          
          <div className="border rounded-lg overflow-hidden bg-gray-50">
            {/* 앱 바 렌더링 */}
            {renderAppBar()}
            
            {/* 앱 콘텐츠 */}
            <div className="relative">
              <div className="p-4">
                <h3 className="font-medium mb-3">
                  {appBarType === "standard" 
                    ? "기본 앱 바" 
                    : appBarType === "context" 
                      ? "컨텍스트 앱 바" 
                      : appBarType === "search" 
                        ? "검색 앱 바" 
                        : "확장형 앱 바"}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {appBarType === "standard" 
                    ? "가장 일반적인 형태의 앱 바로, 앱 타이틀과 주요 액션을 포함합니다." 
                    : appBarType === "context" 
                      ? "항목 선택 시 표시되는 컨텍스트 액션을 위한 앱 바입니다." 
                      : appBarType === "search" 
                        ? "검색 기능에 최적화된 형태의 앱 바입니다." 
                        : "추가 콘텐츠나 탭을 포함하는 확장된 형태의 앱 바입니다."}
                </p>
                
                <div className="space-y-2">
                  {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border shadow-sm">
                      콘텐츠 항목 {idx + 1}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* 알림 패널 (표시 여부에 따라) */}
              {showNotification && (
                <div className="absolute top-0 right-4 w-72 bg-white border shadow-lg rounded-lg overflow-hidden z-10">
                  <div className="p-3 border-b flex justify-between items-center">
                    <h4 className="font-medium">알림</h4>
                    <button 
                      onClick={() => setShowNotification(false)}
                      className="text-xs text-[#268052]"
                    >
                      모두 읽음 표시
                    </button>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {[...Array(3)].map((_, idx) => (
                      <div key={idx} className="p-3 hover:bg-gray-50 cursor-pointer border-b">
                        <div className="flex gap-2">
                          <div className="w-8 h-8 bg-[#268052]/10 rounded-full flex items-center justify-center text-[#268052]">
                            {idx === 0 
                              ? <Heart className="h-4 w-4" />
                              : idx === 1
                                ? <User className="h-4 w-4" />
                                : <Settings className="h-4 w-4" />
                            }
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">
                              {idx === 0 
                                ? "좋아요 알림" 
                                : idx === 1
                                  ? "팔로우 알림"
                                  : "시스템 알림"
                              }
                            </p>
                            <p className="text-xs text-gray-500">방금 전</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 text-center border-t">
                    <button className="w-full py-1.5 text-sm text-[#268052] hover:bg-[#268052]/5 rounded">
                      모든 알림 보기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Flutter 구현 코드</h3>
            <div className="overflow-x-auto rounded-lg">
              <PrismCode code={getDartCode()} language="dart" />
            </div>
          </div>
          
          {/* 추가 정보 영역 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-slate-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">앱 바 유형</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>기본 앱 바(Standard App Bar)</strong>
                  <p className="text-sm text-gray-600">앱 제목과 기본 액션을 제공하는 일반적인 형태</p>
                </li>
                <li>
                  <strong>컨텍스트 앱 바(Contextual App Bar)</strong>
                  <p className="text-sm text-gray-600">항목 선택 시 전환되어 관련 액션 제공</p>
                </li>
                <li>
                  <strong>검색 앱 바(Search App Bar)</strong>
                  <p className="text-sm text-gray-600">검색 UI에 초점을 맞춘 형태</p>
                </li>
                <li>
                  <strong>확장 앱 바(Prominent/Extended App Bar)</strong>
                  <p className="text-sm text-gray-600">추가 콘텐츠 영역이나 탭을 포함한 확장된 형태</p>
                </li>
                <li>
                  <strong>투명 앱 바(Transparent App Bar)</strong>
                  <p className="text-sm text-gray-600">배경이 투명하여 아래 콘텐츠가 보이는 형태</p>
                </li>
                <li>
                  <strong>축소 앱 바(Collapsible App Bar)</strong>
                  <p className="text-sm text-gray-600">스크롤에 따라 크기가 변하는 반응형 형태</p>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-md">
              <h3 className="text-lg font-medium mb-2">주요 구성요소</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>내비게이션 버튼</strong>
                  <p className="text-sm text-gray-600">뒤로 가기, 메뉴 버튼 등 탐색 컨트롤</p>
                </li>
                <li>
                  <strong>타이틀</strong>
                  <p className="text-sm text-gray-600">현재 화면의 제목이나 앱 이름</p>
                </li>
                <li>
                  <strong>액션 버튼</strong>
                  <p className="text-sm text-gray-600">검색, 공유, 설정 등 주요 기능 버튼</p>
                </li>
                <li>
                  <strong>오버플로 메뉴</strong>
                  <p className="text-sm text-gray-600">추가 옵션을 담은 더보기 메뉴</p>
                </li>
                <li>
                  <strong>탭 바</strong>
                  <p className="text-sm text-gray-600">여러 섹션으로 화면을 분할하는 탭</p>
                </li>
                <li>
                  <strong>검색창</strong>
                  <p className="text-sm text-gray-600">검색 인터페이스</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md mt-6">
            <h3 className="text-lg font-medium mb-2 text-[#268052]">디자인 권장사항</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>
                <strong>일관성 유지</strong>
                <p className="text-sm">앱 전반에 걸쳐 앱 바의 디자인 패턴 일관성 유지</p>
              </li>
              <li>
                <strong>간결한 레이아웃</strong>
                <p className="text-sm">너무 많은 액션 버튼은 피하고 중요도에 따라 정렬</p>
              </li>
              <li>
                <strong>명확한 계층구조</strong>
                <p className="text-sm">앱 바가 콘텐츠보다 상위 계층임을 그림자나 색상으로 표현</p>
              </li>
              <li>
                <strong>반응형 디자인</strong>
                <p className="text-sm">다양한 화면 크기에 적절히 대응하는 유연한 레이아웃 구현</p>
              </li>
              <li>
                <strong>접근성 고려</strong>
                <p className="text-sm">모든 버튼에 적절한 크기와 간격 제공, 스크린 리더 지원</p>
              </li>
              <li>
                <strong>스크롤 동작 최적화</strong>
                <p className="text-sm">스크롤에 따른 앱 바의 동작(고정, 숨김, 축소) 고려</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
} 