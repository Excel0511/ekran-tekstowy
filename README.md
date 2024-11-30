# Ekran Tekstowy
## Opis
Taka tam prosta aplikacja przeglądarkowa pozwalająca na wyświetlanie tekstu utworów na ekranie np. projektora. Pozwala ładować własne pliki tekstowe a następnie przesuwać tekst.
## Użytkowanie
### Poruszanie się po interfejsie
- Na pierwszym ekranie użyj przycisku ![Wybierz plik](https://github.com/user-attachments/assets/4bf44565-f864-45e6-ac11-3391676a50a1) aby załadować plik tekstowy z urządzenia.
- Użyj klawiszy `ArrowUp`, `ArrowDown` aby przesuwać tekst o jeden wiersz do dołu lub do góry oraz klawiszy `ArrowRight`, `ArrowwLeft` aby przesuwać tekst stronami (8 wierszy). Użyj `Escape` aby zamknąć otwarty tekst (czasem trzeba chwilę przytrzymać).
### Pisanie własnych tekstów do wyświetlania
- Zaleca się aby wiersze nie były zbyt długie
- Dopuszczalne są małe, wielkie litery, cyfry, nawiasy, kropki, przecinki, cudzysłów, myślniki i podkreślniki.
- Program wyświetla jednocześnie 8 linii tekstu (bierze je z pliku tekstowego więc przy dłuższych wierszach rzeczywista ilość wyświetlanych wierszy może być inna z powodu zawijania tekstu).
- Puste wiersze nie są interpretowane jako przerwa w wyświetlanym tekscie, służą one do "zapychania" tekstu w przypadku gdy chcemy podzielić do na strony według własnych upodobań a nie domyślnie po 8 wierszy
- Przykład:
```
Pan kiedyś stanął nad brzegiem
Szukał ludzi gotowych pójść za Nim
By łowić serca słów Bożych prawdą
O Panie, to Ty na mnie spojrzałeś
Twoje usta dziś wyrzekły me imię
Swoją barkę pozostawiam na brzegu
Razem z Tobą nowy zacznę dziś łów

Jestem ubogim człowiekiem
Moim skarbem są ręce gotowe
Do pracy z Tobą i czyste serce
O Panie, to Ty na mnie spojrzałeś
Twoje usta dziś wyrzekły me imię
Swoją barkę pozostawiam na brzegu
Razem z Tobą nowy zacznę dziś łów

```
Dzięki wstawieniu pustego wiersza na 8 i 16 linii zmusiliśmy program do wyświetlania tylko 7 linijek na stronę
## Zdjęcia

Interfejs wyświetlania tekstu:
![Interfejs wyświetlania tekstu](https://github.com/user-attachments/assets/760948e8-9191-4a8c-bf41-041b103643cf)
Przykład użycia:
![Przykład użycia](https://github.com/user-attachments/assets/a72c946d-be02-46ef-ba93-de09fb8d0cad)
