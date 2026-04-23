import type { Word, Category } from '../types';

export const categories: Category[] = [
  { id: 'numbers', name: '数字' },
  { id: 'days', name: '曜日' },
  { id: 'months', name: '月' },
  { id: 'ordinals', name: '序数（1番目〜10番目）' },
  { id: 'irr-1', name: '不規則動詞①（1〜20）' },
  { id: 'irr-2', name: '不規則動詞②（21〜40）' },
  { id: 'irr-3', name: '不規則動詞③（41〜61）' },
];

export const wordList: Word[] = [
  // Numbers
  { id: 'num-1', categoryId: 'numbers', english: 'one', japanese: '１（いち）' },
  { id: 'num-2', categoryId: 'numbers', english: 'two', japanese: '２（に）' },
  { id: 'num-3', categoryId: 'numbers', english: 'three', japanese: '３（さん）' },
  { id: 'num-4', categoryId: 'numbers', english: 'four', japanese: '４（よん）' },
  { id: 'num-5', categoryId: 'numbers', english: 'five', japanese: '５（ご）' },
  { id: 'num-6', categoryId: 'numbers', english: 'six', japanese: '６（ろく）' },
  { id: 'num-7', categoryId: 'numbers', english: 'seven', japanese: '７（なな）' },
  { id: 'num-8', categoryId: 'numbers', english: 'eight', japanese: '８（はち）' },
  { id: 'num-9', categoryId: 'numbers', english: 'nine', japanese: '９（きゅう）' },
  { id: 'num-10', categoryId: 'numbers', english: 'ten', japanese: '１０（じゅう）' },
  { id: 'num-11', categoryId: 'numbers', english: 'eleven', japanese: '１１（じゅういち）' },
  { id: 'num-12', categoryId: 'numbers', english: 'twelve', japanese: '１２（じゅうに）' },
  { id: 'num-13', categoryId: 'numbers', english: 'thirteen', japanese: '１３（じゅうさん）' },
  { id: 'num-20', categoryId: 'numbers', english: 'twenty', japanese: '２０（にじゅう）' },
  { id: 'num-100', categoryId: 'numbers', english: 'one hundred', japanese: '１００（ひゃく）' },
  { id: 'num-1000', categoryId: 'numbers', english: 'one thousand', japanese: '１０００（せん）' },

  // Days
  { id: 'day-sun', categoryId: 'days', english: 'Sunday', japanese: '日曜日' },
  { id: 'day-mon', categoryId: 'days', english: 'Monday', japanese: '月曜日' },
  { id: 'day-tue', categoryId: 'days', english: 'Tuesday', japanese: '火曜日' },
  { id: 'day-wed', categoryId: 'days', english: 'Wednesday', japanese: '水曜日' },
  { id: 'day-thu', categoryId: 'days', english: 'Thursday', japanese: '木曜日' },
  { id: 'day-fri', categoryId: 'days', english: 'Friday', japanese: '金曜日' },
  { id: 'day-sat', categoryId: 'days', english: 'Saturday', japanese: '土曜日' },

  // Months
  { id: 'mon-1', categoryId: 'months', english: 'January', japanese: '１月' },
  { id: 'mon-2', categoryId: 'months', english: 'February', japanese: '２月' },
  { id: 'mon-3', categoryId: 'months', english: 'March', japanese: '３月' },
  { id: 'mon-4', categoryId: 'months', english: 'April', japanese: '４月' },
  { id: 'mon-5', categoryId: 'months', english: 'May', japanese: '５月' },
  { id: 'mon-6', categoryId: 'months', english: 'June', japanese: '６月' },
  { id: 'mon-7', categoryId: 'months', english: 'July', japanese: '７月' },
  { id: 'mon-8', categoryId: 'months', english: 'August', japanese: '８月' },
  { id: 'mon-9', categoryId: 'months', english: 'September', japanese: '９月' },
  { id: 'mon-10', categoryId: 'months', english: 'October', japanese: '１０月' },
  { id: 'mon-11', categoryId: 'months', english: 'November', japanese: '１１月' },
  { id: 'mon-12', categoryId: 'months', english: 'December', japanese: '１２月' },

  // Ordinals (1st-10th)
  { id: 'ord-1', categoryId: 'ordinals', english: 'first', japanese: '１番目（1st）' },
  { id: 'ord-2', categoryId: 'ordinals', english: 'second', japanese: '２番目（2nd）' },
  { id: 'ord-3', categoryId: 'ordinals', english: 'third', japanese: '３番目（3rd）' },
  { id: 'ord-4', categoryId: 'ordinals', english: 'fourth', japanese: '４番目（4th）' },
  { id: 'ord-5', categoryId: 'ordinals', english: 'fifth', japanese: '５番目（5th）' },
  { id: 'ord-6', categoryId: 'ordinals', english: 'sixth', japanese: '６番目（6th）' },
  { id: 'ord-7', categoryId: 'ordinals', english: 'seventh', japanese: '７番目（7th）' },
  { id: 'ord-8', categoryId: 'ordinals', english: 'eighth', japanese: '８番目（8th）' },
  { id: 'ord-9', categoryId: 'ordinals', english: 'ninth', japanese: '９番目（9th）' },
  { id: 'ord-10', categoryId: 'ordinals', english: 'tenth', japanese: '１０番目（10th）' },

  // Irregular Verbs 1 (1-20)
  { id: 'irr-1', categoryId: 'irr-1', english: 'bring brought', japanese: '持ってくる' },
  { id: 'irr-2', categoryId: 'irr-1', english: 'buy bought', japanese: '買う' },
  { id: 'irr-3', categoryId: 'irr-1', english: 'think thought', japanese: '思う' },
  { id: 'irr-4', categoryId: 'irr-1', english: 'catch caught', japanese: 'つかまえる' },
  { id: 'irr-5', categoryId: 'irr-1', english: 'teach taught', japanese: '教える' },
  { id: 'irr-6', categoryId: 'irr-1', english: 'stand stood', japanese: '立つ' },
  { id: 'irr-7', categoryId: 'irr-1', english: 'understand understood', japanese: '理解する' },
  { id: 'irr-8', categoryId: 'irr-1', english: 'get got', japanese: '得る' },
  { id: 'irr-9', categoryId: 'irr-1', english: 'forget forgot', japanese: '忘れる' },
  { id: 'irr-10', categoryId: 'irr-1', english: 'sell sold', japanese: '売る' },
  { id: 'irr-11', categoryId: 'irr-1', english: 'tell told', japanese: '話す，教える' },
  { id: 'irr-12', categoryId: 'irr-1', english: 'feel felt', japanese: '感じる' },
  { id: 'irr-13', categoryId: 'irr-1', english: 'keep kept', japanese: '保つ' },
  { id: 'irr-14', categoryId: 'irr-1', english: 'sleep slept', japanese: '眠る' },
  { id: 'irr-15', categoryId: 'irr-1', english: 'build built', japanese: '建てる' },
  { id: 'irr-16', categoryId: 'irr-1', english: 'send sent', japanese: '送る' },
  { id: 'irr-17', categoryId: 'irr-1', english: 'spend spent', japanese: '過ごす，費やす' },
  { id: 'irr-18', categoryId: 'irr-1', english: 'lose lost', japanese: '失う' },
  { id: 'irr-19', categoryId: 'irr-1', english: 'leave left', japanese: '出発する' },
  { id: 'irr-20', categoryId: 'irr-1', english: 'hear heard', japanese: '聞く' },

  // Irregular Verbs 2 (21-40)
  { id: 'irr-21', categoryId: 'irr-2', english: 'meet met', japanese: '会う' },
  { id: 'irr-22', categoryId: 'irr-2', english: 'have had', japanese: '持っている' },
  { id: 'irr-23', categoryId: 'irr-2', english: 'make made', japanese: '作る' },
  { id: 'irr-24', categoryId: 'irr-2', english: 'read read', japanese: '読む' },
  { id: 'irr-25', categoryId: 'irr-2', english: 'find found', japanese: '見つける' },
  { id: 'irr-26', categoryId: 'irr-2', english: 'say said', japanese: '言う' },
  { id: 'irr-27', categoryId: 'irr-2', english: 'sit sat', japanese: 'すわる' },
  { id: 'irr-28', categoryId: 'irr-2', english: 'hold held', japanese: '開く，催す' },
  { id: 'irr-29', categoryId: 'irr-2', english: 'win won', japanese: '勝つ' },
  { id: 'irr-30', categoryId: 'irr-2', english: 'fight fought', japanese: 'たたかう' },
  { id: 'irr-31', categoryId: 'irr-2', english: 'mean meant', japanese: '意味する' },
  { id: 'irr-32', categoryId: 'irr-2', english: 'come came', japanese: '来る' },
  { id: 'irr-33', categoryId: 'irr-2', english: 'become became', japanese: '～になる' },
  { id: 'irr-34', categoryId: 'irr-2', english: 'run ran', japanese: '走る' },
  { id: 'irr-35', categoryId: 'irr-2', english: 'cut cut', japanese: '切る' },
  { id: 'irr-36', categoryId: 'irr-2', english: 'put put', japanese: '置く' },
  { id: 'irr-37', categoryId: 'irr-2', english: 'let let', japanese: 'させる' },
  { id: 'irr-38', categoryId: 'irr-2', english: 'am was', japanese: '～である・いる（be動詞）' },
  { id: 'irr-39', categoryId: 'irr-2', english: 'is was', japanese: '～である・いる（be動詞）' },
  { id: 'irr-40', categoryId: 'irr-2', english: 'are were', japanese: '～である・いる（be動詞）' },

  // Irregular Verbs 3 (41-61)
  { id: 'irr-41', categoryId: 'irr-3', english: 'do did', japanese: 'する' },
  { id: 'irr-42', categoryId: 'irr-3', english: 'go went', japanese: '行く' },
  { id: 'irr-43', categoryId: 'irr-3', english: 'eat ate', japanese: '食べる' },
  { id: 'irr-44', categoryId: 'irr-3', english: 'see saw', japanese: '見える' },
  { id: 'irr-45', categoryId: 'irr-3', english: 'take took', japanese: '［写真を］とる，つれていく' },
  { id: 'irr-46', categoryId: 'irr-3', english: 'break broke', japanese: '壊す' },
  { id: 'irr-47', categoryId: 'irr-3', english: 'draw drew', japanese: '［絵］を描く' },
  { id: 'irr-48', categoryId: 'irr-3', english: 'ride rode', japanese: '乗る' },
  { id: 'irr-49', categoryId: 'irr-3', english: 'speak spoke', japanese: '話す' },
  { id: 'irr-50', categoryId: 'irr-3', english: 'write wrote', japanese: '書く' },
  { id: 'irr-51', categoryId: 'irr-3', english: 'fall fell', japanese: '落ちる' },
  { id: 'irr-52', categoryId: 'irr-3', english: 'fly flew', japanese: '飛ぶ' },
  { id: 'irr-53', categoryId: 'irr-3', english: 'grow grew', japanese: '成長する' },
  { id: 'irr-54', categoryId: 'irr-3', english: 'begin began', japanese: '始める' },
  { id: 'irr-55', categoryId: 'irr-3', english: 'know knew', japanese: '知っている' },
  { id: 'irr-56', categoryId: 'irr-3', english: 'drink drank', japanese: '飲む' },
  { id: 'irr-57', categoryId: 'irr-3', english: 'choose chose', japanese: '選ぶ' },
  { id: 'irr-58', categoryId: 'irr-3', english: 'give gave', japanese: '与える' },
  { id: 'irr-59', categoryId: 'irr-3', english: 'sing sang', japanese: '歌う' },
  { id: 'irr-60', categoryId: 'irr-3', english: 'swim swam', japanese: '泳ぐ' },
  { id: 'irr-61', categoryId: 'irr-3', english: 'wear wore', japanese: '着ている' },
];

// Utility: 配列をシャッフルする
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
