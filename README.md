🎯 미니프로젝트_(HangHaeBox) FrontEnd 🎯

🚀 1. 프로젝트 설명

나만이 볼 수 있는, 내가 다녀온 여행기록 및 경험, 추억들을 사진으로 남겨보자라는 생각에서 시작된 프로젝트입니다. 
***

🚀 2. 페이지 구성 및 설명

 ✈ 2-1) 로그인 페이지
 * 나만의 여행기록 및 추억을 사진을 보관하는 개인 장소이기 때문에
 로그인을 해야 접근 할 수 있습니다.
 
![](https://velog.velcdn.com/images/jinho9203/post/186ba42c-f24b-4c48-b8b2-df2655bc6eac/image.PNG)


***

✈ 2-2) 로그인 페이지

 * 사이트 접근을 위하여 회원가입이 필요합니다.
 이에 따른 회원가입 페이지 입니다.

![](https://velog.velcdn.com/images/jinho9203/post/5a9f0038-38dd-4fd7-a8d0-00cbeaab2b87/image.PNG)


***

✈ 2-3) 메인페이지

* 로그인을 하게되면 나만의 공간으로 들어오게 됩니다.
이곳에서 여행기록, 경험에 관한 폴더를 생성할 수 있습니다.

* 폴더를 생성할 때에는 관련 해시태그를 추가할 수 있는데, 그 태그들이 모여서
우측에 사용자를 통틀어서 많이 쓰인 태그 Top5와 내가 많이 쓴 태그 Top5를
확인 할 수 있습니다. 
* 내가 많이 쓴 태그는 얼마나 태그를 사용했는지 숫자로도 나타나는 것을 확인할 수 있습니다.

![](https://velog.velcdn.com/images/jinho9203/post/4cf56700-bb9d-45a2-bc0f-205541e07269/image.PNG)


***

✈ 2-4) 폴더 추가페이지

* 폴더 추가할 때 여행 혹은 경험 날짜, 제목, 태그를 입력할 수 있습니다.
![](https://velog.velcdn.com/images/jinho9203/post/e682e3f3-6d07-47bd-bb32-12ab27dd7bc8/image.PNG)

* 날짜를 달력형태로 선택할 수 있게 구현하였고, 제목은 입력만 하면 됩니다.

* 태그의 경우 "#" 을 붙이지 않고 붙이고 싶은 태그를 입력하고 Enter키를 누르면 자동으로 "#" 이 붙어 태그 입력칸 밑에 현재까지 입력한 태그 내역이 보입니다.

![](https://velog.velcdn.com/images/jinho9203/post/32fe4d91-5cbd-41e0-8f52-44bb364becfb/image.PNG)

***

✈ 2-5) 폴더 추가후 메인페이지

* 폴더 추가 후 메인페이지로 돌아왔습니다. 메인페이지에는 전에는 없던
추가한 폴더가 생성된 것을 확인 할 수 있습니다.

![](https://velog.velcdn.com/images/jinho9203/post/a2ac75de-59fe-4d6b-8ff1-7b8179c8fd90/image.PNG)


***

✈ 2-6) 생성한 폴더 페이지 

* 생성한 폴더페이지에 들어오게 되면 폴더 페이지가 보입니다.
이곳에서는 사진추가 및 삭제, 폴더삭제, 태그수정의 기능을 사용할 수 있습니다.


![](https://velog.velcdn.com/images/jinho9203/post/760a4568-d5d1-4174-9446-172e9a98d5ba/image.PNG)


* 사진을 추가하고자 하면 다음과 같은 사진추가창이 뜨게 됩니다. 
파일선택을 눌러 원하는 사진파일을 추가할 수 있습니다.

![](https://velog.velcdn.com/images/jinho9203/post/2229da2e-949f-4ed6-a54f-600607238105/image.PNG)
 
* 사진을 추가하게 되면 다음과 같이 추가한 사진이 보이고, 확인버튼을 누르면 사진이 추가됩니다. 

![](https://velog.velcdn.com/images/jinho9203/post/941a059a-d615-4af3-9303-30130b2c0507/image.PNG)

* 다음과 같이 사진이 추가된 것을 확인할 수 있습니다. 
체크박스가 있는 이유는 사진 삭제하기 기능을 사용할 때, 해당하는 사진의 체크박스를 체크 한 후 삭제하기를 누르면 삭제가 되게끔 하기 위함입니다.

![](https://velog.velcdn.com/images/jinho9203/post/1251b266-909a-40cf-928a-3325efacee9d/image.PNG)

*  생성한 폴더 페이지 하단의 태그수정 버튼을 누르면 처음 폴더 추가할 때 입력했던 태그를 수정할 수도 있고, 새로 추가할 수도 있습니다. 

![](https://velog.velcdn.com/images/jinho9203/post/e9ba5e2e-7d6e-4bb9-86e1-ae0fd5cd1205/image.PNG)

* 예시로 #항해99 태그를 넣어서 수정완료버튼을 누르면 다음 나오는 사진과 같이 완료가 됩니다.

![](https://velog.velcdn.com/images/jinho9203/post/e0f10f6c-493a-47d7-b7de-6d136c86b64f/image.PNG)

***

✈ 2-7) 폴더 삭제 후 메인페이지

* 생성한 폴더페이지에 있던 폴더삭제버튼을 눌렀을때, 폴더 삭제가 진행되어 메인페이지로 돌아오고, 일전의 생성과 다르게 삭제가 된것을 확인할 수 있습니다.

![](https://velog.velcdn.com/images/jinho9203/post/57d1af2a-eaca-42ac-81ee-e9893d5e1ec5/image.PNG)

🚀 3. 페이지 와이어프레임

✈ 3-1) 로그인 페이지

![](https://velog.velcdn.com/images/jinho9203/post/d685907a-1f77-4a1f-adc2-2e403025f11c/image.jpg)

***

✈ 3-2) 회원가입 페이지
![](https://velog.velcdn.com/images/jinho9203/post/5f3d51f1-0f23-42f6-8f41-6d036f8183c5/image.jpg)

***

✈ 3-3) 메인페이지
![](https://velog.velcdn.com/images/jinho9203/post/15d30f62-1666-45dd-b854-d1d26f805ed5/image.jpg)

***

✈ 3-4) 메인페이지_ 폴더 추가하기

![](https://velog.velcdn.com/images/jinho9203/post/c2c642ac-f2f6-4382-aad2-0fff8e444b47/image.jpg)

***

✈ 3-5) 폴더페이지

![](https://velog.velcdn.com/images/jinho9203/post/f10d1e6d-a04b-4266-8869-ce80c8c33187/image.jpg)

***

✈ 3-6) 폴더페이지_ 사진추가하기

![](https://velog.velcdn.com/images/jinho9203/post/74057590-ac4f-4cd4-ab27-89f70272a65e/image.jpg)

***

🚀 4. API 설계

* https://www.notion.so/1-0af4d889a6f54b25a84c964443f6ff10

🚀 5. 트러블 슈팅

✈ 5-1) 아아아아
> ㄴㅇㄹㅇㄴㄹㅇㄴㄹ
ㄴㅇㄹ
ㄴㅇㄹ
ㄴㅇㄹ
ㄴㅇㄹ

✈ 5-2) 아아아아
> ㄴㅇㄹㅇㄴㄹㄴㅇㄴㅇ
ㄴㅇㄹ
ㄴㅇㄹ
ㄴㅇㄹ

✈ 5-3) 아아아아
> ㅇㄴㅁㅇㅁㅇㅁㄴㅇ
ㅁㄴㅇ
ㅁㄴㅇ
ㅁㄴㅇ


✈ 5-4) 아아아아
> 
ㄴㄹㄴㅇㄹ
ㄴㅇㄹ
ㄴㅇㄹ


✈ 5-5) 아아아아
> ㅇㅁㄴㅇㅁㄴㅇ
ㅁㄴㅇ
ㅁㄴㅇㅁㄴㅇ


✈ 5-6) 아아아아텍스트

🚀 팀원 소개

 * 👷‍♂ 윤상민   👷‍♂이진호
