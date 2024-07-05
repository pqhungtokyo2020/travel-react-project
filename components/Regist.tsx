import Link from 'next/link';
export default function Login() {
  return <div className="w-full flex login-box">
    <div className="w-full light-cyan-bg min-h-40 p-5 rounded-2xl">
      <p className="font-medium text-xl my-3 flex">
        <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>会員を登録する</span>
      </p>
      <div className="w-full p-5">
        <form className="w-full login-form">
          <div className="w-full flex mb-5">
            <div className="w-1/5  text-lg items-center flex">
              名前
            </div>
            <div className="w-4/5 items-center login-form-input flex">
              <div className="w-1/12 justify-center flex">
                <svg className="h-6 w-6 green-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
              </div>
              <div className="w-11/12 p-1">
                <input className="w-full h-10 text-lg" type="text" name="email" placeholder="名前を入力してください" />
              </div>
            </div>
          </div>
          <div className="w-full flex mb-5">
            <div className="w-1/5  text-lg items-center flex">
              メールアドレス
            </div>
            <div className="w-4/5 items-center login-form-input flex">
              <div className="w-1/12 justify-center flex">
                <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
              </div>
              <div className="w-11/12 p-1">
                <input className="w-full h-10 text-lg" type="text" name="email" placeholder="メールアドレスを入力してください" />
              </div>
            </div>
          </div>
          <div className="w-full flex mb-5">
            <div className="w-1/5  text-lg items-center flex">
              電話番号
            </div>
            <div className="w-4/5 items-center login-form-input flex">
              <div className="w-1/12 justify-center flex">
                <svg className="h-6 w-6 green-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <div className="w-11/12 p-1">
                <input className="w-full h-10 text-lg" type="text" name="email" placeholder="電話番号を入力してください" />
              </div>
            </div>
          </div>
          <div className="w-full flex mb-5">
            <div className="w-1/5  text-lg items-center flex">
              パスワード
            </div>
            <div className="w-4/5 items-center login-form-input flex">
              <div className="w-1/12 justify-center flex mx-2">
                <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div className="w-11/12 p-1">
                <input className="w-full h-10 text-lg" type="text" name="password" placeholder="パスワードを入力してください" />
              </div>
            </div>
          </div>
          <div className="w-full flex mb-5">
            <div className="w-1/5  text-lg items-center flex">
              パスワード確認
            </div>
            <div className="w-4/5 items-center login-form-input flex">
              <div className="w-1/12 justify-center flex mx-2">
                <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div className="w-11/12 p-1">
                <input className="w-full h-10 text-lg" type="text" name="password" placeholder="パスワードを再度入力してください" />
              </div>
            </div>
          </div>
          <div className="w-full flex mb-5">
            <div className="w-1/5  text-lg items-center flex">
            </div>
            <div className="w-4/5 items-center flex">
              <input className="w-4 h-4 mr-2" type="checkbox" name="policy" id="policy-box" defaultChecked={true} />
              <label className="policy-label">
                <Link href="#" className="mx-1 orange-txt text-lg">ポリシー</Link>
                <span className="text-lg">を同意する</span>
              </label>
            </div>
          </div>
          <div className="w-full flex justify-center flex my-5">
            <Link className="btn-login ml-1 rounded-3xl items-center px-4 h-10 flex font-bold" href="#">登録</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
}