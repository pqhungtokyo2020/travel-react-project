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
          <div className="w-full flex justify-center flex my-5">
            <Link className="btn-login ml-1 rounded-3xl items-center px-4 h-10 flex font-bold" href="#">登録</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
}