"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function LoginForm({
                            className,
                            ...props
                          }: React.ComponentProps<"div">) {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const user = (form.elements.namedItem("email") as HTMLInputElement).value
    const pass = (form.elements.namedItem("password") as HTMLInputElement).value

    if (user === "Admin" && pass === "12345") {
      router.push("/dashboard")
    } else {
      alert("Usuario o contraseña incorrectos")
    }
  }

  return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card className="overflow-hidden p-0 shadow-2xl border-none">
          <CardContent className="grid p-0 md:grid-cols-2">

            {/* Formulario */}
            <form className="p-8 md:p-12 flex flex-col justify-center" onSubmit={handleSubmit}>
              <FieldGroup className="gap-6">
                <div className="flex flex-col items-center gap-2 text-center mb-4">
                  <h1 className="text-3xl font-black tracking-tight text-gray-800">
                    Zambi<span className="text-[#722F37]">Pan</span>
                  </h1>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest font-medium">
                    Punto de venta
                  </p>
                </div>

                <Field className="space-y-2">
                  <FieldLabel htmlFor="email" className="font-semibold text-gray-700">
                    Usuario
                  </FieldLabel>
                  <Input
                      id="email"
                      type="text"
                      className="h-11 focus-visible:ring-[#722F37]"
                      required
                  />
                </Field>

                <Field className="space-y-2">
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="password" className="font-semibold text-gray-700">
                      Contraseña
                    </FieldLabel>
                    <a href="#"
                        className="text-xs font-medium text-[#722F37] hover:opacity-80 transition-opacity"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                  <Input
                      id="password"
                      type="password"
                      className="h-11 focus-visible:ring-[#722F37]"
                      required
                  />
                </Field>

                <Button
                    type="submit"
                    className="w-full h-11 bg-[#722F37] hover:bg-[#5a252c] text-white font-bold transition-all active:scale-95 shadow-md hover:scale-105 cursor-pointer"
                >
                  Iniciar sesión
                </Button>
              </FieldGroup>
            </form>

            {/* Sección del Logo con Margen y Centrado */}
            <div className="flex justify-center items-center w-full h-full bg-gray-50"> {/* Aseguramos que el contenedor ocupe el espacio */}
              <div className="relative w-full max-w-[280px] aspect-square drop-shadow-xl transform hover:scale-105 transition-transform duration-500 ">
                <Image
                    src="/logo.png"
                    alt="ZambiPan Logo"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 280px"
                    className="object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-400 font-medium">
          ZambiPan POS <span className="text-[#722F37]/50">•</span> v1.0
        </p>
      </div>
  )
}

