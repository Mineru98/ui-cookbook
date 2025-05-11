"use client"

import SlideLayout from "../slide-layout"
import { useState } from "react"
import { Check, ChevronRight, MoreVertical } from "lucide-react"
import { PrismCode } from "../../ui/prism/PrismCode"

interface ListItem {
  id: number
  title: string
  description: string
  status: "completed" | "in-progress" | "pending"
  priority: "high" | "medium" | "low"
}

export default function ListViewSlide() {
  const [items, setItems] = useState<ListItem[]>([
    { 
      id: 1, 
      title: "UI 디자인 초안 완성", 
      description: "모바일 앱 메인 화면 UI 디자인 초안 완료",
      status: "completed",
      priority: "high"
    },
    { 
      id: 2, 
      title: "컴포넌트 라이브러리 구축", 
      description: "재사용 가능한 UI 컴포넌트 세트 개발",
      status: "in-progress",
      priority: "medium"
    },
    { 
      id: 3, 
      title: "사용자 테스트 진행", 
      description: "프로토타입에 대한 사용자 피드백 수집",
      status: "pending",
      priority: "high"
    },
    { 
      id: 4, 
      title: "접근성 검토", 
      description: "WCAG 가이드라인에 따른 접근성 검토",
      status: "pending",
      priority: "medium"
    },
    { 
      id: 5, 
      title: "디자인 가이드 문서화", 
      description: "UI 스타일 가이드 및 사용 방법 문서화",
      status: "in-progress",
      priority: "low"
    },
  ])
  
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [viewType, setViewType] = useState<"default" | "compact" | "detailed">("default")
  
  const toggleItemStatus = (id: number) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === id) {
        const newStatus = 
          item.status === "pending" ? "in-progress" : 
          item.status === "in-progress" ? "completed" : 
          "pending"
        
        return { ...item, status: newStatus }
      }
      return item
    }))
  }
  
  // 상태에 따른 스타일 클래스
  const getStatusClass = (status: string) => {
    switch(status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }
  
  // 우선순위에 따른 스타일 클래스
  const getPriorityClass = (priority: string) => {
    switch(priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-orange-100 text-orange-800"
      case "low":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }
  
  const renderListItems = () => {
    return items.map(item => (
      <div 
        key={item.id}
        className={`border rounded-md mb-2 overflow-hidden transition-all ${selectedItem === item.id ? 'ring-2 ring-[#268052]' : ''}`}
        onClick={() => setSelectedItem(item.id === selectedItem ? null : item.id)}
      >
        <div className={`p-4 ${viewType === "compact" ? 'py-2' : ''} flex items-center`}>
          <div 
            className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 cursor-pointer ${item.status === "completed" ? 'bg-[#268052]' : 'border border-gray-300'}`}
            onClick={(e) => {
              e.stopPropagation();
              toggleItemStatus(item.id);
            }}
          >
            {item.status === "completed" && <Check className="w-4 h-4 text-white" />}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className={`font-medium ${item.status === "completed" ? 'line-through text-gray-500' : ''}`}>
                {item.title}
              </h4>
              
              <span className={`text-xs px-2 py-0.5 rounded ${getPriorityClass(item.priority)}`}>
                {item.priority}
              </span>
            </div>
            
            {viewType !== "compact" && (
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            )}
            
            {viewType === "detailed" && (
              <div className="mt-2 flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded ${getStatusClass(item.status)}`}>
                  {item.status.replace('-', ' ')}
                </span>
                <span className="text-xs text-gray-500">ID: ${item.id}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    ))
  }
  
  return (
    <SlideLayout title="List View (리스트 뷰)">
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
            리스트 뷰는 항목을 세로로 나열하는 UI 패턴으로, 주로 텍스트와 간단한 컨트롤로 구성됩니다.
            사용자가 여러 항목을 탐색하고 선택하며 작업할 수 있는 효율적인 방법을 제공합니다.
          </p>
        </div>
        
        <div className="flex gap-4 mb-3">
          <button
            className={`px-3 py-1.5 rounded text-sm ${viewType === "default" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
            onClick={() => setViewType("default")}
          >
            기본 보기
          </button>
          <button
            className={`px-3 py-1.5 rounded text-sm ${viewType === "compact" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
            onClick={() => setViewType("compact")}
          >
            간결한 보기
          </button>
          <button
            className={`px-3 py-1.5 rounded text-sm ${viewType === "detailed" ? 'bg-[#268052] text-white' : 'bg-gray-100'}`}
            onClick={() => setViewType("detailed")}
          >
            상세 보기
          </button>
        </div>
        
        <div className="border rounded-lg p-4 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">업무 목록</h3>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="overflow-y-auto max-h-64">
            {renderListItems()}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">리스트 뷰 유형</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>기본 리스트</strong>
                <p className="text-sm text-gray-600">단순한 텍스트 항목으로 구성된 리스트</p>
              </li>
              <li>
                <strong>체크리스트</strong>
                <p className="text-sm text-gray-600">체크박스가 포함된 선택 가능한 항목 리스트</p>
              </li>
              <li>
                <strong>설명 리스트</strong>
                <p className="text-sm text-gray-600">제목과 부가 설명이 있는 항목 리스트</p>
              </li>
              <li>
                <strong>아이콘 리스트</strong>
                <p className="text-sm text-gray-600">항목별로 아이콘이 표시되는 리스트</p>
              </li>
              <li>
                <strong>드래그 앤 드롭 리스트</strong>
                <p className="text-sm text-gray-600">순서를 변경할 수 있는 인터랙티브 리스트</p>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">사용 사례</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>설정 메뉴</li>
              <li>연락처 목록</li>
              <li>알림 센터</li>
              <li>이메일 인박스</li>
              <li>할 일 목록</li>
              <li>검색 결과</li>
              <li>히스토리/타임라인</li>
              <li>댓글/피드백 목록</li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">구현 고려사항</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>대량의 데이터를 효율적으로 처리하기 위한 가상화(virtualization) 적용</li>
            <li>항목 선택, 멀티 선택, 컨텍스트 메뉴 등의 상호작용 지원</li>
            <li>검색, 필터링, 정렬 기능 제공</li>
            <li>다양한 상태(로딩, 비어있음, 오류 등)에 대한 처리</li>
            <li>스크롤 위치 저장 및 무한 스크롤 기능 고려</li>
          </ul>
        </div>
        
        <div className="p-4 border border-[#268052]/20 bg-[#268052]/5 rounded-md mt-6">
          <h3 className="text-lg font-medium mb-2 text-[#268052]">Flutter 구현 코드</h3>
          <PrismCode
            language="dart"
            code={`// 기본 리스트 뷰 예시
class TaskListView extends StatefulWidget {
  @override
  _TaskListViewState createState() => _TaskListViewState();
}

class _TaskListViewState extends State<TaskListView> {
  // 할 일 아이템 데이터
  final List<Map<String, dynamic>> _items = [
    {
      'id': 1,
      'title': 'UI 디자인 초안 완성',
      'description': '모바일 앱 메인 화면 UI 디자인 초안 완료',
      'status': 'completed',
      'priority': 'high',
    },
    {
      'id': 2,
      'title': '컴포넌트 라이브러리 구축',
      'description': '재사용 가능한 UI 컴포넌트 세트 개발',
      'status': 'in-progress',
      'priority': 'medium',
    },
    {
      'id': 3,
      'title': '사용자 테스트 진행',
      'description': '프로토타입에 대한 사용자 피드백 수집',
      'status': 'pending',
      'priority': 'high',
    },
  ];

  // 선택된 아이템 ID
  int? _selectedItemId;
  
  // 뷰 타입 (기본, 간결, 상세)
  String _viewType = 'default';

  // 항목 상태 토글 메서드
  void _toggleItemStatus(int id) {
    setState(() {
      final index = _items.indexWhere((item) => item['id'] == id);
      if (index != -1) {
        final currentStatus = _items[index]['status'];
        if (currentStatus == 'pending') {
          _items[index]['status'] = 'in-progress';
        } else if (currentStatus == 'in-progress') {
          _items[index]['status'] = 'completed';
        } else {
          _items[index]['status'] = 'pending';
        }
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('업무 목록'),
        actions: [
          PopupMenuButton<String>(
            onSelected: (value) {
              setState(() {
                _viewType = value;
              });
            },
            itemBuilder: (context) => [
              PopupMenuItem(
                value: 'default',
                child: Text('기본 보기'),
              ),
              PopupMenuItem(
                value: 'compact',
                child: Text('간결한 보기'),
              ),
              PopupMenuItem(
                value: 'detailed',
                child: Text('상세 보기'),
              ),
            ],
          ),
        ],
      ),
      body: ListView.builder(
        itemCount: _items.length,
        itemBuilder: (context, index) {
          final item = _items[index];
          final isSelected = _selectedItemId == item['id'];
          
          // 상태에 따른 색상 정의
          Color getStatusColor(String status) {
            switch (status) {
              case 'completed':
                return Colors.green;
              case 'in-progress':
                return Colors.blue;
              case 'pending':
                return Colors.grey;
              default:
                return Colors.grey;
            }
          }

          // 우선순위에 따른 색상 정의
          Color getPriorityColor(String priority) {
            switch (priority) {
              case 'high':
                return Colors.red;
              case 'medium':
                return Colors.orange;
              case 'low':
                return Colors.yellow;
              default:
                return Colors.grey;
            }
          }
          
          return Card(
            margin: EdgeInsets.symmetric(vertical: 4, horizontal: 8),
            elevation: 1,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8),
              side: isSelected
                  ? BorderSide(color: Color(0xFF268052), width: 2)
                  : BorderSide.none,
            ),
            child: InkWell(
              onTap: () {
                setState(() {
                  _selectedItemId = isSelected ? null : item['id'];
                });
              },
              child: Padding(
                padding: EdgeInsets.all(_viewType == 'compact' ? 8.0 : 16.0),
                child: Row(
                  children: [
                    // 체크 버튼
                    GestureDetector(
                      onTap: () => _toggleItemStatus(item['id']),
                      child: Container(
                        width: 24,
                        height: 24,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: item['status'] == 'completed'
                              ? Color(0xFF268052)
                              : Colors.transparent,
                          border: Border.all(
                            color: item['status'] == 'completed'
                                ? Color(0xFF268052)
                                : Colors.grey.shade300,
                            width: 2,
                          ),
                        ),
                        child: item['status'] == 'completed'
                            ? Icon(Icons.check, size: 16, color: Colors.white)
                            : null,
                      ),
                    ),
                    SizedBox(width: 12),
                    
                    // 항목 내용
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Expanded(
                                child: Text(
                                  item['title'],
                                  style: TextStyle(
                                    fontWeight: FontWeight.w500,
                                    decoration: item['status'] == 'completed'
                                        ? TextDecoration.lineThrough
                                        : null,
                                    color: item['status'] == 'completed'
                                        ? Colors.grey
                                        : Colors.black,
                                  ),
                                ),
                              ),
                              Container(
                                padding: EdgeInsets.symmetric(
                                  horizontal: 8,
                                  vertical: 2,
                                ),
                                decoration: BoxDecoration(
                                  color: getPriorityColor(item['priority']).withOpacity(0.1),
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: Text(
                                  item['priority'],
                                  style: TextStyle(
                                    fontSize: 12,
                                    color: getPriorityColor(item['priority']).shade800,
                                  ),
                                ),
                              ),
                            ],
                          ),
                          
                          if (_viewType != 'compact') ...[
                            SizedBox(height: 4),
                            Text(
                              item['description'],
                              style: TextStyle(
                                fontSize: 14,
                                color: Colors.grey.shade600,
                              ),
                            ),
                          ],
                          
                          if (_viewType == 'detailed') ...[
                            SizedBox(height: 8),
                            Row(
                              children: [
                                Container(
                                  padding: EdgeInsets.symmetric(
                                    horizontal: 8,
                                    vertical: 2,
                                  ),
                                  decoration: BoxDecoration(
                                    color: getStatusColor(item['status']).withOpacity(0.1),
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                  child: Text(
                                    item['status'].replaceAll('-', ' '),
                                    style: TextStyle(
                                      fontSize: 12,
                                      color: getStatusColor(item['status']).shade800,
                                    ),
                                  ),
                                ),
                                SizedBox(width: 8),
                                Text(
                                  "ID: \${item['id']}",
                                  style: TextStyle(
                                    fontSize: 12,
                                    color: Colors.grey.shade500,
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ],
                      ),
                    ),
                    
                    Icon(Icons.chevron_right, color: Colors.grey.shade400),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}`}
          />
        </div>
      </div>
    </SlideLayout>
  )
} 