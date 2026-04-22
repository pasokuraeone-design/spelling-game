import type { Word, Category } from '../types';

export const categories: Category[] = [
  { id: 'numbers', name: '数字' },
  { id: 'days', name: '曜日' },
  { id: 'months', name: '月' },
  { id: 'ordinals', name: '序数（1番目〜10番目）' },
  { id: 'irr-1', name: '不規則動詞①（原形 - 過去形）' },
  { id: 'irr-2', name: '不規則動詞②（原形 - 過去形）' },
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

  // Irregular Verbs 1 (原形 - 過去形)
  { id: 'irr-become', categoryId: 'irr-1', english: 'become became', japanese: '〜になる' },
  { id: 'irr-begin', categoryId: 'irr-1', english: 'begin began', japanese: '始める' },
  { id: 'irr-break', categoryId: 'irr-1', english: 'break broke', japanese: '壊す' },
  { id: 'irr-bring', categoryId: 'irr-1', english: 'bring brought', japanese: '持ってくる' },
  { id: 'irr-build', categoryId: 'irr-1', english: 'build built', japanese: '建てる' },
  { id: 'irr-buy', categoryId: 'irr-1', english: 'buy bought', japanese: '買う' },
  { id: 'irr-catch', categoryId: 'irr-1', english: 'catch caught', japanese: '捕まえる' },
  { id: 'irr-come', categoryId: 'irr-1', english: 'come came', japanese: '来る' },
  { id: 'irr-cut', categoryId: 'irr-1', english: 'cut cut', japanese: '切る' },
  { id: 'irr-do', categoryId: 'irr-1', english: 'do did', japanese: 'する' },
  { id: 'irr-draw', categoryId: 'irr-1', english: 'draw drew', japanese: '描く' },
  { id: 'irr-drink', categoryId: 'irr-1', english: 'drink drank', japanese: '飲む' },
  { id: 'irr-drive', categoryId: 'irr-1', english: 'drive drove', japanese: '運転する' },
  { id: 'irr-eat', categoryId: 'irr-1', english: 'eat ate', japanese: '食べる' },
  { id: 'irr-fall', categoryId: 'irr-1', english: 'fall fell', japanese: '落ちる' },
  { id: 'irr-feel', categoryId: 'irr-1', english: 'feel felt', japanese: '感じる' },
  { id: 'irr-find', categoryId: 'irr-1', english: 'find found', japanese: '見つける' },
  { id: 'irr-fly', categoryId: 'irr-1', english: 'fly flew', japanese: '飛ぶ' },
  { id: 'irr-forget', categoryId: 'irr-1', english: 'forget forgot', japanese: '忘れる' },
  { id: 'irr-get', categoryId: 'irr-1', english: 'get got', japanese: '手に入れる' },
  { id: 'irr-give', categoryId: 'irr-1', english: 'give gave', japanese: '与える' },
  { id: 'irr-go', categoryId: 'irr-1', english: 'go went', japanese: '行く' },
  { id: 'irr-grow', categoryId: 'irr-1', english: 'grow grew', japanese: '育てる・成長する' },
  { id: 'irr-have', categoryId: 'irr-1', english: 'have had', japanese: '持っている' },
  { id: 'irr-hear', categoryId: 'irr-1', english: 'hear heard', japanese: '聞く' },
  { id: 'irr-hit', categoryId: 'irr-1', english: 'hit hit', japanese: '打つ' },
  { id: 'irr-hurt', categoryId: 'irr-1', english: 'hurt hurt', japanese: '傷つける' },
  { id: 'irr-keep', categoryId: 'irr-1', english: 'keep kept', japanese: '保つ' },

  // Irregular Verbs 2 (原形 - 過去形)
  { id: 'irr-know', categoryId: 'irr-2', english: 'know knew', japanese: '知っている' },
  { id: 'irr-leave', categoryId: 'irr-2', english: 'leave left', japanese: '出発する・残す' },
  { id: 'irr-let', categoryId: 'irr-2', english: 'let let', japanese: 'させる' },
  { id: 'irr-lose', categoryId: 'irr-2', english: 'lose lost', japanese: '失う・負ける' },
  { id: 'irr-make', categoryId: 'irr-2', english: 'make made', japanese: '作る' },
  { id: 'irr-meet', categoryId: 'irr-2', english: 'meet met', japanese: '会う' },
  { id: 'irr-put', categoryId: 'irr-2', english: 'put put', japanese: '置く' },
  { id: 'irr-read', categoryId: 'irr-2', english: 'read read', japanese: '読む' },
  { id: 'irr-ride', categoryId: 'irr-2', english: 'ride rode', japanese: '乗る' },
  { id: 'irr-run', categoryId: 'irr-2', english: 'run ran', japanese: '走る' },
  { id: 'irr-say', categoryId: 'irr-2', english: 'say said', japanese: '言う' },
  { id: 'irr-see', categoryId: 'irr-2', english: 'see saw', japanese: '見る' },
  { id: 'irr-sell', categoryId: 'irr-2', english: 'sell sold', japanese: '売る' },
  { id: 'irr-send', categoryId: 'irr-2', english: 'send sent', japanese: '送る' },
  { id: 'irr-set', categoryId: 'irr-2', english: 'set set', japanese: 'セットする' },
  { id: 'irr-show', categoryId: 'irr-2', english: 'show showed', japanese: '見せる' },
  { id: 'irr-sing', categoryId: 'irr-2', english: 'sing sang', japanese: '歌う' },
  { id: 'irr-sleep', categoryId: 'irr-2', english: 'sleep slept', japanese: '眠る' },
  { id: 'irr-speak', categoryId: 'irr-2', english: 'speak spoke', japanese: '話す' },
  { id: 'irr-spend', categoryId: 'irr-2', english: 'spend spent', japanese: '過ごす・費やす' },
  { id: 'irr-stand', categoryId: 'irr-2', english: 'stand stood', japanese: '立つ' },
  { id: 'irr-swim', categoryId: 'irr-2', english: 'swim swam', japanese: '泳ぐ' },
  { id: 'irr-take', categoryId: 'irr-2', english: 'take took', japanese: '取る・連れて行く' },
  { id: 'irr-teach', categoryId: 'irr-2', english: 'teach taught', japanese: '教える' },
  { id: 'irr-tell', categoryId: 'irr-2', english: 'tell told', japanese: '伝える' },
  { id: 'irr-think', categoryId: 'irr-2', english: 'think thought', japanese: '考える' },
  { id: 'irr-understand', categoryId: 'irr-2', english: 'understand understood', japanese: '理解する' },
  { id: 'irr-wear', categoryId: 'irr-2', english: 'wear wore', japanese: '着る' },
  { id: 'irr-write', categoryId: 'irr-2', english: 'write wrote', japanese: '書く' },
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
