import React from "react";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <>
      <section>
        <main>
          <article>
            <div className="phone-mockup">스마트폰 목업</div>
            <div className="login-and-signup">
              <div className="login-box">
                <h1>Instagram</h1>
                <div className="login-input">
                  <label className="id-input">
                    <span>전화번호, 사용자 이름 또는 이메일</span>
                    <input
                      type="text"
                      aria-label="전화번호, 사용자 이름 또는 이메일"
                      required
                      name="username"
                      maxLength="75"
                    />
                  </label>
                  <label className="pw-input">
                    <span>비밀번호</span>
                    <input
                      type="text"
                      aria-label="비밀번호"
                      required
                      name="password"
                      autoCorrect="off"
                    />
                  </label>
                  <button>로그인</button>
                </div>
                <p>비밀번호를 잊으셨나요?</p>
              </div>

              <div className="signup-box">
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
