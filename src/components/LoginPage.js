import React from "react";

const LoginPage = () => {
  return (
    <>
      <section>
        <main>
          <article>
            <div>스마트폰 목업</div>
            <div>
              <h1>Instagram</h1>
              <div>
                <input
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input type="text" placeholder="비밀번호" />
                <button>로그인</button>
              </div>
              <p>비밀번호를 잊으셨나요?</p>
            </div>
            <div>
              <p>계정이 없으신가요?</p>
              <button>가입하기</button>
            </div>
            <div>
              <p>앱을 다운로드하세요.</p>
              <div>
                <div>앱스토어 다운</div>
                <div>구글 스토어 다운</div>
              </div>
            </div>
          </article>
          <footer>
            <div>
              <ul>
                <li>Meta</li>
                <li>소개</li>
                <li>블로그</li>
                <li>채용 정보</li>
                <li>도움말</li>
                <li>API</li>
                <li>개인정보처리방침</li>
                <li>약관</li>
                <li>인기 계정</li>
                <li>해시태그</li>
                <li>위치</li>
                <li>Instagram Lite</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>댄스</li>
                <li>식음료</li>
                <li>집 및 정원</li>
                <li>음악</li>
                <li>시각 예술</li>
              </ul>
            </div>
            <div>
              <select>
                <option value="ko">한국어</option>
              </select>
              <address>© 2022 Instagram from Meta</address>
            </div>
          </footer>
        </main>
      </section>
    </>
  );
};

export default LoginPage;
