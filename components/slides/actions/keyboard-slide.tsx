"use client"

import SlideLayout from "../slide-layout"
import { useState, useEffect } from "react"
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react"
import { PrismCode } from "@/components/ui/prism/PrismCode"

export default function KeyboardSlide() {
  const [activeKeys, setActiveKeys] = useState<string[]>([])
  const [lastKey, setLastKey] = useState<string>("")
  const [boxPosition, setBoxPosition] = useState({ x: 50, y: 50 })
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      setLastKey(key)
      
      if (!activeKeys.includes(key)) {
        setActiveKeys([...activeKeys, key])
      }
      
      // 화살표 키로 박스 이동
      if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
        e.preventDefault()
        setBoxPosition(prev => {
          let { x, y } = prev
          const step = 10
          
          switch (key) {
            case "arrowup": 
              y = Math.max(0, y - step)
              break
            case "arrowdown":
              y = Math.min(100, y + step)
              break
            case "arrowleft":
              x = Math.max(0, x - step)
              break
            case "arrowright":
              x = Math.min(100, x + step)
              break
          }
          
          return { x, y }
        })
      }
    }
    
    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()
      setActiveKeys(activeKeys.filter(k => k !== key))
    }
    
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [activeKeys])
  
  const isKeyActive = (key: string) => activeKeys.includes(key.toLowerCase())
  
  return (
    <SlideLayout title="Keyboard (키보드)">
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
          <h2 className="text-xl font-semibold mb-2">정의</h2>
          <p>
            키보드 상호작용은 물리적 또는 가상 키보드를 통해 애플리케이션과 소통하는 방식입니다.
            웹 및 데스크톱 환경에서는 주요 상호작용 방식이며, 모바일 환경에서도 텍스트 입력 및 특수 기능 사용 시 필수적입니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-slate-50 p-3 border-b">
              <h3 className="font-medium">키보드 이벤트 데모</h3>
              <p className="text-sm text-gray-600">아무 키나 눌러보세요</p>
            </div>
            
            <div className="p-4 bg-white">
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500">마지막으로 누른 키:</span>
                  <span className="font-mono font-medium bg-gray-100 px-2 py-1 rounded text-sm">
                    {lastKey || "-"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">현재 누르고 있는 키:</span>
                  <div className="font-mono font-medium">
                    {activeKeys.length > 0 ? (
                      <div className="flex gap-1">
                        {activeKeys.map(key => (
                          <span key={key} className="bg-[#268052] text-white px-2 py-1 rounded text-xs">
                            {key}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="bg-gray-100 px-2 py-1 rounded text-sm">-</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">키보드 게임</h4>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-4 h-32 relative">
                  <div 
                    className="absolute bg-[#268052] rounded-md w-10 h-10"
                    style={{
                      left: `${boxPosition.x}%`,
                      top: `${boxPosition.y}%`,
                      transform: 'translate(-50%, -50%)',
                      transition: 'all 0.1s ease-out'
                    }}
                  />
                  <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                    방향키로 상자를 움직여보세요
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">키보드 상태 시각화</h4>
                  <div className="grid grid-cols-3 text-center pb-6 w-40 mx-auto">
                    <div></div>
                    <div>
                      <div 
                        className={`w-10 h-10 border-2 ${isKeyActive("arrowup") ? 'bg-[#268052] text-white' : 'bg-white'} rounded-md flex items-center justify-center shadow-sm mx-auto`}
                      >
                        <ArrowUp size={18} />
                      </div>
                    </div>
                    <div></div>
                    
                    <div>
                      <div 
                        className={`w-10 h-10 border-2 ${isKeyActive("arrowleft") ? 'bg-[#268052] text-white' : 'bg-white'} rounded-md flex items-center justify-center shadow-sm mx-auto`}
                      >
                        <ArrowLeft size={18} />
                      </div>
                    </div>
                    <div>
                      <div 
                        className={`w-10 h-10 border-2 ${isKeyActive("arrowdown") ? 'bg-[#268052] text-white' : 'bg-white'} rounded-md flex items-center justify-center shadow-sm mx-auto`}
                      >
                        <ArrowDown size={18} />
                      </div>
                    </div>
                    <div>
                      <div 
                        className={`w-10 h-10 border-2 ${isKeyActive("arrowright") ? 'bg-[#268052] text-white' : 'bg-white'} rounded-md flex items-center justify-center shadow-sm mx-auto`}
                      >
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="bg-slate-50 p-3 border-b">
              <h3 className="font-medium">일반적인 키보드 단축키</h3>
            </div>
            
            <div className="p-4 bg-white">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Ctrl/Cmd + C</td>
                    <td className="py-2 text-gray-600">복사</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Ctrl/Cmd + V</td>
                    <td className="py-2 text-gray-600">붙여넣기</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Ctrl/Cmd + Z</td>
                    <td className="py-2 text-gray-600">실행 취소</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Ctrl/Cmd + S</td>
                    <td className="py-2 text-gray-600">저장</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Ctrl/Cmd + F</td>
                    <td className="py-2 text-gray-600">찾기</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Alt + Tab</td>
                    <td className="py-2 text-gray-600">앱 전환</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-2">Flutter에서의 키보드 이벤트 처리</h3>
          <PrismCode
            language="dart"
            code={`// 기본 키보드 이벤트 리스너
class KeyboardExample extends StatefulWidget {
  @override
  _KeyboardExampleState createState() => _KeyboardExampleState();
}

class _KeyboardExampleState extends State<KeyboardExample> {
  String _lastKey = "";
  Set<LogicalKeyboardKey> _pressedKeys = {};
  
  @override
  Widget build(BuildContext context) {
    return RawKeyboardListener(
      focusNode: FocusNode(),
      onKey: (RawKeyEvent event) {
        setState(() {
          if (event is RawKeyDownEvent) {
            _pressedKeys.add(event.logicalKey);
            _lastKey = event.logicalKey.debugName ?? "";
          } else if (event is RawKeyUpEvent) {
            _pressedKeys.remove(event.logicalKey);
          }
        });
      },
      autofocus: true,
      child: Container(
        color: Colors.white,
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('마지막으로 누른 키: $_lastKey'),
            SizedBox(height: 8),
            Text('현재 누르고 있는 키:'),
            Wrap(
              spacing: 4,
              children: _pressedKeys.map((key) => 
                Chip(
                  label: Text(key.debugName ?? ""),
                  backgroundColor: Colors.green,
                  labelStyle: TextStyle(color: Colors.white),
                )
              ).toList(),
            ),
          ],
        ),
      ),
    );
  }
}

// 방향키로 위치 이동하는 예제
class KeyboardMovementExample extends StatefulWidget {
  @override
  _KeyboardMovementExampleState createState() => _KeyboardMovementExampleState();
}

class _KeyboardMovementExampleState extends State<KeyboardMovementExample> {
  double x = 100;
  double y = 100;
  
  @override
  Widget build(BuildContext context) {
    return RawKeyboardListener(
      focusNode: FocusNode(),
      onKey: (RawKeyEvent event) {
        if (event is RawKeyDownEvent) {
          final key = event.logicalKey;
          final step = 10.0;
          
          setState(() {
            if (key == LogicalKeyboardKey.arrowUp) {
              y = max(0, y - step);
            } else if (key == LogicalKeyboardKey.arrowDown) {
              y = min(200, y + step);
            } else if (key == LogicalKeyboardKey.arrowLeft) {
              x = max(0, x - step);
            } else if (key == LogicalKeyboardKey.arrowRight) {
              x = min(300, x + step);
            }
          });
        }
      },
      autofocus: true,
      child: Container(
        width: 300,
        height: 200,
        color: Colors.grey.shade200,
        child: Stack(
          children: [
            Positioned(
              left: x,
              top: y,
              child: Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(
                  color: Colors.green,
                  borderRadius: BorderRadius.circular(4),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// 키보드 단축키 설정
class KeyboardShortcutExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Shortcuts(
      shortcuts: <LogicalKeySet, Intent>{
        LogicalKeySet(LogicalKeyboardKey.control, LogicalKeyboardKey.keyS): SaveIntent(),
        LogicalKeySet(LogicalKeyboardKey.control, LogicalKeyboardKey.keyC): CopyIntent(),
        LogicalKeySet(LogicalKeyboardKey.control, LogicalKeyboardKey.keyV): PasteIntent(),
      },
      child: Actions(
        actions: <Type, Action<Intent>>{
          SaveIntent: SaveAction(),
          CopyIntent: CopyAction(),
          PasteIntent: PasteAction(),
        },
        child: Focus(
          autofocus: true,
          child: Builder(
            builder: (context) => Center(
              child: Text(
                '이 영역에서 Ctrl+S, Ctrl+C, Ctrl+V 단축키를 사용해보세요',
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class SaveIntent extends Intent {}
class CopyIntent extends Intent {}
class PasteIntent extends Intent {}

class SaveAction extends Action<SaveIntent> {
  @override
  Object? invoke(SaveIntent intent) {
    print('저장 단축키가 눌렸습니다!');
    return null;
  }
}

class CopyAction extends Action<CopyIntent> {
  @override
  Object? invoke(CopyIntent intent) {
    print('복사 단축키가 눌렸습니다!');
    return null;
  }
}

class PasteAction extends Action<PasteIntent> {
  @override
  Object? invoke(PasteIntent intent) {
    print('붙여넣기 단축키가 눌렸습니다!');
    return null;
  }
}`}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">일반적인 키보드 상호작용</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>단축키:</strong> Ctrl+C (복사), Ctrl+V (붙여넣기) 등</li>
              <li><strong>내비게이션:</strong> Tab (다음 요소로), Shift+Tab (이전 요소로)</li>
              <li><strong>폼 전송:</strong> Enter 키</li>
              <li><strong>취소:</strong> Escape 키</li>
              <li><strong>방향키:</strong> 이동, 메뉴 항목 선택</li>
              <li><strong>페이지 이동:</strong> Page Up, Page Down</li>
              <li><strong>아이템 선택:</strong> Space, Enter</li>
            </ul>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-md">
            <h3 className="text-lg font-medium mb-2">접근성 고려사항</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>모든 기능은 키보드만으로도 이용 가능해야 함</li>
              <li>포커스 상태가 시각적으로 명확히 표시되어야 함</li>
              <li>논리적인 탭 순서 유지</li>
              <li>키보드 트랩 방지 (폼 내에 갇히지 않도록)</li>
              <li>단축키는 일관된 패턴 유지</li>
              <li>스크린 리더 호환성 보장</li>
              <li>키보드 안내 제공 (사용 가능한 단축키 목록 등)</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
} 