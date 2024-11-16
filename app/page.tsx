"use client";
import React, { useState, useEffect, useCallback } from 'react'
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { CheckCircle, Dumbbell, MessagesSquare, Utensils, ChevronRight, ChevronLeft } from "lucide-react"

export default function Component() {
  const whatsappNumber = "+5511999999999" // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre a consultoria.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const results = [
    { name: "João Teste", description: "Perdeu 15kg em 3 meses", image: "https://placehold.co/300x200" },
    { name: "Maria", description: "Ganhou 5kg de massa muscular", image: "https://placehold.co/300x200" },
    { name: "Pedro", description: "Reduziu 8% de gordura corporal", image: "https://placehold.co/300x200" },
    { name: "Ana", description: "Melhorou condicionamento físico", image: "https://placehold.co/300x200" },
    { name: "Carlos", description: "Aumentou força em 30%", image: "https://placehold.co/300x200" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length)
  }, [results.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + results.length) % results.length)
  }, [results.length])

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000)
    return () => clearInterval(intervalId)
  }, [nextSlide])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header section remains unchanged */}
      <header className="relative bg-black">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg?height=50&width=50" alt="RK Team Logo" className="h-12 w-12" />
            <span className="text-2xl font-bold text-red-600">RK TEAM</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#sobre" className="hover:text-red-500 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-red-500 transition-colors">Serviços</a>
            <a href="#resultados" className="hover:text-red-500 transition-colors">Resultados</a>
            <a href="#metodologia" className="hover:text-red-500 transition-colors">Metodologia</a>
            <a href="#contato" className="hover:text-red-500 transition-colors">Contato</a>
          </nav>
          <Button
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Quero Contratar
          </Button>
        </div>
      </header>

      {/* Hero Section remains unchanged */}
      <section className="relative py-20 bg-gradient-to-b from-black to-red-950">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforme seu corpo e sua vida com a
              <span className="text-red-500"> RK TEAM</span>
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Consultoria esportiva personalizada com acompanhamento profissional para alcançar seus objetivos
            </p>
            <Button
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
            >
              Comece Sua Transformação
              <ChevronRight className="ml-2" />
            </Button>
          </div>
          <div className="relative">
          <img src="https://placehold.co/600x500" alt="Transformação" />
          </div>
        </div>
      </section>

      {/* Serviços section remains unchanged */}
      <section id="servicos" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Nossos <span className="text-red-500">Serviços</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="h-8 w-8 text-red-500" />,
                title: "Treinos Personalizados",
                description: "Programas de treino adaptados às suas necessidades e objetivos específicos."
              },
              {
                icon: <Utensils className="h-8 w-8 text-red-500" />,
                title: "Plano Alimentar",
                description: "Orientação nutricional personalizada para maximizar seus resultados."
              },
              {
                icon: <MessagesSquare className="h-8 w-8 text-red-500" />,
                title: "Suporte WhatsApp",
                description: "Acompanhamento constante para tirar dúvidas e manter você motivado."
              }
            ].map((service, index) => (
              <Card key={index} className="bg-zinc-800 border-red-600/20">
                <CardContent className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Results Carousel Section */}
      <section id="resultados" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Resultados <span className="text-red-500">Reais</span>
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {results.map((result, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="flex flex-col items-center">
                      <img src={result.image} alt={result.name} className="w-64 h-64 object-cover rounded-full mb-4" />
                      <h3 className="text-xl font-bold mb-2">{result.name}</h3>
                      <p className="text-gray-300 text-center">{result.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-red-600 p-2 rounded-full">
              <ChevronLeft className="text-white" />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-red-600 p-2 rounded-full">
              <ChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Metodologia section remains unchanged */}
      <section id="metodologia" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Como <span className="text-red-500">Funciona</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  "Ganho de massa muscular",
                  "Perda de gordura corporal",
                  "Condicionamento físico",
                  "Qualidade de vida mesmo com limitações"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white mt-8"
              >
                Quero Começar Agora
              </Button>
            </div>
            <div className="relative">
            <img src="https://placehold.co/400x500" alt="Metodologia" className="rounded-lg shadow-xl" />
              
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Treinador section remains unchanged */}
      <section id="sobre" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quem é o <span className="text-red-500">Treinador RK?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://placehold.co/500x400"
                alt="Treinador RK"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg mb-6 text-gray-300">
                Formado em Educação Física / Nutrição com mais de 10 anos de dedicação à área.
                Pós graduado em várias especialidades como nutrição esportiva, nutrição estética,
                psicologia do esporte e coach em bodybuilding.
              </p>
              <p className="text-lg mb-8 text-gray-300">
                Nosso propósito é guiar nossos clientes na jornada para conquistar o corpo dos
                sonhos e recuperar a autoestima perdida devido ao sedentarismo e à falta de
                cuidado com o corpo.
              </p>
              <Button
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Fale Comigo no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final section remains unchanged */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar seu Corpo?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Junte-se a mais de 2000 alunos que já transformaram suas vidas com nossa consultoria personalizada
          </p>
          <Button
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6"
          >
            Quero Fazer Parte da RK TEAM
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer remains unchanged */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 RK TEAM - Consultoria Esportiva. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}