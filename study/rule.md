## 자바스크립트 소스를 작성할 때 지켜야 할 규칙


### 규칙 1
대소문자를 구별하여 소스 작성
<pre>
sum, Sum, SUM 다 다르게 인식
</pre>

### 규칙 2
읽기 쉽게 들여쓰기
<pre>
들여쓰는 습관 들이기
</pre>

### 규칙 3
세미콜론으로 문장 구분
<pre>
; 붙이지 않아도 실행은 되지만 줄바꿈을 제대로 하지 않으면 오류 발생한다.
그냥 붙이자!
</pre>

### 규칙 4
메모는 주석 사용
<pre>
한 줄 주석 : //
여러 줄 주석 : /* */
</pre>
    
### 규칙 5
정해진 식별자 규칙 지켜서 작성
<pre>
식별자의 첫 글자는 반드시 영문자나 _ 또는 $로 시작
단어 사이 공백 불가
단어와 단어는 -이나 _로 연결
두 번째 단어는 대문자로 시작
</pre>

### 규칙 6
예약어는 식별자로 사용 불가
<table>

| | | | | |
|:-:|:-:|:-:|:-:|:-:|
| arguments | breake | case | continue | default |
| do | else | false | for | function |
| if | null | return | super | switch |
| this | true | try | typeof | var |
| void | while | with | 