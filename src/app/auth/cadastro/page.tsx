"use client";

import { Logo } from "@/components/logo";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

import { useRouter } from "next/navigation";

const cadastroSchema = z.object({
  nome: z.string().trim().min(2, {
    message: "O nome deve ter no mínimo 2 caracteres",
  }),
  email: z.string().trim().email({
    message: "Insira um e-mail válido",
  }),
  senha: z
    .string()
    .min(4, { message: "A senha deve possuir no mínimo 4 caracteres" })
    .regex(/[a-zA-Z]/, { message: "A senha deve conter letras" })
    .regex(/[0-9]/, { message: "A senha deve conter números" }),
  curso: z.string().trim().min(2, {
    message: "O curso deve ter no mínimo 2 caracteres",
  }),
  faculdade: z.string().trim().min(2, {
    message: "A faculdade deve ter no mínimo 2 caracteres",
  }),
  tipo: z.enum(["ALUNO", "INSTITUIÇÃO"], {
    message: "O tipo deve ser ALUNO ou INSTITUIÇÃO",
  }),
});

export default function Cadastro() {
  const form = useForm<z.infer<typeof cadastroSchema>>({
    resolver: zodResolver(cadastroSchema),
    defaultValues: {
      nome: "",
      curso: "",
      email: "",
      faculdade: "",
      senha: "",
      tipo: "ALUNO",
    },
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof cadastroSchema>) {
    if (
      values.nome === "admin" &&
      values.email === "admin@admin.com" &&
      values.senha === "admin123"
    ) {
      toast.success("Login bem-sucedido!", {
        description: "Clique abaixo para acessar a página inicial.",
        action: {
          label: "Ir para Home",
          onClick: () => router.push("/screens/home"),
        },
      });
    } else {
      toast.error("Usuário inválido", {
        description: "Use: nome admin, email admin@admin e senha admin123.",
      });
    }
  }

  return (
    <div className="p-20">
      <Logo size={180} font={3} />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex items-center justify-center mt-16 flex-col"
        >
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input
                    className="w-96 rounded-full p-6 h-12"
                    placeholder="Insira seu nome"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="w-96 rounded-full p-6 h-12"
                    placeholder="Insira seu e-mail"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="faculdade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Faculdade</FormLabel>
                <FormControl>
                  <Input
                    className="w-96 rounded-full p-6 h-12"
                    placeholder="Insira sua faculdade"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tipo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de cadastro</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-96 rounded-full p-6 h-12">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ALUNO">Aluno</SelectItem>
                      <SelectItem value="INSTITUIÇÃO">Instituição</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="curso"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Curso</FormLabel>
                <FormControl>
                  <Input
                    className="w-96 rounded-full p-6 h-12"
                    placeholder="Insira seu curso"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senha"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input
                    className="w-96 rounded-full p-6 h-12"
                    placeholder="Insira sua senha"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-yellow-400 text-black w-96 p-6 h-12 font-bold rounded-full hover:bg-yellow-500 cursor-pointer"
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
      </Form>
    </div>
  );
}
