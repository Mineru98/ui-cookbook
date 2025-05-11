"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { Clock, Bookmark, Compass, User } from "lucide-react"
import { PrismCode } from "../../ui/prism/PrismCode"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabBarSlide() {
  const [activeTab, setActiveTab] = useState("recent")
  const [tabBarStyle, setTabBarStyle] = useState<"basic" | "scrollable" | "underline" | "pills" | "material">("basic")
  
  const tabItems = [
    { id: "recent", label: "최근", icon: Clock },
    { id: "saved", label: "저장됨", icon: Bookmark },
    { id: "explore", label: "탐색", icon: Compass },
    { id: "profile", label: "프로필", icon: User },
  ]
  
  const longTabItems = [
    { id: "recent", label: "최근 항목" },
    { id: "saved", label: "저장된 항목" },
    { id: "explore", label: "탐색하기" },
    { id: "popular", label: "인기 있는 항목" },
    { id: "trending", label: "트렌딩 항목" },
    { id: "recommend", label: "추천 항목" },
    { id: "favorites", label: "즐겨찾기" },
  ]
  
  const renderTabBar = () => {
    switch (tabBarStyle) {
      case "scrollable":
        return (
          <div className="border-b">
            <div className="overflow-x-auto">
              <div className="flex whitespace-nowrap">
                {longTabItems.map(tab => (
                  <button
                    key={tab.id}
                    className={`px-6 py-3 text-sm font-medium ${
                      activeTab === tab.id 
                        ? 'text-[#268052] border-b-2 border-[#268052]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
        
      case "underline":
        return (
          <div className="border-b">
            <div className="flex justify-around">
              {tabItems.map(tab => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 relative text-sm font-medium ${
                    activeTab === tab.id 
                      ? 'text-[#268052]' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div className="flex flex-col items-center">
                    <tab.icon className="h-5 w-5 mb-1" />
                    {tab.label}
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 inset-x-0 h-0.5 bg-[#268052]"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        );
        
      case "pills":
        return (
          <div className="bg-gray-100 p-1.5 rounded-lg flex">
            {tabItems.map(tab => (
              <button
                key={tab.id}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white shadow text-[#268052]' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="flex items-center justify-center">
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </div>
              </button>
            ))}
          </div>
        );
        
      case "material":
        const itemWidth = 100 / tabItems.length;
        const indicatorPosition = tabItems.findIndex(tab => tab.id === activeTab) * itemWidth;
        
        return (
          <div className="bg-white border-b">
            <div className="relative">
              <div className="flex justify-around">
                {tabItems.map(tab => (
                  <button
                    key={tab.id}
                    className={`px-6 py-3 text-sm font-medium z-10 transition-colors ${
                      activeTab === tab.id 
                        ? 'text-[#268052]' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{ width: `${itemWidth}%` }}
                  >
                    <div className="flex flex-col items-center">
                      <tab.icon className="h-5 w-5 mb-1" />
                      {tab.label}
                    </div>
                  </button>
                ))}
              </div>
              <div 
                className="absolute bottom-0 h-0.5 bg-[#268052] transition-all duration-300"
                style={{ 
                  width: `${itemWidth}%`, 
                  left: `${indicatorPosition}%` 
                }}
              ></div>
            </div>
          </div>
        );
        
      default: // basic
        return (
          <div className="border-b">
            <div className="flex justify-around">
              {tabItems.map(tab => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === tab.id 
                      ? 'text-[#268052] border-b-2 border-[#268052]' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        );
    }
  };
  
  const getDartCode = () => {
    switch (tabBarStyle) {
      case "scrollable":
        return `import 'package:flutter/material.dart';

class ScrollableTabBarExample extends StatefulWidget {
  const ScrollableTabBarExample({Key? key}) : super(key: key);

  @override
  _ScrollableTabBarExampleState createState() => _ScrollableTabBarExampleState();
}

class _ScrollableTabBarExampleState extends State<ScrollableTabBarExample> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  final List<String> _tabs = [
    '최근 항목',
    '저장된 항목',
    '탐색하기',
    '인기 있는 항목',
    '트렌딩 항목',
    '추천 항목',
    '즐겨찾기',
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: _tabs.length, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('스크롤형 탭 바'),
        bottom: TabBar(
          controller: _tabController,
          isScrollable: true,
          labelColor: Color(0xFF268052),
          unselectedLabelColor: Colors.grey,
          indicatorColor: Color(0xFF268052),
          indicatorWeight: 2,
          tabs: _tabs.map((String tabName) => Tab(text: tabName)).toList(),
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: _tabs.map((String tabName) {
          return Center(
            child: Text(
              '\$tabName 콘텐츠',
              style: TextStyle(fontSize: 18),
            ),
          );
        }).toList(),
      ),
    );
  }
}`;

      case "underline":
        return `import 'package:flutter/material.dart';

class UnderlineTabBarExample extends StatefulWidget {
  const UnderlineTabBarExample({Key? key}) : super(key: key);

  @override
  _UnderlineTabBarExampleState createState() => _UnderlineTabBarExampleState();
}

class _UnderlineTabBarExampleState extends State<UnderlineTabBarExample> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  
  final List<Map<String, dynamic>> _tabs = [
    {'id': 'recent', 'label': '최근', 'icon': Icons.access_time},
    {'id': 'saved', 'label': '저장됨', 'icon': Icons.bookmark},
    {'id': 'explore', 'label': '탐색', 'icon': Icons.explore},
    {'id': 'profile', 'label': '프로필', 'icon': Icons.person},
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: _tabs.length, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('언더라인형 탭 바'),
      ),
      body: Column(
        children: [
          TabBar(
            controller: _tabController,
            labelColor: Color(0xFF268052),
            unselectedLabelColor: Colors.grey,
            indicatorColor: Color(0xFF268052),
            indicatorWeight: 2,
            tabs: _tabs.map((tab) {
              return Tab(
                icon: Icon(tab['icon']),
                text: tab['label'],
              );
            }).toList(),
          ),
          Expanded(
            child: TabBarView(
              controller: _tabController,
              children: _tabs.map((tab) {
                return Center(
                  child: Text(
                    '\${tab['label']} 콘텐츠',
                    style: TextStyle(fontSize: 18),
                  ),
                );
              }).toList(),
            ),
          ),
        ],
      ),
    );
  }
}`;

      case "pills":
        return `import 'package:flutter/material.dart';

class PillsTabBarExample extends StatefulWidget {
  const PillsTabBarExample({Key? key}) : super(key: key);

  @override
  _PillsTabBarExampleState createState() => _PillsTabBarExampleState();
}

class _PillsTabBarExampleState extends State<PillsTabBarExample> {
  int _selectedIndex = 0;
  
  final List<Map<String, dynamic>> _tabs = [
    {'id': 'recent', 'label': '최근', 'icon': Icons.access_time},
    {'id': 'saved', 'label': '저장됨', 'icon': Icons.bookmark},
    {'id': 'explore', 'label': '탐색', 'icon': Icons.explore},
    {'id': 'profile', 'label': '프로필', 'icon': Icons.person},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('필 탭형 탭 바'),
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Container(
              decoration: BoxDecoration(
                color: Colors.grey.shade100,
                borderRadius: BorderRadius.circular(12),
              ),
              padding: EdgeInsets.all(6),
              child: Row(
                children: List.generate(_tabs.length, (index) {
                  return Expanded(
                    child: GestureDetector(
                      onTap: () {
                        setState(() {
                          _selectedIndex = index;
                        });
                      },
                      child: Container(
                        padding: EdgeInsets.symmetric(vertical: 10),
                        decoration: BoxDecoration(
                          color: _selectedIndex == index 
                            ? Colors.white 
                            : Colors.transparent,
                          borderRadius: BorderRadius.circular(10),
                          boxShadow: _selectedIndex == index
                            ? [
                                BoxShadow(
                                  color: Colors.grey.withOpacity(0.2),
                                  spreadRadius: 1,
                                  blurRadius: 2,
                                  offset: Offset(0, 1),
                                )
                              ]
                            : null,
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              _tabs[index]['icon'],
                              size: 16,
                              color: _selectedIndex == index 
                                ? Color(0xFF268052) 
                                : Colors.grey,
                            ),
                            SizedBox(width: 8),
                            Text(
                              _tabs[index]['label'],
                              style: TextStyle(
                                color: _selectedIndex == index 
                                  ? Color(0xFF268052) 
                                  : Colors.grey,
                                fontWeight: FontWeight.w500,
                                fontSize: 14,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  );
                }),
              ),
            ),
          ),
          Expanded(
            child: Center(
              child: Text(
                '\${_tabs[_selectedIndex]['label']} 콘텐츠',
                style: TextStyle(fontSize: 18),
              ),
            ),
          ),
        ],
      ),
    );
  }
}`;

      case "material":
        return `import 'package:flutter/material.dart';

class MaterialTabBarExample extends StatefulWidget {
  const MaterialTabBarExample({Key? key}) : super(key: key);

  @override
  _MaterialTabBarExampleState createState() => _MaterialTabBarExampleState();
}

class _MaterialTabBarExampleState extends State<MaterialTabBarExample> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  
  final List<Map<String, dynamic>> _tabs = [
    {'id': 'recent', 'label': '최근', 'icon': Icons.access_time},
    {'id': 'saved', 'label': '저장됨', 'icon': Icons.bookmark},
    {'id': 'explore', 'label': '탐색', 'icon': Icons.explore},
    {'id': 'profile', 'label': '프로필', 'icon': Icons.person},
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: _tabs.length, vsync: this);
    
    // 탭 변경 애니메이션 리스너
    _tabController.addListener(() {
      if (_tabController.indexIsChanging) {
        setState(() {});
      }
    });
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('머티리얼형 탭 바'),
      ),
      body: Column(
        children: [
          Container(
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [
                BoxShadow(
                  color: Colors.grey.withOpacity(0.2),
                  spreadRadius: 0,
                  blurRadius: 2,
                  offset: Offset(0, 1),
                ),
              ],
            ),
            child: TabBar(
              controller: _tabController,
              labelColor: Color(0xFF268052),
              unselectedLabelColor: Colors.grey,
              indicator: UnderlineTabIndicator(
                borderSide: BorderSide(
                  width: 2.0,
                  color: Color(0xFF268052),
                ),
                insets: EdgeInsets.symmetric(horizontal: 16.0),
              ),
              tabs: _tabs.map((tab) {
                return Tab(
                  icon: Icon(tab['icon']),
                  text: tab['label'],
                  iconMargin: EdgeInsets.only(bottom: 4),
                );
              }).toList(),
            ),
          ),
          Expanded(
            child: TabBarView(
              controller: _tabController,
              children: _tabs.map((tab) {
                return Center(
                  child: Text(
                    '\${tab['label']} 콘텐츠',
                    style: TextStyle(fontSize: 18),
                  ),
                );
              }).toList(),
            ),
          ),
        ],
      ),
    );
  }
}`;

      default: // basic
        return `import 'package:flutter/material.dart';

class BasicTabBarExample extends StatefulWidget {
  const BasicTabBarExample({Key? key}) : super(key: key);

  @override
  _BasicTabBarExampleState createState() => _BasicTabBarExampleState();
}

class _BasicTabBarExampleState extends State<BasicTabBarExample> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  
  final List<String> _tabs = [
    '최근',
    '저장됨',
    '탐색',
    '프로필',
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: _tabs.length, vsync: this);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('기본형 탭 바'),
        bottom: TabBar(
          controller: _tabController,
          labelColor: Color(0xFF268052),
          unselectedLabelColor: Colors.grey,
          indicatorColor: Color(0xFF268052),
          indicatorWeight: 2,
          tabs: _tabs.map((String tabName) => Tab(text: tabName)).toList(),
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: _tabs.map((String tabName) {
          return Center(
            child: Text(
              '\$tabName 콘텐츠',
              style: TextStyle(fontSize: 18),
            ),
          );
        }).toList(),
      ),
    );
  }
}`;
    }
  };
  
  return (
    <SlideLayout title="탭 바 (Tab Bar)">
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
            <div className="prose max-w-none mb-6">
              <h2 className="text-xl font-semibold mb-3">정의</h2>
              <p>
                탭 바(Tab Bar)는 동일한 계층 내에서 여러 화면 또는 콘텐츠 섹션 간 전환을 위한 
                내비게이션 컴포넌트입니다. 사용자가 쉽게 관련 콘텐츠 간을 이동할 수 있도록 
                카테고리별로 구분된 직관적인 인터페이스를 제공합니다.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">탭 바 스타일</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>기본형 (Basic)</strong>
                    <p className="text-sm text-gray-600">일반적인 텍스트 탭, 하단 인디케이터로 활성 탭 표시</p>
                  </li>
                  <li>
                    <strong>아이콘 언더라인형 (Underline)</strong>
                    <p className="text-sm text-gray-600">아이콘과 텍스트 결합, 하단에 언더라인 인디케이터 표시</p>
                  </li>
                  <li>
                    <strong>스크롤형 (Scrollable)</strong>
                    <p className="text-sm text-gray-600">많은 탭이 있을 때 가로로 스크롤 가능한 형식</p>
                  </li>
                  <li>
                    <strong>필 탭형 (Pills)</strong>
                    <p className="text-sm text-gray-600">둥근 모서리 형태로 전체 배경 강조되는 형식</p>
                  </li>
                  <li>
                    <strong>머티리얼형 (Material)</strong>
                    <p className="text-sm text-gray-600">애니메이션 인디케이터가 탭 이동 시 부드럽게 전환</p>
                  </li>
                </ul>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">사용 사례</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>카테고리별 콘텐츠 분류 (뉴스, 스포츠, 엔터테인먼트 등)</li>
                  <li>설정 화면의 섹션 구분 (일반, 계정, 알림 등)</li>
                  <li>제품 상세 페이지의 정보 구분 (상세정보, 리뷰, 문의 등)</li>
                  <li>소셜 미디어 앱의 타임라인 분류 (팔로잉, 인기, 추천 등)</li>
                  <li>다양한 뷰 모드 전환 (목록형, 갤러리형, 지도형 등)</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-4 mb-2">접근성 고려사항</h3>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                  <li>충분한 색상 대비로 가독성 확보</li>
                  <li>적절한 터치 영역 크기 (최소 48x48dp)</li>
                  <li>현재 선택된 탭을 명확히 표시</li>
                  <li>스크린 리더 지원 (ARIA 속성 적용)</li>
                  <li>키보드 접근성 지원</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#268052]">디자인 권장사항</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>일관된 디자인 언어 유지 (앱 전체 스타일과 통일)</li>
                <li>한 번에 볼 수 있는 적절한 탭 수 유지 (4-6개 권장)</li>
                <li>명확한 레이블 사용 (짧고 직관적인 단어 선택)</li>
                <li>아이콘과 텍스트 조합으로 이해도 향상</li>
                <li>적절한 여백과 간격으로 가독성 확보</li>
                <li>탭 간 전환 시 부드러운 애니메이션 적용</li>
                <li>스와이프 제스처 지원 고려 (탭 간 좌우 스와이프)</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <PrismCode
                code={getDartCode()}
                language="dart"
              />
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <button 
                className={`px-3 py-1 text-sm rounded-full ${tabBarStyle === 'basic' ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                onClick={() => setTabBarStyle('basic')}
              >
                기본형
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-full ${tabBarStyle === 'underline' ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                onClick={() => setTabBarStyle('underline')}
              >
                아이콘 언더라인형
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-full ${tabBarStyle === 'scrollable' ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                onClick={() => setTabBarStyle('scrollable')}
              >
                스크롤형
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-full ${tabBarStyle === 'pills' ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                onClick={() => setTabBarStyle('pills')}
              >
                필 탭형
              </button>
              <button 
                className={`px-3 py-1 text-sm rounded-full ${tabBarStyle === 'material' ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                onClick={() => setTabBarStyle('material')}
              >
                머티리얼형
              </button>
            </div>
            
            <div className="border rounded-md shadow-sm overflow-hidden">
              <div className="p-4 flex justify-center">
                <div className="w-full max-w-md">
                  {renderTabBar()}
                  <div className="p-8 text-center text-gray-500">
                    {activeTab} 콘텐츠
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