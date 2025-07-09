// main.js - 메인 초기화 및 이벤트 리스너

// 이벤트 리스너
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  
  // 자릿수 선택 이벤트
  document.querySelectorAll('.digit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectDigits(btn.dataset.digits);
    });
  });
  
  // 난이도 선택 이벤트
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectDifficulty(btn.dataset.difficulty);
    });
  });
  
  // 답안 입력 이벤트
  document.getElementById('answerInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && isRunning) {
      checkAnswer();
    }
  });
  
  // 모달 외부 클릭 시 닫기
  document.getElementById('helpModal').addEventListener('click', function(e) {
    if (e.target === this) {
      closeHelp();
    }
  });
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeHelp();
  }
});