import { useState, useEffect } from 'react'
import { Button } from './components/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './components/dialog'
import { Input } from './components/input'
import { Label } from './components/label'
import { FrequentlyAskedQuestions } from './screens/frequently-asked-questions'
import { Guarantee } from './screens/guarantee'
import { IsItForYou } from './screens/is-it-for-you'
import { SeeThePlans } from './screens/see-the-plans'
import { Smart } from './screens/smart'
import { TalkToUs } from './screens/talk-to-us'
import { WhatWillYouSee } from './screens/what-will-you-see'
import { Footer } from './screens/footer'

const telefone = '5511933724537'

export default function App() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = () => {
    if (!name || !email) {
      setErrorMessage('Por favor, preencha todos os campos.')
      return
    }
    setErrorMessage('')
    const mensagem = `Nome: ${name}\nEmail: ${email}`
    const mensagemCodificada = encodeURIComponent(mensagem)
    const urlWhatsApp = `https://wa.me/${telefone}?text=${mensagemCodificada}`
    window.open(urlWhatsApp, '_blank')
    resetStates()
    setIsDialogOpen(false)
  }

  const resetStates = () => {
    setEmail('')
    setName('')
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height
        const windowHeight = window.innerHeight
        if (windowHeight - viewportHeight > 150) {
          setIsKeyboardOpen(true)
        } else {
          setIsKeyboardOpen(false)
        }
      }
    }
    window.visualViewport.addEventListener('resize', handleResize)

    return () => {
      window.visualViewport.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <Smart />
      <IsItForYou />
      <WhatWillYouSee />
      <SeeThePlans />
      <Guarantee />
      <FrequentlyAskedQuestions />
      <TalkToUs />
      <Footer />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <div className="fixed bottom-[22px] right-[10px] flex size-[108px] md:right-[60px] lg:right-[30.5px]">
            <img src="/assets/whatsapp.svg" alt="" className="size-[108px]" />
          </div>
        </DialogTrigger>
        <DialogContent
          className={`${isKeyboardOpen ? '-translate-y-full lg:-translate-y-52' : '-translate-y-52'} sm:max-w-[425px]`}
        >
          <DialogHeader>
            <DialogTitle className="flex flex-col text-[1.6em]/[1em] text-[#7ed956] lg:text-[2.3em]">
              Contato via WhatsApp
            </DialogTitle>
            <DialogDescription>
              Nos informe seu nome e e-mail para um melhor atendimento.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nome
              </Label>
              <Input
                id="name"
                placeholder="Qual o seu nome?"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                className="col-span-3 text-black"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                E-mail
              </Label>
              <Input
                id="email"
                placeholder="Qual o seu melhor e-mail?"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="col-span-3 text-black"
              />
            </div>
          </div>
          {errorMessage && (
            <p className="text-center text-red-500">{errorMessage}</p>
          )}
          <DialogFooter>
            <Button onClick={handleSubmit} ctype="submit" className="w-full">
              Enviar mensagem
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
