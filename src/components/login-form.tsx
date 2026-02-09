"use client"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import {  Field, FieldGroup, FieldLabel} from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import {useRouter} from "next/navigation";
// import Image from "next/image"
//
// export function LoginForm({
//   className,
//   ...props
// }: React.ComponentProps<"div">) {
//
//   const router = useRouter()
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Aquí luego Persona A pondrá la validación real.
//     // Por ahora, forzamos la entrada:
//     router.push("/dashboard")
//   }
//
//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <Card className="overflow-hidden p-0 shadow-lg">
//         <CardContent className="grid p-0 md:grid-cols-2">
//           <form className="p-6 md:p-8" onSubmit={handleSubmit}>
//             <FieldGroup>
//               <div className="flex flex-col items-center gap-2 text-center">
//                 <h1 className="text-2xl font-bold">Bienvenido ZambiPan</h1>
//                 <p className="text-muted-foreground text-balance">
//                   Inicio de sesión
//                 </p>
//               </div>
//               <Field>
//                 <FieldLabel htmlFor="email">
//                   Usuario o Correo electrónico
//                 </FieldLabel>
//                 <Input
//                   id="email"
//                   type="email"
//                   required
//                 />
//               </Field>
//               <Field>
//                 <div className="flex items-center">
//                   <FieldLabel htmlFor="password">
//                     Contraseña
//                   </FieldLabel>
//                   <a
//                     href="#"
//                     className="ml-auto text-sm underline-offset-2 hover:underline"
//                   >
//                     ¿Olvidaste tu contraseña?
//                   </a>
//                 </div>
//                 <Input id="password" type="password" required />
//               </Field>
//               <Field>
//                 <Button type="submit" className="w-full bg-[#722F37] hover:bg-[#722F37] text-white">
//                   Iniciar sesión
//                 </Button>
//               </Field>
//             </FieldGroup>
//           </form>
//           <div className="bg-muted hidden md:flex items-center justify-center p-6 bg-gray-100">
//             <Image
//                 src="/logo.png"
//                 alt="Logo"
//                 width={300}
//                 height={300}
//                 className="object-contain"
//             />
//           </div>
//         </CardContent>
//       </Card>
//       <p className="text-center text-xs">
//         ZambiPan POS v1.0
//       </p>
//     </div>
//   )
// }

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
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
                    Correo electrónico
                  </FieldLabel>
                  <Input
                      id="email"
                      type="email"
                      placeholder="admin@zambipan.com"
                      className="h-11 focus-visible:ring-[#722F37]"
                      required
                  />
                </Field>

                <Field className="space-y-2">
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="password" name="password" className="font-semibold text-gray-700">
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

