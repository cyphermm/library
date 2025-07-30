"use client"

import type React from "react"

import { useState } from "react"
import { ShoppingCart, Star, Truck, Shield, Heart, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const featuredBooks = [
  {
    id: 1,
    title: "O Segredo do Sucesso",
    author: "Maria Silva",
    price: 29.9,
    originalPrice: 39.9,
    rating: 4.8,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=200&text=O+Segredo+do+Sucesso",
    badge: "Bestseller",
    description: "Descubra os segredos dos empreendedores de sucesso",
  },
  {
    id: 2,
    title: "Aventuras Fantásticas",
    author: "João Santos",
    price: 24.9,
    originalPrice: 34.9,
    rating: 4.9,
    reviews: 189,
    image: "/placeholder.svg?height=300&width=200&text=Aventuras+Fantásticas",
    badge: "Novo",
    description: "Uma jornada épica através de mundos mágicos",
  },
  {
    id: 3,
    title: "Culinária Moderna",
    author: "Ana Costa",
    price: 34.9,
    originalPrice: 44.9,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=300&width=200&text=Culinária+Moderna",
    badge: "Promoção",
    description: "Receitas inovadoras para o chef moderno",
  },
  {
    id: 4,
    title: "Mistérios do Passado",
    author: "Carlos Lima",
    price: 27.9,
    originalPrice: 37.9,
    rating: 4.6,
    reviews: 203,
    image: "/placeholder.svg?height=300&width=200&text=Mistérios+do+Passado",
    badge: "Popular",
    description: "Desvende os enigmas da história antiga",
  },
]

const categories = [
  { name: "Ficção", count: 245, image: "/images/fiction-category.png" },
  { name: "Negócios", count: 189, image: "/images/business-category.png" },
  { name: "Romance", count: 167, image: "/images/romance-category.png" },
  { name: "Culinária", count: 134, image: "/images/cooking-category.png" },
  { name: "Tecnologia", count: 98, image: "/images/tech-category.png" },
  { name: "História", count: 156, image: "/images/history-category.png" },
]

const testimonials = [
  {
    name: "Patricia Oliveira",
    rating: 5,
    comment: "Excelente qualidade dos livros e entrega super rápida! Recomendo muito.",
    avatar: "/placeholder.svg?height=50&width=50&text=PO",
  },
  {
    name: "Roberto Silva",
    rating: 5,
    comment: "Melhor livraria online que já usei. Preços justos e atendimento impecável.",
    avatar: "/placeholder.svg?height=50&width=50&text=RS",
  },
  {
    name: "Fernanda Costa",
    rating: 5,
    comment: "Adoro as promoções e a variedade de títulos. Sempre encontro o que procuro!",
    avatar: "/placeholder.svg?height=50&width=50&text=FC",
  },
]

export default function BookstorePage() {
  const [cartItems, setCartItems] = useState(0)
  const [email, setEmail] = useState("")

  const addToCart = () => {
    setCartItems((prev) => prev + 1)
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Obrigado por se inscrever! Você receberá nossas melhores ofertas.")
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-orange-600">📚 Library 3A</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                Início
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                Categorias
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                Ofertas
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contato
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Input placeholder="Buscar livros..." className="w-64" />
                <Button size="sm" variant="outline">
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="outline" size="sm" className="relative bg-transparent">
                <ShoppingCart className="h-4 w-4" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden bg-transparent">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col space-y-4 mt-8">
                    <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                      Início
                    </a>
                    <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                      Categorias
                    </a>
                    <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                      Ofertas
                    </a>
                    <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
                      Contato
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Descubra Seu Próximo
                <span className="text-orange-600"> Livro Favorito</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Mais de 10.000 títulos com os melhores preços e entrega rápida para todo o Brasil
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Ver Ofertas Especiais
                </Button>
                <Button size="lg" variant="outline">
                  Explorar Categorias
                </Button>
              </div>

              <div className="flex items-center space-x-6 mt-8">
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">Frete Grátis acima de R$ 50</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Compra 100% Segura</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/hero-books.png"
                alt="Library 3A - Sua livraria online"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Até 50% OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Livros em Destaque</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selecionamos os melhores títulos com ofertas imperdíveis especialmente para você
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <Card key={book.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-orange-600">{book.badge}</Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-transparent"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <h4 className="font-semibold text-gray-900 mb-1">{book.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">por {book.author}</p>
                  <p className="text-sm text-gray-500 mb-3">{book.description}</p>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {book.rating} ({book.reviews} avaliações)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-lg font-bold text-orange-600">R$ {book.price.toFixed(2)}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">
                        R$ {book.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-green-600">
                      {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700" onClick={addToCart}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Explore por Categoria</h3>
            <p className="text-gray-600">Encontre exatamente o que você está procurando</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
                  />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h4>
                  <p className="text-gray-600">{category.count} livros disponíveis</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">O Que Nossos Clientes Dizem</h3>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50k+</div>
                <div className="text-gray-600">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">4.9</div>
                <div className="text-gray-600">Avaliação Média</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">10k+</div>
                <div className="text-gray-600">Livros Vendidos</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Não Perca Nenhuma Oferta!</h3>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
            Cadastre-se em nossa newsletter e receba as melhores promoções, lançamentos e dicas de leitura diretamente
            no seu e-mail
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              Cadastrar
            </Button>
          </form>

          <p className="text-orange-100 text-sm mt-4">🎁 Ganhe 10% de desconto na primeira compra ao se cadastrar!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">📚 Library 3A</h4>
              <p className="text-gray-400 mb-4">
                Sua livraria online de confiança com os melhores preços e atendimento excepcional.
              </p>
              <div className="flex items-center space-x-4">
                <Truck className="h-5 w-5 text-green-400" />
                <span className="text-sm">Entrega em todo Brasil</span>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Categorias</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ficção
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Negócios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Romance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Culinária
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Atendimento</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Trocas e Devoluções
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Frete e Entrega
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Segurança</h5>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-400">Site 100% Seguro</span>
              </div>
              <p className="text-gray-400 text-sm">Seus dados estão protegidos com criptografia SSL</p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Library 3A. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
