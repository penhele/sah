"use client";

import Galaxy from "@/components/Galaxy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSavings } from "@/features/saving/hooks/use-savings";
import LoginForm from "./login-form";

export default function LoginPage() {
  const { data } = useSavings();

  console.log(data);

  return (
    <div className="relative h-screen bg-[#120F17]">
      <Galaxy
        starSpeed={0.1}
        density={1}
        hueShift={140}
        speed={1}
        glowIntensity={0.2}
        saturation={1}
        mouseRepulsion={false}
        repulsionStrength={2}
        twinkleIntensity={0.2}
        rotationSpeed={0}
        transparent
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Card className=" z-20 w-full h-fit max-w-md">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
