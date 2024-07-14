import Link from 'next/link';
export default function Login() {
  return <div className="w-full flex login-box">
    <div className="w-full light-cyan-bg min-h-40 p-5 rounded-2xl">
      <p className="font-medium text-xl my-3 flex">
        <svg className="h-7 w-7 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
        <span>ログインする</span>
      </p>
      <div className="w-full p-5">
        <form className="w-full login-form">
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
              パスワード
            </div>
            <div className="w-4/5 items-center login-form-input flex">
              <div className="w-1/12 justify-center flex">
                <svg className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <div className="w-11/12 p-1">
                <input className="w-full h-10 text-lg" type="text" name="password" placeholder="パスワードを入力してください" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center flex my-5">
            <Link className="btn-login ml-1 rounded-3xl items-center px-4 h-10 flex font-bold" href="#">ログイン</Link>
          </div>

          <div className="w-full flex text-lg  items-center green-bd-top-1 mt-10 pt-3">
            <div className="w-1/4 flex pl-10">
            </div>
            <div className="w-3/4 flex pl-20">
              <Link href="/register" className=" flex mr-5 items-center">
                <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                会員を登録する</Link>
              <Link href="#" className=" flex items-center">
                <svg className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>パスワードを忘れる場合</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
}