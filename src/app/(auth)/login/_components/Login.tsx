"use client";

import { FooterButtons } from "@/components/auth";
import { DynamicCardHeader } from "@/components/card";
import { FormInput } from "@/components/dynamic-inputs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { LoginFooter } from "./LoginFooter";

export const Login = () => {
  const { push } = useRouter();

  return (
    <Card className="w-[416px] border-none shadow-none gap-6 flex flex-col">
      <DynamicCardHeader
        title="Log in"
        description="Log in to enjoy your favorite dishes."
      />

      <CardContent className="p-0">
        <form className="flex flex-col gap-6">
          <div className="grid items-start w-full gap-4">
            <FormInput name="email" placeholder="Email" />
            <FormInput name={""} placeholder={""} />
            <Button variant="link" className="p-0 underline w-fit">
              Forgot password ?
            </Button>
          </div>
          <FooterButtons buttonText="Let`s Go" />
        </form>
      </CardContent>
      <LoginFooter />
    </Card>
  );
};
