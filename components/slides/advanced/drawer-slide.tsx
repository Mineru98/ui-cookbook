"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { Menu, X, Home, Settings, User, HelpCircle, LogOut } from "lucide-react"
import { PrismCode } from "../../ui/prism/PrismCode"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DrawerSlide() {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false)
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState('home')
  const [drawerType, setDrawerType] = useState<'left' | 'right'>('left')
  
  const toggleLeftDrawer = () => {
    setIsLeftDrawerOpen(!isLeftDrawerOpen)
    if (isRightDrawerOpen) setIsRightDrawerOpen(false)
    setDrawerType('left')
  }
  
  const toggleRightDrawer = () => {
    setIsRightDrawerOpen(!isRightDrawerOpen)
    if (isLeftDrawerOpen) setIsLeftDrawerOpen(false)
    setDrawerType('right')
  }
  
  const menuItems = [
    { id: 'home', label: '홈', icon: Home },
    { id: 'profile', label: '프로필', icon: User },
    { id: 'settings', label: '설정', icon: Settings },
    { id: 'help', label: '도움말', icon: HelpCircle },
  ]

  const getDartCode = () => {
    if (drawerType === 'left') {
      return `import 'package:flutter/material.dart';

class NavigationDrawerExample extends StatefulWidget {
  const NavigationDrawerExample({Key? key}) : super(key: key);

  @override
  _NavigationDrawerExampleState createState() => _NavigationDrawerExampleState();
}

class _NavigationDrawerExampleState extends State<NavigationDrawerExample> {
  String _activeItem = 'home';
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        title: Text('앱 타이틀'),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black87,
        elevation: 1,
        leading: IconButton(
          icon: Icon(Icons.menu),
          onPressed: () {
            _scaffoldKey.currentState?.openDrawer();
          },
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.settings),
            onPressed: () {
              // 설정 기능
            },
          ),
        ],
      ),
      drawer: Drawer(
        child: Column(
          children: [
            DrawerHeader(
              decoration: BoxDecoration(
                color: Color(0xFF268052),
              ),
              child: Container(
                width: double.infinity,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    CircleAvatar(
                      backgroundColor: Colors.white,
                      child: Icon(Icons.person, color: Color(0xFF268052)),
                      radius: 30,
                    ),
                    SizedBox(height: 10),
                    Text(
                      '사용자 이름',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 16,
                      ),
                    ),
                    Text(
                      'user@example.com',
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.8),
                        fontSize: 12,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Expanded(
              child: ListView(
                padding: EdgeInsets.zero,
                children: [
                  _buildMenuItem(
                    icon: Icons.home,
                    title: '홈',
                    id: 'home',
                  ),
                  _buildMenuItem(
                    icon: Icons.person,
                    title: '프로필',
                    id: 'profile',
                  ),
                  _buildMenuItem(
                    icon: Icons.settings,
                    title: '설정',
                    id: 'settings',
                  ),
                  _buildMenuItem(
                    icon: Icons.help,
                    title: '도움말',
                    id: 'help',
                  ),
                  Divider(),
                  ListTile(
                    leading: Icon(Icons.logout, color: Colors.red),
                    title: Text('로그아웃', style: TextStyle(color: Colors.red)),
                    onTap: () {
                      // 로그아웃 처리
                      Navigator.pop(context);
                    },
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      body: Center(
        child: Text(
          '\$_activeItem 화면',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }

  Widget _buildMenuItem({
    required IconData icon,
    required String title,
    required String id,
  }) {
    final bool isSelected = _activeItem == id;
    
    return ListTile(
      leading: Icon(
        icon,
        color: isSelected ? Color(0xFF268052) : Colors.grey.shade700,
      ),
      title: Text(
        title,
        style: TextStyle(
          color: isSelected ? Color(0xFF268052) : Colors.black87,
        ),
      ),
      selected: isSelected,
      selectedTileColor: Color(0xFF268052).withOpacity(0.1),
      onTap: () {
        setState(() {
          _activeItem = id;
        });
        Navigator.pop(context); // 드로어 닫기
      },
    );
  }
}`;
    } else {
      return `import 'package:flutter/material.dart';

class SettingsDrawerExample extends StatefulWidget {
  const SettingsDrawerExample({Key? key}) : super(key: key);

  @override
  _SettingsDrawerExampleState createState() => _SettingsDrawerExampleState();
}

class _SettingsDrawerExampleState extends State<SettingsDrawerExample> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  bool _pushNotificationsEnabled = true;
  int _fontSize = 2;
  String _selectedTheme = 'light';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        title: Text('앱 타이틀'),
        backgroundColor: Colors.white,
        foregroundColor: Colors.black87,
        elevation: 1,
        leading: IconButton(
          icon: Icon(Icons.menu),
          onPressed: () {
            // 메뉴 기능
          },
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.settings),
            onPressed: () {
              _scaffoldKey.currentState?.openEndDrawer();
            },
          ),
        ],
      ),
      endDrawer: Drawer(
        child: Column(
          children: [
            Container(
              padding: EdgeInsets.symmetric(vertical: 16, horizontal: 16),
              decoration: BoxDecoration(
                border: Border(
                  bottom: BorderSide(color: Colors.grey.shade300),
                ),
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    '설정 패널',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                  IconButton(
                    icon: Icon(Icons.close),
                    onPressed: () {
                      Navigator.pop(context);
                    },
                  ),
                ],
              ),
            ),
            Expanded(
              child: ListView(
                padding: EdgeInsets.all(16),
                children: [
                  _buildSettingsSection(
                    title: '알림 설정',
                    children: [
                      SwitchListTile(
                        title: Text('푸시 알림'),
                        value: _pushNotificationsEnabled,
                        activeColor: Color(0xFF268052),
                        onChanged: (value) {
                          setState(() {
                            _pushNotificationsEnabled = value;
                          });
                        },
                      ),
                    ],
                  ),
                  SizedBox(height: 16),
                  _buildSettingsSection(
                    title: '테마',
                    children: [
                      Row(
                        children: [
                          _buildThemeOption('light', Colors.white, Icons.check),
                          SizedBox(width: 8),
                          _buildThemeOption('dark', Colors.black, Icons.check),
                          SizedBox(width: 8),
                          _buildThemeOption('green', Color(0xFF268052), Icons.check),
                        ],
                      ),
                    ],
                  ),
                  SizedBox(height: 16),
                  _buildSettingsSection(
                    title: '글꼴 크기',
                    children: [
                      Slider(
                        value: _fontSize.toDouble(),
                        min: 1,
                        max: 3,
                        divisions: 2,
                        activeColor: Color(0xFF268052),
                        onChanged: (value) {
                          setState(() {
                            _fontSize = value.toInt();
                          });
                        },
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text('작게', style: TextStyle(fontSize: 12)),
                          Text('보통', style: TextStyle(fontSize: 14)),
                          Text('크게', style: TextStyle(fontSize: 16)),
                        ],
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      body: Center(
        child: Text(
          '설정 버튼을 눌러 설정 패널을 열어보세요',
          style: TextStyle(fontSize: 16),
        ),
      ),
    );
  }

  Widget _buildSettingsSection({
    required String title,
    required List<Widget> children,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w500,
          ),
        ),
        SizedBox(height: 8),
        ...children,
      ],
    );
  }

  Widget _buildThemeOption(String themeId, Color color, IconData checkIcon) {
    final bool isSelected = _selectedTheme == themeId;
    
    return GestureDetector(
      onTap: () {
        setState(() {
          _selectedTheme = themeId;
        });
      },
      child: Container(
        width: 40,
        height: 40,
        decoration: BoxDecoration(
          color: color,
          shape: BoxShape.circle,
          border: Border.all(
            color: isSelected ? Color(0xFF268052) : Colors.grey.shade300,
            width: 2,
          ),
        ),
        child: isSelected
            ? Icon(
                checkIcon,
                color: color == Colors.white ? Colors.black : Colors.white,
                size: 20,
              )
            : null,
      ),
    );
  }
}`;
    }
  };
  
  return (
    <SlideLayout title="Drawer (드로어)">
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
                드로어(Drawer)는 화면 가장자리에서 슬라이딩하여 나타나는 패널로, 주로 내비게이션이나 
                추가 컨트롤을 위해 사용됩니다. 일반적으로 햄버거 메뉴 아이콘이나 슬라이드 제스처로 열고 닫을 수 있습니다.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">드로어 종류</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>측면 드로어(Side Drawer)</strong>
                    <p className="text-sm text-gray-600">화면 좌측 또는 우측에서 슬라이드, 주로 내비게이션에 사용</p>
                  </li>
                  <li>
                    <strong>바텀 드로어(Bottom Drawer)</strong>
                    <p className="text-sm text-gray-600">화면 아래에서 위로 슬라이드, 추가 옵션이나 컨텐츠에 사용</p>
                  </li>
                  <li>
                    <strong>상단 드로어(Top Drawer)</strong>
                    <p className="text-sm text-gray-600">화면 위에서 아래로 슬라이드, 알림이나 검색에 사용</p>
                  </li>
                  <li>
                    <strong>임시 드로어(Temporary Drawer)</strong>
                    <p className="text-sm text-gray-600">오버레이로 표시되고 외부 클릭으로 닫힘</p>
                  </li>
                  <li>
                    <strong>영구 드로어(Permanent Drawer)</strong>
                    <p className="text-sm text-gray-600">항상 화면에 표시되고 접히지 않음 (주로 데스크탑에서 사용)</p>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-md">
                <h3 className="text-lg font-medium mb-2">사용 패턴</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>모바일 내비게이션 메뉴</li>
                  <li>필터 및 정렬 옵션</li>
                  <li>설정 패널</li>
                  <li>사용자 프로필 드로어</li>
                  <li>추가 정보 및 상세 설명</li>
                  <li>미니 장바구니</li>
                  <li>알림 센터</li>
                  <li>레이어드 내비게이션</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
              <h3 className="text-lg font-medium mb-2 text-[#268052]">디자인 권장사항</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  <strong>명확한 계층 구조</strong>
                  <p className="text-sm">드로어는 메인 콘텐츠 위에 떠 있는 느낌을 주어야 함</p>
                </li>
                <li>
                  <strong>직관적인 제스처</strong>
                  <p className="text-sm">스와이프로 열고 닫을 수 있는 자연스러운 제스처 지원</p>
                </li>
                <li>
                  <strong>적절한 크기</strong>
                  <p className="text-sm">화면의 부분적인 영역을 차지하여 컨텍스트 유지</p>
                </li>
                <li>
                  <strong>명확한 닫기 방법</strong>
                  <p className="text-sm">닫기 버튼, 외부 영역 탭, 백 스와이프 등 다양한 닫기 옵션 제공</p>
                </li>
                <li>
                  <strong>상태 변화 표시</strong>
                  <p className="text-sm">열리고 닫힐 때 부드러운 애니메이션으로 상태 변화 표시</p>
                </li>
                <li>
                  <strong>내용 구성</strong>
                  <p className="text-sm">중요도에 따라 내용을 구성하고 스크롤이 필요한 경우 분명한 스크롤 표시</p>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <div className="overflow-x-auto rounded-lg">
                <PrismCode code={getDartCode()} language="dart" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="demo" className="mt-4">
            <div className="mb-8">
              <div className="flex justify-between mb-4 gap-4">
                <button
                  onClick={toggleLeftDrawer}
                  className="flex items-center gap-2 px-4 py-2 bg-[#268052] text-white rounded-lg hover:bg-[#268052]/90"
                >
                  <Menu className="w-5 h-5" />
                  왼쪽 드로어 열기
                </button>
                
                <button
                  onClick={toggleRightDrawer}
                  className="flex items-center gap-2 px-4 py-2 bg-[#268052] text-white rounded-lg hover:bg-[#268052]/90"
                >
                  설정 패널 열기
                  <Menu className="w-5 h-5" />
                </button>
              </div>
              
              <div className="relative bg-gray-100 h-80 rounded-lg overflow-hidden shadow-md">
                {/* 왼쪽 드로어 */}
                <div 
                  className={`absolute top-0 left-0 bottom-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    isLeftDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                  } z-10`}
                >
                  <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="font-medium">내비게이션</h3>
                    <button 
                      onClick={toggleLeftDrawer}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  
                  <nav className="p-2">
                    <ul className="space-y-1">
                      {menuItems.map(item => (
                        <li key={item.id}>
                          <button
                            onClick={() => setActiveMenuItem(item.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left ${
                              activeMenuItem === item.id 
                                ? 'bg-[#268052]/10 text-[#268052]' 
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span>{item.label}</span>
                          </button>
                        </li>
                      ))}
                      
                      <li className="mt-6">
                        <button
                          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left text-red-500 hover:bg-red-50"
                        >
                          <LogOut className="w-5 h-5" />
                          <span>로그아웃</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
                
                {/* 오른쪽 드로어 */}
                <div 
                  className={`absolute top-0 right-0 bottom-0 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                    isRightDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                  } z-10`}
                >
                  <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="font-medium">설정 패널</h3>
                    <button 
                      onClick={toggleRightDrawer}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium block mb-1">알림 설정</label>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">푸시 알림</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#268052]"></div>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium block mb-1">테마</label>
                        <div className="flex gap-2">
                          <button className="w-8 h-8 bg-white border rounded-full"></button>
                          <button className="w-8 h-8 bg-gray-900 border rounded-full"></button>
                          <button className="w-8 h-8 bg-[#268052] border rounded-full"></button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium block mb-1">글꼴 크기</label>
                        <input
                          type="range"
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#268052]"
                          min="1"
                          max="3"
                          step="1"
                          defaultValue="2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 메인 콘텐츠 */}
                <div className="p-4 h-full">
                  <header className="flex justify-between items-center mb-6">
                    <button 
                      onClick={toggleLeftDrawer}
                      className="p-2 rounded-md hover:bg-gray-200"
                    >
                      <Menu className="w-5 h-5" />
                    </button>
                    
                    <h2 className="font-semibold">앱 타이틀</h2>
                    
                    <button 
                      onClick={toggleRightDrawer}
                      className="p-2 rounded-md hover:bg-gray-200"
                    >
                      <Settings className="w-5 h-5" />
                    </button>
                  </header>
                  
                  <div className="p-4 text-center">
                    <p>메뉴(햄버거) 아이콘이나 설정 아이콘을 클릭하여<br/>드로어를 열어보세요.</p>
                    <p className="text-gray-500 mt-2 text-sm">좌우에서 드로어가 슬라이드됩니다</p>
                    
                    <div className="mt-8">
                      <p className="font-medium">활성 메뉴 항목:</p>
                      <p className="text-[#268052] mt-1">
                        {menuItems.find(item => item.id === activeMenuItem)?.label || '없음'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 드로어 오버레이 */}
                {(isLeftDrawerOpen || isRightDrawerOpen) && (
                  <div 
                    className="absolute inset-0 bg-black/20 z-0"
                    onClick={() => {
                      setIsLeftDrawerOpen(false)
                      setIsRightDrawerOpen(false)
                    }}
                  ></div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
} 