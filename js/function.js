// Функция для проверки длины строки
function useStringLength(string, length) {
    string.replaceAll(' ', '').length <= length;
  };


// Функция для проверки Палиндрома c пробелами и без
function usePalindrome(string) {
    string = string.toLowerCase().replaceAll(' ', '');
    return string === string.split('').reverse().join('');
  };
