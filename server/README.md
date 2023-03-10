# 커리큘럼

- express 기본
  - (완료) router
    - (완료) async 처리
  - (완료) middleware
    - (보류) authentication 세팅
  - (완료) validation 세팅
  - (완료) 테스트 기본
- 개발환경 세팅
  - (완료) hot reload
  - (완료) 절대경로 세팅
  - (완료) docker 세팅
- (완료) orm 을 안썻을때 생기는 문제점
  - (완료) query 문을 쌩으로 짜야되는데, 재사용성도 안좋고, 위험할수도 있다.
  - (완료) migration 할때, 코드랑 유기적이지가 않다.
  - (완료) synchronize 가 위험하다고 하는데, 그럼 다른방법은?
  - (완료) proxy 같은 작업을 만들기가 어렵다.
- layer
  - layer 설명
  - directory 구조
    - interface
      - rest-api
        - middleware
        - controller
          - user
            - GET example.com/user
            - POST example.com/user
        - validation
        - presentation
      - graphql
      - pub/sub
    - application
      - usecase
        - user
          - dto
          - interface
          - model
        - auth
      - logic
        - user
    - infrastructure
      - database
        - entities
        - repository
          - getUser
            - find({where: { user: :id }})
      - external-api
        - twich
          - api.twitch.tv/user/:id
    - types
      - dto
      - enum
      - interface
    - modules
      - slack
      - postgres
      - logger
    - di
    - config
      - config service
- di 세팅 전 테스트 / 비교를 위해서
- di 기본
  - di 에 대한 설명
  - 위에서 만들어진 형태 di 로 수정
    - class 형태로 수정
  - 테스트 변경
- db 세팅
  - (완료) entity 세팅
  - (완료) migration 이해
  - repository 세팅
- 기타 모듈
  - config
  - logger
- monorepo
- infra
  - dockerfile 세팅
  - db 세팅
  - serverless 란
  - cloud run deploy
  - loadbalance setting
  - domain setting
