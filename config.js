// config.js - 설정 및 전역 변수

// 전역 변수
let currentProblem = null;
let currentAnswer = null;
let practiceTimer = null;
let countdownTimer = null;
let isRunning = false;
let selectedDigits = 2;
let selectedDifficulty = 'normal';
let currentStreak = 0;

// 통계 변수
let stats = {
  total: 0,
  correct: 0,
  totalTime: 0,
  responses: []
};

// 난이도별 숫자 범위 설정
function getNumberRange(digits, difficulty) {
  const baseMin = Math.pow(10, digits - 1);      // 예: 100
  const baseMax = Math.pow(10, digits) - 1;      // 예: 999
  const rangeSize = baseMax - baseMin + 1;

  switch (difficulty) {
    case 'easy':
      // 자리수는 맞지만, 최소값 근처 작은 숫자
      return {
        min: baseMin,
        max: baseMin + Math.floor(rangeSize * 0.1) // 상위 10% 이내
      };
    case 'normal':
      // 중간대
      const midStart = baseMin + Math.floor(rangeSize * 0.4);
      return {
        min: midStart,
        max: midStart + Math.floor(rangeSize * 0.2)
      };
    case 'hard':
      // 높은 숫자대
      const highStart = baseMin + Math.floor(rangeSize * 0.8);
      return {
        min: highStart,
        max: baseMax
      };
    case 'expert':
    default:
      // 전체 범위
      return {
        min: baseMin,
        max: baseMax
      };
  }
}