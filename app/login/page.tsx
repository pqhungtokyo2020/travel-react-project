import LoginComp from "@/components/Login";
export default async function Login() {
  return (
    <div className="w-full flex mt-40 mb-20">
      <div className="w-2/3 m-auto">
        <LoginComp />
      </div>
    </div>
  );
}
