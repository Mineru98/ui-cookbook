"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { Home, Search, Heart, User, ShoppingBag, Bell, Settings, List } from "lucide-react"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function BottomNavigationSlide() {
  const [activeTab, setActiveTab] = useState("home")
  const [style, setStyle] = useState<"default" | "labeled" | "shifting" | "icon-only" | "badge">("default")
  
  const navigationItems = [
    { id: "home", label: "홈", icon: Home },
    { id: "search", label: "검색", icon: Search },
    { id: "favorites", label: "관심", icon: Heart, badge: 2 },
    { id: "profile", label: "프로필", icon: User },
  ]
  
  const shiftingItems = [
    { id: "home", label: "홈", icon: Home },
    { id: "search", label: "검색", icon: Search },
    { id: "cart", label: "장바구니", icon: ShoppingBag, badge: 3 },
    { id: "notifications", label: "알림", icon: Bell, badge: 5 },
    { id: "settings", label: "설정", icon: Settings },
  ]
  
  const renderBottomNavigation = () => {
    switch(style) {
      case "labeled":
        return (
          <div className="bg-white shadow-lg border-t rounded-t-xl">
            <div className="flex items-center justify-around">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  className={`flex flex-col items-center justify-center p-3 flex-1 ${
                    activeTab === item.id 
                      ? 'text-[#268052]' 
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
        
      case "shifting":
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {shiftingItems.map(item => (
                <button
                  key={item.id}
                  className={`flex items-center justify-center p-3 flex-1 transition-all duration-300 ${
                    activeTab === item.id 
                      ? 'text-[#268052] scale-110' 
                      : 'text-gray-400 scale-90'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <div className="relative">
                    <item.icon className="w-6 h-6" />
                    {item.badge && activeTab === item.id && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  {activeTab === item.id && (
                    <span className="text-xs font-medium ml-1.5">{item.label}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );
        
      case "icon-only":
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  className={`flex items-center justify-center p-3 flex-1 ${
                    activeTab === item.id 
                      ? 'text-[#268052]' 
                      : 'text-gray-400'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
        );
        
      case "badge":
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  className={`flex flex-col items-center justify-center p-3 flex-1 ${
                    activeTab === item.id 
                      ? 'text-[#268052]' 
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <div className="relative">
                    <item.icon className="w-6 h-6" />
                    {item.badge && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {item.badge}
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-medium mt-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
        
      default: // default
        return (
          <div className="bg-white shadow-lg border-t">
            <div className="flex items-center justify-around">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  className={`flex flex-col items-center justify-center p-3 flex-1 ${
                    activeTab === item.id 
                      ? 'text-[#268052] border-t-2 border-[#268052]' 
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        );
    }
  };
  
  return (
    <SlideLayout title="Bottom Navigation (하단 내비게이션)">
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
            하단 내비게이션은 모바일 앱에서 화면 하단에 위치하는 내비게이션 바로, 앱의 주요 탐색 기능을 제공합니다.
            사용자가 한 손으로 쉽게 접근할 수 있는 영역에 주요 기능을 배치하여 사용성을 높이는 UI 패턴입니다.
          </p>
        </div>
        
        <div className="mb-8 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="flex gap-2">
              <button
                className={`px-3 py-1.5 rounded text-sm ${style === "default" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                onClick={() => setStyle("default")}
              >
                기본형
              </button>
              <button
                className={`px-3 py-1.5 rounded text-sm ${style === "labeled" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                onClick={() => setStyle("labeled")}
              >
                라벨형
              </button>
              <button
                className={`px-3 py-1.5 rounded text-sm ${style === "shifting" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                onClick={() => setStyle("shifting")}
              >
                시프팅형
              </button>
              <button
                className={`px-3 py-1.5 rounded text-sm ${style === "icon-only" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                onClick={() => setStyle("icon-only")}
              >
                아이콘 전용
              </button>
              <button
                className={`px-3 py-1.5 rounded text-sm ${style === "badge" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
                onClick={() => setStyle("badge")}
              >
                배지형
              </button>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden bg-gray-100 shadow-md">
            {/* 모바일 앱 프레임 */}
            <div className="relative h-96">
              {/* 앱 콘텐츠 영역 */}
              <div className="absolute inset-0 p-4 overflow-y-auto pb-16">
                <div className="flex items-center mb-4">
                  <List className="w-6 h-6 mr-2" />
                  <h3 className="font-medium">{navigationItems.find(i => i.id === activeTab)?.label || shiftingItems.find(i => i.id === activeTab)?.label} 화면</h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  현재 선택된 탭: <strong>{activeTab}</strong>
                </p>
                
                <div className="space-y-2 pb-4">
                  <div className="h-16 bg-white rounded-lg shadow-sm border p-4">콘텐츠 항목 1</div>
                  <div className="h-16 bg-white rounded-lg shadow-sm border p-4">콘텐츠 항목 2</div>
                  <div className="h-16 bg-white rounded-lg shadow-sm border p-4">콘텐츠 항목 3</div>
                  <div className="h-16 bg-white rounded-lg shadow-sm border p-4">콘텐츠 항목 4</div>
                  <div className="h-16 bg-white rounded-lg shadow-sm border p-4">콘텐츠 항목 5</div>
                </div>
              </div>
              
              {/* 바텀 내비게이션 */}
              <div className="absolute bottom-0 left-0 right-0">
                {renderBottomNavigation()}
              </div>
            </div>
          </div>
          
          <p className="text-sm text-center text-gray-500">다른 스타일을 클릭해보세요</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">스타일 가이드</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>기본형 (Default)</strong>
                <p className="text-sm text-gray-600">아이콘과 텍스트 조합, 활성 탭은 강조표시</p>
              </li>
              <li>
                <strong>라벨형 (Labeled)</strong>
                <p className="text-sm text-gray-600">아이콘과 텍스트가 잘 구분되도록 배치</p>
              </li>
              <li>
                <strong>시프팅형 (Shifting)</strong>
                <p className="text-sm text-gray-600">활성 탭이 확장되고 나머지는 축소, 탭 레이블은 활성 탭에만 표시</p>
              </li>
              <li>
                <strong>아이콘 전용 (Icon-only)</strong>
                <p className="text-sm text-gray-600">공간 절약을 위해 아이콘만 사용하는 최소한의 디자인</p>
              </li>
              <li>
                <strong>배지형 (Badge)</strong>
                <p className="text-sm text-gray-600">알림이나 카운터를 표시하는 배지가 포함된 디자인</p>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">디자인 지침</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>3-5개 항목으로 제한 (너무 많으면 탐색이 어려움)</li>
              <li>앱의 핵심 기능에 집중</li>
              <li>명확한 아이콘과 레이블 사용</li>
              <li>현재 위치를 명확히 표시</li>
              <li>터치 영역 충분히 확보 (최소 48x48dp)</li>
              <li>세로 방향(portrait) 사용 시 적합</li>
              <li>스크롤 시 자동 숨김 고려</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-4 mb-2">사용 예시</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
              <li>소셜 미디어 앱</li>
              <li>쇼핑 앱</li>
              <li>뉴스/컨텐츠 앱</li>
              <li>멀티 기능 앱</li>
              <li>탐색이 중요한 앱</li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">구현 및 접근성</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>아이콘과 텍스트를 함께 사용하여 이해도 향상</li>
            <li>탭 전환 시 부드러운 애니메이션 적용</li>
            <li>컬러 대비 충분히 확보</li>
            <li>스크린 리더 지원을 위한 적절한 aria 속성 적용</li>
            <li>제스처 지원 (스와이프로 탭 전환)</li>
            <li>홈 버튼이나 뒤로 가기에 대한 일관된 처리</li>
            <li>화면 크기에 따른 반응형 대응</li>
          </ul>
        </div>

        <div className="p-4 border rounded-md mt-6">
          <h3 className="text-lg font-medium mb-3">Flutter 구현 코드 예시</h3>
          <PrismCode
            language="dart"
            code={`import 'package:flutter/material.dart';

class BottomNavigationExample extends StatefulWidget {
  @override
  _BottomNavigationExampleState createState() => _BottomNavigationExampleState();
}

class _BottomNavigationExampleState extends State<BottomNavigationExample> {
  String _activeTab = 'home';
  String _style = 'default'; // 'default', 'labeled', 'shifting', 'icon-only', 'badge'
  
  // 기본 내비게이션 아이템
  final List<Map<String, dynamic>> _navigationItems = [
    {
      'id': 'home',
      'label': '홈',
      'icon': Icons.home,
    },
    {
      'id': 'search',
      'label': '검색',
      'icon': Icons.search,
    },
    {
      'id': 'favorites',
      'label': '관심',
      'icon': Icons.favorite,
      'badge': 2,
    },
    {
      'id': 'profile',
      'label': '프로필',
      'icon': Icons.person,
    },
  ];
  
  // 시프팅 스타일용 아이템
  final List<Map<String, dynamic>> _shiftingItems = [
    {
      'id': 'home',
      'label': '홈',
      'icon': Icons.home,
    },
    {
      'id': 'search',
      'label': '검색',
      'icon': Icons.search,
    },
    {
      'id': 'cart',
      'label': '장바구니',
      'icon': Icons.shopping_bag,
      'badge': 3,
    },
    {
      'id': 'notifications',
      'label': '알림',
      'icon': Icons.notifications,
      'badge': 5,
    },
    {
      'id': 'settings',
      'label': '설정',
      'icon': Icons.settings,
    },
  ];
  
  // 현재 선택된 스타일에 따른 내비게이션 위젯 반환
  Widget _buildBottomNavigation() {
    switch (_style) {
      case 'labeled':
        return BottomNavigationBar(
          currentIndex: _navigationItems.indexWhere((item) => item['id'] == _activeTab),
          selectedItemColor: Color(0xFF268052),
          unselectedItemColor: Colors.grey,
          showUnselectedLabels: true,
          type: BottomNavigationBarType.fixed,
          items: _navigationItems.map((item) => 
            BottomNavigationBarItem(
              icon: Icon(item['icon']),
              label: item['label'],
            )
          ).toList(),
          onTap: (index) {
            setState(() {
              _activeTab = _navigationItems[index]['id'];
            });
          },
        );
        
      case 'shifting':
        return BottomNavigationBar(
          currentIndex: _shiftingItems.indexWhere((item) => item['id'] == _activeTab),
          selectedItemColor: Color(0xFF268052),
          unselectedItemColor: Colors.grey[400],
          showUnselectedLabels: false,
          type: BottomNavigationBarType.shifting,
          items: _shiftingItems.map((item) {
            final hasBadge = item.containsKey('badge') && item['badge'] != null;
            
            return BottomNavigationBarItem(
              icon: hasBadge 
                ? Badge(
                    label: Text(item['badge'].toString()),
                    backgroundColor: Colors.red,
                    child: Icon(item['icon']),
                  )
                : Icon(item['icon']),
              label: item['label'],
              backgroundColor: Colors.white,
            );
          }).toList(),
          onTap: (index) {
            setState(() {
              _activeTab = _shiftingItems[index]['id'];
            });
          },
        );
        
      case 'icon-only':
        return BottomNavigationBar(
          currentIndex: _navigationItems.indexWhere((item) => item['id'] == _activeTab),
          selectedItemColor: Color(0xFF268052),
          unselectedItemColor: Colors.grey[400],
          showSelectedLabels: false,
          showUnselectedLabels: false,
          type: BottomNavigationBarType.fixed,
          items: _navigationItems.map((item) => 
            BottomNavigationBarItem(
              icon: Icon(item['icon']),
              label: item['label'], // 필수 파라미터이지만 표시하지 않음
            )
          ).toList(),
          onTap: (index) {
            setState(() {
              _activeTab = _navigationItems[index]['id'];
            });
          },
        );
        
      case 'badge':
        return BottomNavigationBar(
          currentIndex: _navigationItems.indexWhere((item) => item['id'] == _activeTab),
          selectedItemColor: Color(0xFF268052),
          unselectedItemColor: Colors.grey,
          showUnselectedLabels: true,
          type: BottomNavigationBarType.fixed,
          items: _navigationItems.map((item) {
            final hasBadge = item.containsKey('badge') && item['badge'] != null;
            
            return BottomNavigationBarItem(
              icon: hasBadge 
                ? Badge(
                    label: Text(item['badge'].toString()),
                    backgroundColor: Colors.red,
                    child: Icon(item['icon']),
                  )
                : Icon(item['icon']),
              label: item['label'],
            );
          }).toList(),
          onTap: (index) {
            setState(() {
              _activeTab = _navigationItems[index]['id'];
            });
          },
        );
        
      default: // default
        return BottomNavigationBar(
          currentIndex: _navigationItems.indexWhere((item) => item['id'] == _activeTab),
          selectedItemColor: Color(0xFF268052),
          unselectedItemColor: Colors.grey,
          selectedLabelStyle: TextStyle(fontSize: 12),
          unselectedLabelStyle: TextStyle(fontSize: 12),
          type: BottomNavigationBarType.fixed,
          items: _navigationItems.map((item) => 
            BottomNavigationBarItem(
              icon: Icon(item['icon']),
              label: item['label'],
            )
          ).toList(),
          onTap: (index) {
            setState(() {
              _activeTab = _navigationItems[index]['id'];
            });
          },
        );
    }
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('하단 내비게이션 예시'),
        elevation: 0,
        actions: [
          PopupMenuButton<String>(
            onSelected: (String style) {
              setState(() {
                _style = style;
                // 스타일 변경 시 탭을 홈으로 초기화
                _activeTab = _style == 'shifting' ? 'home' : 'home';
              });
            },
            itemBuilder: (context) => [
              PopupMenuItem(
                value: 'default',
                child: Text('기본형'),
              ),
              PopupMenuItem(
                value: 'labeled',
                child: Text('라벨형'),
              ),
              PopupMenuItem(
                value: 'shifting',
                child: Text('시프팅형'),
              ),
              PopupMenuItem(
                value: 'icon-only',
                child: Text('아이콘 전용'),
              ),
              PopupMenuItem(
                value: 'badge',
                child: Text('배지형'),
              ),
            ],
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 16),
              child: Row(
                children: [
                  Text('스타일: $_style'),
                  Icon(Icons.arrow_drop_down)
                ],
              ),
            ),
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              _activeTab == 'home' ? Icons.home
                : _activeTab == 'search' ? Icons.search
                : _activeTab == 'favorites' ? Icons.favorite
                : _activeTab == 'profile' ? Icons.person
                : _activeTab == 'cart' ? Icons.shopping_bag
                : _activeTab == 'notifications' ? Icons.notifications
                : Icons.settings,
              size: 64,
              color: Color(0xFF268052),
            ),
            SizedBox(height: 16),
            Text(
              '현재 선택된 탭: $_activeTab',
              style: TextStyle(fontSize: 20),
            ),
            SizedBox(height: 8),
            Text(
              '현재 스타일: $_style',
              style: TextStyle(color: Colors.grey),
            ),
          ],
        ),
      ),
      bottomNavigationBar: _buildBottomNavigation(),
    );
  }
}`}
          />
        </div>
      </div>
    </SlideLayout>
  )
} 