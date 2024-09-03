import React from "react";

function SignInPage({ params }: { params: { "sign-in": string } }) {
  console.log(params);
  console.log(params["sign-in"][1]);
  return <h1 className="text-6xl">SignInPage: {params["sign-in"][1]}</h1>;
}

export default SignInPage;
