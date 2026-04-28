"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { InputGroup } from "@heroui/react";
import { useState } from "react";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    const { data, error } = await authClient.signIn.email(
      {
        email: userData.email, // required
        password: userData.password, // required
        rememberMe: true,
        //   callbackURL: "/",
      },
      {
        onSuccess: () => {
          router.push("/");
        },
      },
    );

    if (data) {
      alert("Sign in success");
    }
    if (error) {
      alert("Sign in failed " + error.message);
    }
  };

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-3xl font-bold mb-4">Log In</h2>
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter Your Email" />
          <FieldError />
        </TextField>
        <TextField className="w-full max-w-[280px]" name="password">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full max-w-[280px]"
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Log In
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <p>
          Don't have an account?{" "}
          <Link className="text-purple-500" href={"/register"}>
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPage;
