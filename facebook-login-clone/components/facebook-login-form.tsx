"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function FacebookLoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", { email, password })
  }

  return (
    <div className="space-y-6">
      {/* Facebook Logo */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary mb-2">facebook</h1>
        <p className="text-lg text-muted-foreground">Connect with friends and the world around you on Facebook.</p>
      </div>

      {/* Login Form */}
      <Card className="bg-card shadow-lg border-0">
        <CardHeader className="pb-4">
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email or phone number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-base bg-input border-border placeholder:text-muted-foreground"
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base bg-input border-border placeholder:text-muted-foreground"
                required
              />
              <Button
                type="submit"
                className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Log In
              </Button>
            </form>

            <div className="text-center">
              <a href="#" className="text-sm text-accent hover:underline">
                Forgot password?
              </a>
            </div>

            <Separator className="my-4" />

            <div className="text-center">
              <Button
                variant="outline"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground border-0 font-semibold px-8"
              >
                Create new account
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Footer */}
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          <strong>Create a Page</strong> for a celebrity, brand or business.
        </p>
        <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
          <a href="#" className="hover:underline">
            English (US)
          </a>
          <a href="#" className="hover:underline">
            Español
          </a>
          <a href="#" className="hover:underline">
            Français (France)
          </a>
          <a href="#" className="hover:underline">
            中文(简体)
          </a>
          <a href="#" className="hover:underline">
            العربية
          </a>
        </div>
        <div className="flex justify-center space-x-2 text-xs text-muted-foreground flex-wrap">
          <a href="#" className="hover:underline">
            Sign Up
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Log In
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Messenger
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Facebook Lite
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Watch
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Places
          </a>
        </div>
        <div className="flex justify-center space-x-2 text-xs text-muted-foreground flex-wrap">
          <a href="#" className="hover:underline">
            Games
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Marketplace
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Meta Pay
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Meta Store
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Meta Quest
          </a>
        </div>
        <div className="flex justify-center space-x-2 text-xs text-muted-foreground flex-wrap">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Advertising
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Ad choices
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Cookies
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            More
          </a>
        </div>
        <p className="text-xs text-muted-foreground pt-2">Meta © 2024</p>
      </div>
    </div>
  )
}
