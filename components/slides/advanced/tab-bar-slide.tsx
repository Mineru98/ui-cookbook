"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { Clock, Bookmark, Compass, User } from "lucide-react"
import { PrismCode } from "../../ui/prism/PrismCode"

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
      <div className="grid grid-cols-1 gap-8">
      <div className="space-y-4 max-h-[calc(100vh-12rem)] overflow-y-auto">
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
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Dart / Flutter 코드</h3>
            <PrismCode
              code={getDartCode()}
              language="dart"
            />
          </div>
        </div>
      </div>
    </SlideLayout>
  )
} 