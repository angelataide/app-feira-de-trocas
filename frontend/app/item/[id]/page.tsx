"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react"

// Dados mockados - normalmente viria de uma API
const itemDetalhes = {
  id: 1,
  titulo: "Livros de Romance",
  descricao:
    "Coleção de 15 livros de romance em ótimo estado. Inclui autores como Nicholas Sparks, Jojo Moyes, e outros. Todos os livros foram bem cuidados, sem páginas rasgadas ou anotações.",
  categoria: "Livros",
  usuario: "Maria Silva",
  bairro: "Centro",
  dataPublicacao: "2 dias atrás",
  imagem: "/placeholder.png",
  status: "disponivel",
  condicao: "Ótimo estado",
  observacoes: "Prefiro trocar por itens de casa ou decoração. Disponível para encontro nos finais de semana.",
}

const meusItens = [
  { id: 1, titulo: "Conjunto de Panelas", categoria: "Casa" },
  { id: 2, titulo: "Jogos de Tabuleiro", categoria: "Brinquedos" },
  { id: 3, titulo: "Roupas Masculinas", categoria: "Roupas" },
]

export default function ItemDetalhePage({ params }: { params: { id: string } }) {
  const [showPropostaForm, setShowPropostaForm] = useState(false)
  const [propostaEnviada, setPropostaEnviada] = useState(false)
  const [formData, setFormData] = useState({
    itemOferecido: "",
    mensagem: "",
  })

  const handleEnviarProposta = async (e: React.FormEvent) => {
    e.preventDefault()

    // Simular envio da proposta
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setPropostaEnviada(true)
    setShowPropostaForm(false)
  }

  if (propostaEnviada) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                </Link>
                <h1 className="text-2xl font-bold text-green-600">TrocaVizinho</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-600 mb-2">Proposta Enviada!</h2>
              <p className="text-gray-600 mb-6">
                Sua proposta foi enviada para {itemDetalhes.usuario}. Você receberá uma notificação quando ela for
                respondida.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/">
                  <Button variant="outline">Voltar ao Início</Button>
                </Link>
                <Link href="/propostas">
                  <Button className="bg-green-600 hover:bg-green-700">Ver Minhas Propostas</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-green-600">TrocaVizinho</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Imagem do Item */}
          <div>
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img
                src={itemDetalhes.imagem || "/placeholder.png"}
                alt={itemDetalhes.titulo}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Detalhes do Item */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{itemDetalhes.categoria}</Badge>
                <Badge variant="outline" className="text-green-600">
                  {itemDetalhes.status === "disponivel" ? "Disponível" : "Indisponível"}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{itemDetalhes.titulo}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{itemDetalhes.descricao}</p>
            </div>

            {/* Informações do Usuário */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback>
                      {itemDetalhes.usuario
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{itemDetalhes.usuario}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {itemDetalhes.bairro}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {itemDetalhes.dataPublicacao}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detalhes Adicionais */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Detalhes do Item</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Estado de conservação:</span>
                    <span className="ml-2 text-gray-600">{itemDetalhes.condicao}</span>
                  </div>
                  {itemDetalhes.observacoes && (
                    <div>
                      <span className="font-medium text-gray-700">Observações:</span>
                      <p className="mt-1 text-gray-600">{itemDetalhes.observacoes}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Botão de Proposta */}
            {!showPropostaForm ? (
              <Button
                onClick={() => setShowPropostaForm(true)}
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Propor Troca
              </Button>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Fazer Proposta de Troca</CardTitle>
                  <CardDescription>Escolha um item seu para oferecer em troca</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleEnviarProposta} className="space-y-4">
                    <div>
                      <Label htmlFor="item-oferecido">Item que você oferece *</Label>
                      <Select
                        value={formData.itemOferecido}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, itemOferecido: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um dos seus itens" />
                        </SelectTrigger>
                        <SelectContent>
                          {meusItens.map((item) => (
                            <SelectItem key={item.id} value={item.titulo}>
                              {item.titulo} ({item.categoria})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Conte mais sobre seu item ou deixe uma mensagem para o dono..."
                        value={formData.mensagem}
                        onChange={(e) => setFormData((prev) => ({ ...prev, mensagem: e.target.value }))}
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowPropostaForm(false)}
                        className="flex-1"
                      >
                        Cancelar
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        disabled={!formData.itemOferecido}
                      >
                        Enviar Proposta
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
