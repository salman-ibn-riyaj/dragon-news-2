"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";

const LogInWith = () => {
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const signInGithub = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}
  return (
    <div>
      <h3 className="font-bold mb-4">Log in with</h3>

      <div className="space-y-2">
        <Button onClick={signIn} className={"font-bold"}>
          Log in with Google
        </Button>
        <Button onClick={signInGithub} variant="secondary" className={"font-bold"}>
          Log in with Github
        </Button>
      </div>
    </div>
  );
};

export default LogInWith;
